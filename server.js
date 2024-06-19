const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const businessRoutes = require('./routes/businessRoutes');
const franchiseRoutes = require('./routes/franchiseRoutes');
const messageRoutes = require('./routes/messageRoutes');
const listingsRoutes = require('./routes/listingsRoutes');
const serviceRoutes = require('./routes/serviceRoutes'); 
const favoritesRoutes = require('./routes/favoritesRoutes');
const adminRoutes = require('./routes/adminRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const { Client, Environment } = require('square');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/businesses', businessRoutes);
app.use('/api/franchises', franchiseRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api', listingsRoutes);
app.use('/api/favorites', favoritesRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/payment', paymentRoutes); 

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

app.post('/api/payment/create-payment', async (req, res) => {
  const { amount, currency, sourceId } = req.body;

  try {
    const response = await client.paymentsApi.createPayment({
      sourceId,
      idempotencyKey: `${Date.now()}`, // Unique key for each request
      amountMoney: {
        amount, // Amount in cents
        currency,
      },
    });
    res.json({ paymentId: response.result.payment.id });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
