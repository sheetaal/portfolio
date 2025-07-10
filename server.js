require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 550;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Configure nodemailer (replace with your real SMTP credentials)
  // Example for Gmail: host: 'smtp.gmail.com', port: 465, secure: true
  // For Gmail, you may need to use an App Password if 2FA is enabled
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER || 'sheetal14sinha123@gmail.com',
      pass: process.env.SMTP_PASS || 'Ishita13@',
    },
  });
  // If not configured, return error
  if (!transporter.options.auth.user || !transporter.options.auth.pass) {
    return res.status(500).json({ error: 'SMTP credentials not configured on server.' });
  }

  console.log(process.env.SMTP_USER, process.env.SMTP_PASS);

  try {
    await transporter.sendMail({
      from: 'Portfolio Contact <your@email.com>',
      to: 'sheetal.mitblr2022@learner.manipal.edu',
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br>${message.replace(/\n/g, '<br>')}</p>`
    });
    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 