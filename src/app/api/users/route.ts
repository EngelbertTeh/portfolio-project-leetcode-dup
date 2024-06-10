import { neon } from '@neondatabase/serverless';
import { compareSync, genSaltSync, hashSync } from 'bcrypt-ts';
import { config } from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';
config({ path: '.env.local' });
const dbcs = process.env.DATABASE_URL;
const sql = neon(dbcs || '');

// DDL
// CREATE

async function configureDatabase() {
  await sql`CREATE TABLE IF NOT EXISTS Users(id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, email VARCHAR(254), password VARCHAR(64))`;
}

// DELETE
async function dropDatabase() {
  await sql`DROP TABLE IF EXISTS Users CASCADE`;
}

// DML
//CREATE
export async function POST(req: NextRequest) {
  const data: { email: string; password: string } = await req.json();
  const salt = genSaltSync(7);
  const hashedPassword = hashSync(data.password, salt);
  await sql`INSERT INTO Users(email, password) VALUES(${data.email}, ${hashedPassword})`;
}

// RETRIEVE
export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email');
  console.log(email);
  return new NextResponse(
    JSON.stringify(
      (await sql`SELECT * FROM Users WHERE email = ${email}`).at(0)
    )
  );
}

// UPDATE
export async function updateUser(email: string, password: string) {}

// DELETE

function createUser(email: string, password: string) {
  fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
}

function findUserByEmail(email: string) {
  return fetch(`http://localhost:3000/api/users?email=${email}`);
}

async function verifyUser(email: string, password: string) {
  //get user by email
  const response = await findUserByEmail(email);
  const user = await response.json();

  // using bcrypt to compare password
  // return true or false
  return compareSync(password, user.password);
}

verifyUser('Benny', '1234').then((res) => console.log(res));

// dropDatabase();
// configureDatabase().catch((e) => console.log(e));
// createUser('Benny', '1234');

// findUserByEmail('Benny').then(async (res) => {
//   const ans = await res.json();
//   console.log(ans);
// });
