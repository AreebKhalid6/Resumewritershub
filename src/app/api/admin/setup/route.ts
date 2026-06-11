import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import { connectDB } from "../../../../../lib/mongodb";
import Admin from "../../../../../models/Admin";

export const runtime = "nodejs";

/**
 * Creates the first admin in the database.
 * Only works when the Admin collection is empty.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "Admin";
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password =
      typeof body.password === "string" ? body.password : "";

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 },
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 6 characters",
        },
        { status: 400 },
      );
    }

    await connectDB();

    const existingCount = await Admin.countDocuments();

    if (existingCount > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin already exists. Setup is disabled.",
        },
        { status: 403 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name: name || "Admin",
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Admin created successfully",
        data: {
          id: admin._id.toString(),
          name: admin.name,
          email: admin.email,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Admin setup error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to create admin" },
      { status: 500 },
    );
  }
}
