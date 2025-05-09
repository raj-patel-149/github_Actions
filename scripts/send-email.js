const nodemailer = require("nodemailer");

const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

async function sendEmail() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    const info = await transporter.sendMail({
      from: `"GitHub Action" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: "✅ GitHub Action Notification",
      text: "Hello! This is an email sent from GitHub Actions using Node.js."
    });

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    process.exit(1);
  }
}

sendEmail();
