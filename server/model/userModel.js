const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
        const user = sequelize.define("user", {
                Name: {
                type: DataTypes.STRING,
                allowNull: false,
                },
                Email: {
                type: DataTypes.STRING,
                allowNull: false,
                },
                MetaMaskID: {
                type: DataTypes.STRING,
                allowNull: false,
                },
                });
                return user;
        }