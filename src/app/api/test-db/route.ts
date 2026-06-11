import { connectDB } from "../../../../lib/mongodb";

export const runtime = "nodejs";

export async function GET() {
  try {
    const mongoose = await connectDB();

    return Response.json({
      success: true,
      message: "MongoDB connected successfully",
      readyState: mongoose.connection.readyState,
      database: mongoose.connection.name,
      host: mongoose.connection.host,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "MongoDB connection failed",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}