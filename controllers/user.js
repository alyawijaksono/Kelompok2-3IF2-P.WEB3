const User = require('../models/user')

module.exports.getHelp = (req, res) => {
	res.render('user')
}

module.exports.postUser = (req, res) => {
	var values = [
		{
			name: "Yuli Rahayu",
			username: "yulirahayu25",
			password: "12345",
			roles: "admin"
		},
		{
			name: "Alya Ainun",
			username: "aleee",
			password: "12345",
			roles: "user"
		},
		{
			name: "Faradilla",
			username: "dilla",
			password: "12345",
			roles: "user"
		}
	]
	
	User
		.bulkCreate(values)
		.then((user) => {
			console.log('Uh she up')
		})
		.catch((error) => {
			console.log(error);
		})
}	