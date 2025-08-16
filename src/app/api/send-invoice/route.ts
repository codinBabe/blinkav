// app/api/invoice/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { InvoiceData } from '@/components/forms/types/project-wizard-interface';
import { generateBusinessEmailTemplate, generateCustomerEmailTemplate } from '@/components/forms/utils/email-templates';

export async function POST(req: Request) {
  try {
    const invoiceData: InvoiceData = await req.json();

    // Create reusable transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // false for port 587, true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to customer
    await transporter.sendMail({
      from: `"${invoiceData.companyInfo.email}" <${process.env.SMTP_USER}>`,
      to: invoiceData.contactInfo.email,
      subject: `Your Quote Request - ${invoiceData.invoiceNumber}`,
      html: generateCustomerEmailTemplate(invoiceData),
    });

    // Send email to business owner
    await transporter.sendMail({
      from: `"${invoiceData.companyInfo.email}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Quote Request - ${invoiceData.invoiceNumber} - ${invoiceData.contactInfo.name}`,
      html: generateBusinessEmailTemplate(invoiceData),
    });

    // Optional: Save to database
    // await saveInvoiceToDatabase(invoiceData);

    return NextResponse.json({
      success: true,
      message: 'Invoice sent successfully',
      invoiceNumber: invoiceData.invoiceNumber
    });

  } catch (error) {
    console.error("❌ Invoice sending failed:", error);
    return NextResponse.json({
      success: false,
      message: 'Failed to send invoice'
    }, { status: 500 });
  }
}