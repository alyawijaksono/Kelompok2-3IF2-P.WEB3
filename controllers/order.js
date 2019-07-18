const HeadOrder = require('../models/head_order');
const DetailOrder = require('../models/detail_order');

module.exports.postOrder = (req, res) => {
	var values = {
		userId: 2
	}
	
	var detail = [
		{
			qty: 2,
			bookId: 1
		},
		{
			qty: 1,
			bookId: 2
		}
	]
	
	HeadOrder
		.create(values)
		.then((ord) => {
			for(i=0; i<detail.length; i++){
				detail[i].headOrderId = ord.id
			}
			
			DetailOrder
				.bulkCreate(detail)
				.then((detail) => {
					res.json(detail)
				})
				.catch((error) => {
					console.log(error)
				})
		})
		.catch((error) => {
			console.log(error)
		})
}

module.exports.getDetailOrder = (req, res) => {
	HeadOrder
		.findOne({
			include: [{model: DetailOrder}],
			where: {id: 9}
		})
		.then((order) => {
			res.json(order)
		})
		.catch((error) => {
			console.log(error)
		})
}