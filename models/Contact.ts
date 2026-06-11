import mongoose, { Schema, type Model } from "mongoose";

export interface IContact {
  name: string;
  phone?: string;
  email: string;
  subject: string;
  message: string;
  agreed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name is too long"],
    },

    phone: {
      type: String,
      trim: true,
      maxlength: [14, "Phone number is too long"],
      validate: {
        validator(value: string) {
          if (!value) return true;
          return /^\(\d{3}\) \d{3}-\d{4}$/.test(value);
        },
        message: "Please enter a valid US phone number, e.g. (555) 123-4567",
      },
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email",
      ],
    },

    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      maxlength: [200, "Subject is too long"],
    },

    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [5000, "Message is too long"],
    },

    agreed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Contact: Model<IContact> =
  (mongoose.models.Contact as Model<IContact>) ||
  mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;