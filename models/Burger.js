const Sequelize = require('sequelize');
const sequelize = require('.');

const Burger = sequelize.define('burger', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Burger;
