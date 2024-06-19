const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Make sure to set your Stripe secret key in the environment variables

const createPaymentIntent = async (req, res) => {
  const { plan, email } = req.body;

  let amount;
  switch (plan) {
    case 'basic':
      amount = 25000; // $250.00 in cents
      break;
    case 'bronze':
      amount = 50000; // $500.00 in cents
      break;
    case 'gold':
      amount = 100000; // $1000.00 in cents
      break;
    default:
      return res.status(400).send('Invalid plan selected.');
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
      receipt_email: email,
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  createPaymentIntent,
};
