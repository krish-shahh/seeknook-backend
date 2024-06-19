const { Client, Environment } = require('square');
const crypto = require('crypto');

const client = new Client({
  environment: process.env.NODE_ENV === 'production' ? Environment.Production : Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

exports.createPayment = async (req, res) => {
  const { amount, currency, sourceId } = req.body;

  try {
    const idempotencyKey = crypto.randomBytes(22).toString('hex');

    const paymentsApi = client.paymentsApi;
    const { result } = await paymentsApi.createPayment({
      idempotencyKey,
      sourceId,
      amountMoney: {
        amount,
        currency,
      },
    });

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
