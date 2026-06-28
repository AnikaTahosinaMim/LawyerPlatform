"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });
  };
  const handleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    console.log(data);
  };

  return (
    <div className="flex items-center justify-center rounded-3xl bg-surface p-6 max-w-2xl mx-auto border mt-5">
      <Surface className="w-full">
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Legend className="my-3 text-2xl">
              Signin or <Link href={"/signup"}>singup</Link>{" "}
            </Fieldset.Legend>
            <Fieldset.Group>
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" variant="secondary" />
                <FieldError />
              </TextField>

              <TextField isRequired name="password" type="password">
                <Label>Password</Label>
                <Input placeholder="Password" variant="secondary" />
                <FieldError />
              </TextField>
            </Fieldset.Group>

            <Button type="submit" className={"w-full"}>
              Signin
            </Button>
          </Fieldset>
        </Form>
        <Button className={"w-full mt-4"} onClick={handleLogin}>
          Continue with google <FaGoogle></FaGoogle>{" "}
        </Button>
      </Surface>
    </div>
  );
}
