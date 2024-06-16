const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/admin-message', messageController.getAdminMessage);

module.exports = router;
