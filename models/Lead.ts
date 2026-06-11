import mongoose, { Schema, type Model } from "mongoose";

export interface ILead {
  name: string;
  email: string;
  phone: string;
  agreed: boolean;
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name is too long"],
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

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      maxlength: [14, "Phone number is too long"],
      validate: {
        validator(value: string) {
          return /^\(\d{3}\) \d{3}-\d{4}$/.test(value);
        },
        message: "Please enter a valid US phone number, e.g. (555) 123-4567",
      },
    },

    agreed: {
      type: Boolean,
      required: [true, "Agreement is required"],
      validate: {
        validator(value: boolean) {
          return value === true;
        },
        message: "You must agree to the privacy policy and terms",
      },
    },

    source: {
      type: String,
      default: "lead-modal",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Lead: Model<ILead> =
  (mongoose.models.Lead as Model<ILead>) ||
  mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;
