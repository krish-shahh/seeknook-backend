const { Client, Environment } = require('square');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const client = new Client({
  environment: "sandbox",
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.createPayment = async (req, res) => {
  const { amount, currency, sourceId, email } = req.body;

  try {
    const idempotencyKey = crypto.randomBytes(22).toString('hex');
    const paymentsApi = client.paymentsApi;

    // Extract the token from sourceId
    const token = sourceId.token;

    const { result } = await paymentsApi.createPayment({
      idempotencyKey,
      sourceId: token,
      amountMoney: {
        amount: parseInt(amount, 10), // Ensure amount is a number
        currency,
      },
    });

    const responseWithStrings = JSON.parse(JSON.stringify(result, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    ));

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'SeekNook Order Receipt',
      text: `Thank you for your purchase! Your payment of $${(amount / 100).toFixed(2)} has been successfully processed. Your payment ID is ${result.payment.id}. Please wait 2-4 business days to recieve approval for your listing.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error('Error sending email:', error);
      }
      console.log('Email sent:', info.response);
    });

    res.status(200).json(responseWithStrings);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
