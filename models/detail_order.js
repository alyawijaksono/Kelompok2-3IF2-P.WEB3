const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Detail_Order extends Sequelize.Model {}

Detail_Order.init({
		qty: Sequelize.INTEGER
}, { sequelize, modelName: 'detail_order' });

module.exports = Detail_Order;