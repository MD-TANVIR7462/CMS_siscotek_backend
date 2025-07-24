import { model, Schema } from "mongoose";
import { Tcustomer } from "./Customer.interface";


const customerSchema = new Schema<Tcustomer>(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minlength: [2, "Name must be at least 2 characters."],
      maxlength: [60, "Name can't exceed 60 characters."],
      unique:true,
    },
    address: {
      type: String,
      required: [true, "Address is required."],
      minlength: [5, "Address must be at least 5 characters."],
      maxlength: [100, "Address can't exceed 100 characters."],
    },
    suiteFloor: {
      type: String,
      maxlength: [50, "Suite/Floor can't exceed 50 characters."],
    },
    city: {
      type: String,
      required: [true, "City is required."],
      minlength: [2, "City must be at least 2 characters."],
      maxlength: [50, "City can't exceed 50 characters."],
    },
    state: {
      type: String,
      required: [true, "State is required."],
      minlength: [2, "State must be at least 2 characters."],
      maxlength: [30, "State can't exceed 30 characters."],
    },
    zip: {
      type: String,
      required: [true, "ZIP code is required."],
      minlength: [3, "ZIP must be at least 3 characters."],
      maxlength: [20, "ZIP can't exceed 20 characters."],
    },
    telephone: {
      type: String,
      required: [true, "Telephone is required."],
      minlength: [6, "Telephone must be at least 6 characters."],
      maxlength: [20, "Telephone can't exceed 20 characters."],
    },
    fax: {
      type: String,
      maxlength: [20, "Fax can't exceed 20 characters."],
    },
    mapUrl: {
      type: String,
      match: [
        /^(https?:\/\/)?([\w\d-]+\.)+[\w-]+(\/[^\s]*)?$/,
        "Please provide a valid map URL.",
      ],
    },
    email: {
      type: [String],
      required: [true, "At least one email is required."],
      validate: {
        validator: function (emails: string[]) {
          return emails.every(email => /^\S+@\S+\.\S+$/.test(email));
        },
        message: "One or more email addresses are invalid.",
      },
    },
    websiteLink: {
      type: String,
      match: [
        /^(https?:\/\/)?([\w\d-]+\.)+[\w-]+(\/[^\s]*)?$/,
        "Please provide a valid website URL.",
      ],
    },
    taxId: {
      type: String,
      minlength: [1, "Tax ID must be at least 1 characters."],
      maxlength: [30, "Tax ID can't exceed 30 characters."],
    },
    other: {
      type: String,
      maxlength: [200, "Other can't exceed 200 characters."],
    },
    note: {
      type: String,
      maxlength: [500, "Note can't exceed 500 characters."],
    },
        isActive: {
      type: Boolean,
      required: false,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const CustomerModel = model<Tcustomer>("Customer", customerSchema);
