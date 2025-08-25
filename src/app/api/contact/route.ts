// app/api/contact/route.ts
import { contactUsEmailTemplate } from "@/components/forms/utils/email-templates";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        // Create reusable transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "465"),
            secure: true, // true for port 465, false for 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        // Email options
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL, // Who gets the contact email
            subject: "New Contact Form Submission",
            html: contactUsEmailTemplate({ name, email, phone, message}),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("❌ Email sending failed:", error);
        return NextResponse.json({ success: false, error: "Email sending failed" }, { status: 500 });
    }
}
