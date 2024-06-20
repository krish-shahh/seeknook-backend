const express = require('express');
const { Client, Environment } = require('square');
const router = express.Router();

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

router.post('/create-payment', async (req, res) => {
  const { amount, currency, sourceId } = req.body;
  
  try {
    const response = await client.paymentsApi.createPayment({
      sourceId,
      idempotencyKey: `${Date.now()}`, // Unique key for each request
      amountMoney: {
        amount,
        currency,
      },
    });
    res.json({ paymentId: response.result.payment.id });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
