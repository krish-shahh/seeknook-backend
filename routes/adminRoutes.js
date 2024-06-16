const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/businesses', adminController.getBusinesses);
router.get('/franchises', adminController.getFranchises);
router.delete('/businesses/:uuid', adminController.deleteBusiness);
router.delete('/franchises/:uuid', adminController.deleteFranchise);
router.put('/businesses/:uuid', adminController.updateBusinessStatus);
router.put('/franchises/:uuid', adminController.updateFranchiseStatus);

module.exports = router;
