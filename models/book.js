const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Book extends Sequelize.Model {}

Book.init({
		title: Sequelize.STRING,
		desc: Sequelize.TEXT,
		price: Sequelize.FLOAT,
		size: Sequelize.STRING,
		writer: Sequelize.STRING,
		publisher: Sequelize.STRING,
		page: Sequelize.STRING,
		year_of_publish: Sequelize.INTEGER,
		isbn: Sequelize.INTEGER,
		category: Sequelize.STRING
}, { sequelize, modelName: 'book' });

module.exports = Book;