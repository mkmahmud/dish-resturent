import { MongoDBConnect } from "@/lib/mongoDB";
import CustomUser from "@/modules/user";
import User from "@/modules/user";
import { NextResponse } from "next/server";

export async function POST(req: {
  json: () =>
    | PromiseLike<{
        email: any;
        phoneNumber: any;
        username: any;
        password: any;
      }>
    | { email: any; phoneNumber: any; username: any; password: any };
}) {
  try {
    const { email, phoneNumber, username, password } = await req.json();
    await MongoDBConnect();
    await CustomUser.create({
      email: email,
      phoneNumber: phoneNumber,
      username: username,
      password: password,
      role: "user",
    });

    return NextResponse.json({ status: "success" });
  } catch (err) {
    return NextResponse.json({ status: "false", error: err });
  }
}
