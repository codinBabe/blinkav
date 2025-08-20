// app/api/contact/route.ts
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
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Message</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .email-wrapper {
      max-width: 640px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 6px 18px rgba(0,0,0,0.1);
    }
    .email-header {
      background: linear-gradient(to right, #0b1f3c, #e98524);
      padding: 20px;
      text-align: center;
      color: #ffffff;
    }
    .email-header img {
      max-height: 60px;
      margin-bottom: 10px;
    }
    .email-header h1 {
      margin: 0;
      font-size: 24px;
      letter-spacing: 1px;
    }
    .email-body {
      padding: 30px;
      color: #333333;
    }
    .email-body h2 {
      font-size: 20px;
      margin-top: 0;
      color: #0b1f3c;
    }
    .info-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    .info-table td {
      padding: 10px 0;
      vertical-align: top;
    }
    .info-table td.label {
      font-weight: bold;
      color: #e98524;
      width: 120px;
    }
    .message-box {
      background-color: #fdf7f2;
      border-left: 4px solid #e98524;
      padding: 15px;
      margin-top: 20px;
      border-radius: 6px;
      font-style: italic;
    }
    .email-footer {
      background-color: #f0f0f0;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #777777;
    }
    .email-footer a {
      color: #e98524;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-header">
      <img src="https://blinkav.co/images/logo-black.png" alt="Blinkav Logo" />
      <h3>New Contact Message</h3>
    </div>
    <div class="email-body">
      <h2>You've received a message from your website:</h2>
      <table class="info-table">
        <tr>
          <td class="label">Name:</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td class="label">Email:</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td class="label">Phone:</td>
          <td>${phone}</td>
        </tr>
        <tr>
          <td class="label">Subject:</td>
          <td>Consultation Scheduler</td>
        </tr>
      </table>
      <div class="message-box">
        Hello Blinkav team,<br />
        ${message}
      </div>
    </div>
    <div class="email-footer">
      This message was sent from the <a href="https://blinkav.co/contact/">Contact Us</a> page.<br />
      &copy; 2025 <strong style="color:#0b1f3c;"> Blinkav Ltd. </strong>. All rights reserved.
    </div>
  </div>
</body>
</html>
`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("❌ Email sending failed:", error);
        return NextResponse.json({ success: false, error: "Email sending failed" }, { status: 500 });
    }
}
