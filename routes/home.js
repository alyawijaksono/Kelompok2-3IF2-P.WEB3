const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home');

router.get('/admin', homeController.getAdmin);
router.get('/dashboard', homeController.getUser);

module.exports = router;