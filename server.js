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


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
