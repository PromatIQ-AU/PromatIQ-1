import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email via Resend if API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL || "Sales@Promatiq.com";

    // Always log the submission
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    if (resendApiKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "PromatIQ Website <onboarding@resend.dev>",
            to: [notifyEmail],
            subject: `New Enquiry from ${firstName} ${lastName}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br>")}</p>
            `,
            reply_to: email,
          }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          console.error("Resend error:", errorData);
          // Still return success - the submission was logged
        }
      } catch (emailError) {
        console.error("Email send failed:", emailError);
        // Still return success - the submission was logged
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
