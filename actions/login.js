"use server"

//import { signIn } from "..
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { signIn } from "next-auth/react";

export const loginUser = async (values) => {
       const { email, password } = values;

       await signIn("credentials", {
              email,
              password,
              redirectTo: DEFAULT_LOGIN_REDIRECT,
      })
      return { success: "Login Successful"};
}