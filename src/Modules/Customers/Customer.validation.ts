import { z } from "zod";

export const customerSchema  = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(60, "Name can't exceed 60 characters."),
    
  address: z
    .string()
    .trim()
    .min(5, "Address must be at least 5 characters.")
    .max(100, "Address can't exceed 100 characters."),
    
  suiteFloor: z
    .string()
    .trim()
    .max(50, "Suite/Floor can't exceed 50 characters.")
    .optional(),
    
  city: z
    .string()
    .trim()
    .min(2, "City must be at least 2 characters.")
    .max(50, "City can't exceed 50 characters."),
    
  state: z
    .string()
    .trim()
    .min(2, "State must be at least 2 characters.")
    .max(30, "State can't exceed 30 characters."),
    
  zip: z
    .string()
    .trim()
    .min(3, "ZIP must be at least 3 characters.")
    .max(20, "ZIP can't exceed 20 characters."),
    
  telephone: z
    .string()
    .trim()
    .min(6, "Telephone must be at least 6 characters.")
    .max(20, "Telephone can't exceed 20 characters."),
    
  fax: z
    .string()
    .trim()
    .max(20, "Fax can't exceed 20 characters.")
    .optional(),
    
  mapUrl: z
    .string()
    .trim()
    .url("Please provide a valid map URL."),
    
  email: z
    .array(
      z.string().trim().email("One or more email addresses are invalid.")
    )
    .min(1, "At least one email is required."),
    
  websiteLink: z
    .string()
    .trim()
    .url("Please provide a valid website URL."),
    
  taxId: z
    .string()
    .trim()
    .min(1, "Tax ID must be at least 1 character.")
    .max(30, "Tax ID can't exceed 30 characters."),
    
  other: z
    .string()
    .trim()
    .max(200, "Other can't exceed 200 characters.")
    .optional(),
    
  note: z
    .string()
    .trim()
    .max(500, "Note can't exceed 500 characters.")
    .optional(),

  isActive: z.boolean().optional().default(true),
  isDeleted: z.boolean().optional().default(false),
});
