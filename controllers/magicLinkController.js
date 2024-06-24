const nodemailer = require('nodemailer');

exports.sendMagicLink = async (req, res) => {
  const { email, magicLink } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Magic Sign-In Link',
    text: `Click on the link to sign in: ${magicLink}`,
    html: `<p>Click on the link to sign in: <a href="${magicLink}">${magicLink}</a></p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Magic link sent');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send magic link');
  }
};