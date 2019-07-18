const express = require('express');

const router = express.Router();

const head_orderController = require('../controllers/head_order');
const detail_orderController = require('../controllers/detail_order');

const orderController = require('../controllers/order')

router.post('/add', orderController.postOrder)

router.get('/detail', orderController.getDetailOrder)

//module.exports.putOrder = (req, res) => {
// res.render
//}

module.exports = router;