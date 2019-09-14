'use strict';
module.exports = (sequelize, DataTypes) => {
  const Urgency = sequelize.define('Urgency', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  Urgency.associate = function(models) {
    // associations can be defined here
    Urgency.hasMany(models.Ticket, {foreignKey: 'urgencyID', sourecKey: 'id'});
  };
  return Urgency;
};