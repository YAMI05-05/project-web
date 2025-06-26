// models/Product.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
 
});

module.exports = Product;
