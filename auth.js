import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { handlers: { POST, GET },  auth, signIn, signOut } = NextAuth({
        session: { strategy: "jwt"},
        ...authConfig,
})