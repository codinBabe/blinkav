import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

export const projectWizardSchema = z.object({
  projectType: z.string().nonempty("Please select a project type."),
  propertyType: z.string().nonempty("Please select a property type."),
  propertySubtype: z.string().nonempty("Please select a building subtype."),
  roomCount: z.string().nonempty("Please enter number of rooms/zones."),
  hasExistingWiring: z.string().nonempty("Please indicate wiring status."),
  contactInfo: z.object({
    name: z.string().min(2, "Name is too short"),
    phone: z.string().min(5, "Enter a valid phone number"),
    email: z.string().email("Invalid email"),
    additionalInfo: z.string().optional(),
  }),
});
export type ContactFormData = z.infer<typeof contactSchema>;
export type ProjectWizardData = z.infer<typeof projectWizardSchema>;
