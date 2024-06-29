import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getUserById } from "@/lib/user";

export async function POST(request) {
       return NextResponse.json({ success: true})
  }

  export async function GET(){
         const session = await getServerSession(authOptions);

         const user = await getUserById(session.user.user_id);
         
         return NextResponse.json(user)
  }