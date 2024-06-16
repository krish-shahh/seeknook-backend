const express = require('express');
const router = express.Router();
const franchiseController = require('../controllers/franchiseController');

router.get('/', franchiseController.getFranchises);
router.post('/', franchiseController.createFranchise);
router.put('/:id', franchiseController.updateFranchise);
router.delete('/:id', franchiseController.deleteFranchise);
router.put('/:id/like', franchiseController.updateFranchiseLikes);
router.post('/initialize-likes', franchiseController.initializeLikes);

module.exports = router;
