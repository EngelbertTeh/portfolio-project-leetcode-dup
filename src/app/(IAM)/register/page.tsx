'use client';
import Form from '@/components/component/Form';
import Group_ from '@/components/component/Group_';
import Input_ from '@/components/component/Input_';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { InputType } from '@/lib/types';

function Register() {
  return (
    <div className=" bg-[#000c19] h-[100dvh] w-[100dvwq] flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Register with your gmail</CardDescription>
        </CardHeader>
        <CardContent>
          <Form>
            <Group_>
              <Input_ type={InputType.email} placeholder="Email" />
              <Input_ type={InputType.password} placeholder="Password" />
            </Group_>
            <Button type="submit">Register</Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
