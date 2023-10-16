import { MongoDBConnect } from "@/lib/mongoDB";
import CustomUser from "@/modules/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text(); // Read the text from the request body
    const requestBody = JSON.parse(body); // Parse the JSON text

    const { email, phoneNumber, username, password } = requestBody;

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
