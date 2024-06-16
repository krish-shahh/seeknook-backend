const express = require('express');
const router = express.Router();
const businessController = require('../controllers/businessController');

router.get('/', businessController.getBusinesses);
router.post('/', businessController.createBusiness);
router.put('/:id/like', businessController.updateBusinessLikes);
router.put('/:uuid', businessController.updateBusiness);
router.delete('/:uuid', businessController.deleteBusiness); // If you have a delete route

module.exports = router;
