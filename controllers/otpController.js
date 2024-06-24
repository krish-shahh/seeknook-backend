const nodemailer = require('nodemailer');
const admin = require('../firebase-admin-init'); // Ensure this path is correct
const dotenv = require('dotenv');
dotenv.config();

let otps = {};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.sendOtp = async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();
  otps[email] = otp;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}. It is valid for 10 minutes.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending OTP');
    } else {
      res.status(200).send('OTP sent');
    }
  });

  setTimeout(() => {
    delete otps[email];
  }, 600000); // OTP expires after 10 minutes
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  if (otps[email] !== otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  try {
    let userRecord;
    try {
      userRecord = await admin.auth().getUserByEmail(email);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        userRecord = await admin.auth().createUser({
          email: email,
          emailVerified: true,
          password: Math.random().toString(36).slice(-8), // Temporary random password
          displayName: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
          disabled: false
        });
      } else {
        throw error;
      }
    }

    // Remove OTP after verification
    delete otps[email];

    // Create a custom token
    const token = await admin.auth().createCustomToken(userRecord.uid);
    //console.log('Custom token created:', token); // Debugging line

    res.status(200).json({ message: 'OTP verified successfully', token });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
