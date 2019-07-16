const User = require('../models/user');

/* view data of user */
module.exports.getUser = (req, res) => {
		User
		.findOne({
			where : {
				id : req.params.id
			}
		})
		.then((user) => {
			res.json(user);
		})
		.catch((error) => {
			throw error;
		})
}