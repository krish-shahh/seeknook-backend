const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/businesses', adminController.getBusinesses);
router.get('/franchises', adminController.getFranchises);
router.delete('/businesses/:uuid', adminController.deleteBusiness);
router.delete('/franchises/:uuid', adminController.deleteFranchise);
router.put('/businesses/:uuid', adminController.updateBusinessStatus);
router.put('/franchises/:uuid', adminController.updateFranchiseStatus);
router.get('/messages/admin-message', adminController.getAdminMessage);
router.post('/messages/admin-message', adminController.saveAdminMessage);
router.delete('/messages/admin-message', adminController.deleteAdminMessage);

module.exports = router;
