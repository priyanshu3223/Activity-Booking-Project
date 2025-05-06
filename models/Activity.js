const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Activity = sequelize.define('Activity', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  location: DataTypes.STRING,
  date: DataTypes.DATE,
});

module.exports = Activity;
