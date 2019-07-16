const Detail_Order = require('../models/detail_order');
const Head_Order = require('../models/head_order');
const Bill = require('../models/bill');

/* create new order */
module.exports.postOrder = (req, res) => {
	Detail_Order({
		
		qty: req.body.qty,
		total: req.body.total
		
	})
	
}