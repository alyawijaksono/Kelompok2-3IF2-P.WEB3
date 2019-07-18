const express = require('express');

const router = express.Router();

const orderController = require('../controllers/order')

router.post('/add', orderController.postOrder)

router.get('/detail', orderController.getDetailOrder)

module.exports = router;