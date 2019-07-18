const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class User extends Sequelize.Model {}

User.init({
    name:Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    roles: Sequelize.STRING
}, { sequelize, modelName: 'user'});

module.exports = User;