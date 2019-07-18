const express = require('express');

const loginController = require('../controllers/login');

const router = express.Router();

router.post('/login', loginController.postLogin);

router.get('/login', loginController.getLogin);

module.exports = router;