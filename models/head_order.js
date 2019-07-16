const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Head_Order extends Sequelize.Model {}

Head_Order.init({
		
}, { sequelize, modelName: 'head_order' });

module.exports = Head_Order;