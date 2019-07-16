const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class User extends Sequelize.Model {}

User.init({
		name: Sequelize.STRING,
		address: Sequelize.TEXT,
		postal_code: Sequelize.INTEGER,
		phone_no: Sequelize.INTEGER,
		username: Sequelize.STRING,
		password: Sequelize.STRING,
		roles: Sequelize.STRING
}, { sequelize, modelName: 'user' });

module.exports = User;