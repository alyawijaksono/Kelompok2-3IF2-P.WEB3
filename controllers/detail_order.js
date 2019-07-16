const Detail_Order = require('../models/detail_order');

/* create new detail_order */
module.exports.postDetail_Order = (req, res) => {
	Detail_Order({
		
		qty: req.body.qty,
		total: req.body.total
		
	}).then((detail_order) => {
		res.json(detail_order);
	}).catch((error) => {
		throw error;
	})
}

/* view detail_order */
module.exports.getDetail_Order = (req, res) => {
		Detail_Order
		.findOne({
			where : {
				id : req.params.id
			}
		})
		.then((detail_order) => {
			res.json(detail_order);
		})
		.catch((error) => {
			throw error;
		})
}