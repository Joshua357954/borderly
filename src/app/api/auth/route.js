// app/api/users/route.js
import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongoose";
import User from "../../../models/User";

export async function POST(req) {
  const { uid, firstName, lastName, email, photoURL } = await req.json();

  if (!uid || !email) {
    return NextResponse.json(
      { message: "UID and email are required" },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    // Check if the user already exists
    const existingUser = await User.findOne({ uid });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    // Insert the new user
    const newUser = new User({
      uid,
      firstName,
      lastName,
      email,
      photoURL,
    });

    const result = await newUser.save();

    return NextResponse.json(
      { message: "User saved to MongoDB", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving user to MongoDB:", error);
    return NextResponse.json(
      { message: "Error saving user to MongoDB" },
      { status: 500 }
    );
  }
}
