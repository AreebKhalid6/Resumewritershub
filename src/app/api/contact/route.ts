import mongoose from "mongoose";
import { NextResponse } from "next/server";

import { sendContactNotification } from "../../../../lib/mail";
import { connectDB } from "../../../../lib/mongodb";
import Contact from "../../../../models/Contact";

export const runtime = "nodejs";

const US_PHONE_PATTERN = /^\(\d{3}\) \d{3}-\d{4}$/;

export async function GET(request: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const limit = Math.min(
      50,
      Math.max(1, Number(searchParams.get("limit")) || 10),
    );
    const skip = (page - 1) * limit;

    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const [contacts, total, todayCount] = await Promise.all([
      Contact.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Contact.countDocuments(),
      Contact.countDocuments({ createdAt: { $gte: startOfToday } }),
    ]);

    const totalPages = Math.max(1, Math.ceil(total / limit));

    const data = contacts.map((contact) => ({
      _id: String(contact._id),
      name: contact.name,
      phone: contact.phone || "",
      email: contact.email,
      subject: contact.subject,
      message: contact.message,
      agreed: Boolean(contact.agreed),
      createdAt: contact.createdAt
        ? new Date(contact.createdAt).toISOString()
        : "",
      updatedAt: contact.updatedAt
        ? new Date(contact.updatedAt).toISOString()
        : "",
    }));

    return NextResponse.json({
      success: true,
      count: data.length,
      todayCount,
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  } catch (error) {
    console.error("Get contacts error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch contacts",
      },
      { status: 500 }
    );
  }
}


function formatUsPhone(value: string) {
  const digits = value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);

  if (digits.length === 0) return "";
  if (digits.length !== 10) return value.trim();

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const rawPhone =
      typeof body.phone === "string" ? body.phone.trim() : "";

    const phone = rawPhone ? formatUsPhone(rawPhone) : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "";

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    const agreed = body.agreed === true;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, subject and message are required",
        },
        { status: 400 }
      );
    }

    if (phone && !US_PHONE_PATTERN.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid US phone number, e.g. (555) 123-4567",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const contact = await Contact.create({
      name,
      phone: phone || undefined,
      email,
      subject,
      message,
      agreed,
    });

    try {
      await sendContactNotification({
        name,
        phone: phone || undefined,
        email,
        subject,
        message,
        agreed,
      });
    } catch (mailError) {
      console.error("Contact email failed:", mailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been submitted successfully",
        data: {
          id: contact._id.toString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof mongoose.Error.ValidationError) {
      const errors = Object.values(error.errors).map(
        (item) => item.message
      );

      return NextResponse.json(
        {
          success: false,
          message: errors[0] || "Validation failed",
          errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}