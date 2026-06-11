import mongoose from "mongoose";

export async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI .env.local mein add karein");
  }

  try {
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB already connected");
      return mongoose;
    }

    const connection = await mongoose.connect(MONGODB_URI);

    console.log(
      `MongoDB connected successfully: ${connection.connection.host}`,
    );

    return connection;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}
