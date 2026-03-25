import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, service, message } = await req.json();

    const data = await resend.emails.send({
      from: "PROSOTECH <onboarding@resend.dev>",
      to: ["prosotechnology@gmail.com"],
      subject: "New Consultation Request",
      html: `
        
      <h2>New Consultation Request</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Company:</strong> ${company}</p>
  <p><strong>Service:</strong> ${service}</p>
  <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error sending email" });
  }
}
