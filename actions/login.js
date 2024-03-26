"use server"

import { signIn } from "../auth";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";


export const loginUser = async (values) => {
       const { email, password } = values;

       try {
              await signIn("credentials", {
                      email,
                      password,
                      redirectTo: DEFAULT_LOGIN_REDIRECT,
              })
              return { success: "Login Successful"};
       } catch (error) {
              if( error instanceof AuthError){
                     console.log(error)
                     switch(error.type){
                             case "CredentialsSignin":
                                   return { error: 'Invalid credentials'}
                            default: 
                                   return { error: "Something went wrong, Try again later"}
                     }
              }
              if(isRedirectError){
                      throw error;
              }
       }
}