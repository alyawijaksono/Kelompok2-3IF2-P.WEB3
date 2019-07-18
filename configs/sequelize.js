const Sequelize = require('sequelize');
const sequelize = new Sequelize('if2_kelompok2_bookstore', 'root', 'password', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = sequelize;