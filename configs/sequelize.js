const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost:3306/if2_kelompok2_bookstore');

module.exports = sequelize;