'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useRef } from 'react';

function Register() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div className=" bg-[#000c19] h-[100dvh] w-[100dvwq] flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Register with your gmail</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action="api/users/">
            <input
              type="text"
              placeholder="Email"
              pattern="^[a-zA-Z0-9]+(.[a-zA-Z0-9]+){0,1}@[gG][mM][aA][iI][lL].[cC][oO][mM]$"
              required
              title="Enter valid gmail address"
            />
            <input
              type="password"
              placeholder="Password"
              minLength={8}
              maxLength={30}
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
              required
              title="Enter valid password, i.e., at least 8 characters long,  include a combination of uppercase and lowercase letters, include at least one number and symbol"
            />
            <button type="submit">Register</button>
          </form>
        </CardContent>
        <CardFooter className="p-4 pr-2 gap-2  w-full flex justify-end">
          <Button
            onClick={() => {
              formRef.current?.submit();
            }}
          >
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Register;
