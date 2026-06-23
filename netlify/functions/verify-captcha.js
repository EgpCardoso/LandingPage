import fetch from "node-fetch";
import nodemailer from "nodemailer";

export async function handler(event) {

  const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

  const { token, email, message } = JSON.parse(event.body);

  // Valida reCAPTCHA
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });

  const data = await response.json();
  if (!data.success) {
    return { statusCode: 400, body: JSON.stringify({ success: false }) };
  }

  // Dispara e-mail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: "seuemail@exemplo.com",
    subject: "Novo contato via site",
    text: message,
  });

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
}
