const User = require('../models/user')

module.exports.getHelp = (req, res) => {
	res.render('user')
}

module.exports.postUser = (req, res) => {
	var values = [
		{
			name: "Yuli Rahayu",
			username: "ulie",
			password: "haikevin",
			roles: "admin"
		},
		{
			name: "Alya Sono",
			username: "aleee",
			password: "istrinyaragil",
			roles: "user"
		},
		{
			name: "Faradul",
			username: "dilla",
			password: "tidakbikinkembung",
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