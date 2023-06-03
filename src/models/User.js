const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
const User = sequelize.define('user', {
    firstname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.INTEGER(100),
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});

module.exports = User;