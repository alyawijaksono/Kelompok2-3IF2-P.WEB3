const express = require('express');

const router = express.Router();

const helpController = require('../controllers/help')

router.get('/', helpController.getHelp)

module.exports = router;