const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Reservation = sequelize.define('Reservation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tutoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  pagada: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  realizada: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Reservation;

