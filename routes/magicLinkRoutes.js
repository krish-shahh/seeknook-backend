const express = require('express');
const magicLinkController = require('../controllers/magicLinkController');

const router = express.Router();

router.post('/send-magic-link', magicLinkController.sendMagicLink);

module.exports = router;
