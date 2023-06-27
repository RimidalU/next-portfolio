import User from "@/models/User.model";
import { connect } from "@/utils/mongodb";
import { hash } from 'bcrypt';
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse('User not created', {
      status: 500,
    });
  }
};