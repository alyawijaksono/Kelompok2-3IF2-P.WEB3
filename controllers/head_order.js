const Head_Order = require('../models/head_order');

/* create new head_order */
module.exports.postHead_Order = (req, res) => {
	Head_Order({
		date: req.body.date
	}).then((head_order) => {
		res.json(head_order);
	}).catch((error) => {
		throw error;
	})
}

/* view head_order */
module.exports.getHead_Order = (req, res) => {
		Head_Order
		.findOne({
			where : {
				id : req.params.id
			}
		})
		.then((head_order) => {
			res.json(head_order);
		})
		.catch((error) => {
			throw error;
		})
}