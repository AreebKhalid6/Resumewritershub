import mongoose from "mongoose";
import { NextResponse } from "next/server";

import { sendLeadNotification } from "../../../../lib/mail";
import { connectDB } from "../../../../lib/mongodb";
import Lead from "../../../../models/Lead";

export const runtime = "nodejs";

const US_PHONE_PATTERN = /^\(\d{3}\) \d{3}-\d{4}$/;

function formatUsPhone(value: string) {
  const digits = value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);

  if (digits.length === 0) return "";
  if (digits.length !== 10) return value.trim();

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

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

    const [leads, total, todayCount] = await Promise.all([
      Lead.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Lead.countDocuments(),
      Lead.countDocuments({ createdAt: { $gte: startOfToday } }),
    ]);

    const totalPages = Math.max(1, Math.ceil(total / limit));

    const data = leads.map((lead) => ({
      _id: String(lead._id),
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      agreed: Boolean(lead.agreed),
      source: lead.source || "lead-modal",
      createdAt: lead.createdAt
        ? new Date(lead.createdAt).toISOString()
        : "",
      updatedAt: lead.updatedAt
        ? new Date(lead.updatedAt).toISOString()
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
    console.error("Get leads error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch leads",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const rawPhone =
      typeof body.phone === "string" ? body.phone.trim() : "";

    const phone = rawPhone ? formatUsPhone(rawPhone) : "";

    const agreed = body.agreed === true;

    const source =
      typeof body.source === "string" && body.source.trim()
        ? body.source.trim()
        : "lead-modal";

    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and phone are required",
        },
        { status: 400 },
      );
    }

    if (!US_PHONE_PATTERN.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid US phone number, e.g. (555) 123-4567",
        },
        { status: 400 },
      );
    }

    if (!agreed) {
      return NextResponse.json(
        {
          success: false,
          message: "You must agree to the privacy policy and terms",
        },
        { status: 400 },
      );
    }

    await connectDB();

    const lead = await Lead.create({
      name,
      email,
      phone,
      agreed,
      source,
    });

    try {
      await sendLeadNotification({
        name,
        email,
        phone,
        agreed,
        source,
      });
    } catch (mailError) {
      console.error("Lead email failed:", mailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your details have been submitted successfully",
        data: {
          id: lead._id.toString(),
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Lead form error:", error);

    if (error instanceof mongoose.Error.ValidationError) {
      const errors = Object.values(error.errors).map(
        (item) => item.message,
      );

      return NextResponse.json(
        {
          success: false,
          message: errors[0] || "Validation failed",
          errors,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}
