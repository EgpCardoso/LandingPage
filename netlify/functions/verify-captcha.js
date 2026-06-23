import nodemailer from "nodemailer";

export async function handler(event) {
  const { token, email, message } = JSON.parse(event.body);

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

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,        
    to: process.env.EMAIL_USER,        
    replyTo: email,
    subject: "Novo contato via site",
    text: `Mensagem de: ${email}\n\n${message}`,
  });

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
}