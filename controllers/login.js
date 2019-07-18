const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/user');
dotenv.config();

module.exports.postLogin = (req, res) => {
	User
		.findOne({
			where: {
				username: req.body.username
			}
		})
		.then((user) => {
			if(!user) {
			res.status(400).send('Username not found');
		}
		
		bcrypt.compare(req.body.password, user.get('password'), (error, isMatch) => {
			if(error){
				res.status(400).send('Password Error');
			}
			if(isMatch){
				jwt.sign({roles: user.get('admin')}, process.env.SECRETKEY, (error, token) => {
                    res.json({token: token})
                    res.redirect('/admin')
				});
            } else if (isMatch) {
				jwt.sign({roles: user.get('user')}, process.env.SECRETKEY, (error, token) => {
                    res.json({token: token})
                    res.redirect('/dashboard')
                });
            } else {
				res.status(400).send('Wrong Password');
			}
		})
	})
}