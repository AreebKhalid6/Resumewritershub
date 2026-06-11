import nodemailer from "nodemailer";

type ContactEmailPayload = {
  name: string;
  phone?: string;
  email: string;
  subject: string;
  message: string;
  agreed: boolean;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP_HOST, SMTP_USER, and SMTP_PASS must be set in .env.local"
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendContactNotification(
  payload: ContactEmailPayload
) {
  const to =
    process.env.CONTACT_TO_EMAIL || "info@resumewritershub.com";
  const from =
    process.env.SMTP_FROM ||
    process.env.SMTP_USER ||
    "noreply@resumewritershub.com";

  const transporter = getTransporter();

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safePhone = payload.phone ? escapeHtml(payload.phone) : "";
  const safeSubject = escapeHtml(payload.subject);
  const safeMessage = escapeHtml(payload.message);

  const phoneLine = safePhone
    ? `<p><strong>Phone:</strong> ${safePhone}</p>`
    : "";

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `New Contact Form: ${payload.subject}`,
    text: [
      "New contact form submission",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `Subject: ${payload.subject}`,
      `Agreed to contact: ${payload.agreed ? "Yes" : "No"}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1E2532;">
        <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${phoneLine}
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Agreed to contact:</strong> ${payload.agreed ? "Yes" : "No"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${safeMessage}</p>
      </div>
    `,
  });
}

type LeadEmailPayload = {
  name: string;
  email: string;
  phone: string;
  agreed: boolean;
  source?: string;
};

export async function sendLeadNotification(payload: LeadEmailPayload) {
  const to =
    process.env.CONTACT_TO_EMAIL || "info@resumewritershub.com";
  const from =
    process.env.SMTP_FROM ||
    process.env.SMTP_USER ||
    "noreply@resumewritershub.com";

  const transporter = getTransporter();

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safePhone = escapeHtml(payload.phone);
  const safeSource = escapeHtml(payload.source || "lead-modal");

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `New Lead: ${payload.name}`,
    text: [
      "New lead form submission",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Agreed: ${payload.agreed ? "Yes" : "No"}`,
      `Source: ${payload.source || "lead-modal"}`,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1E2532;">
        <h2 style="margin-bottom: 16px;">New Lead Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Agreed:</strong> ${payload.agreed ? "Yes" : "No"}</p>
        <p><strong>Source:</strong> ${safeSource}</p>
      </div>
    `,
  });
}
