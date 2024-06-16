const express = require('express');
const router = express.Router();
const listingsController = require('../controllers/listingsController');

router.get('/listings', listingsController.getListings);
router.delete('/listings/:id', listingsController.deleteListing);
router.put('/listings/:uuid/favorite', listingsController.toggleFavorite);

module.exports = router;
