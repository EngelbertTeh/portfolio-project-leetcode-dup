import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function Login() {
  return (
    <div className=" bg-[#000c19] h-[100dvh] w-[100dvwq] flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Use your gmail to login</CardDescription>
        </CardHeader>
        <CardContent>
          <form action="">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </form>
        </CardContent>
        <CardFooter className="p-4 pr-2 gap-2  w-full flex justify-end">
          <Button>Login</Button>
          <Button>Register</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
