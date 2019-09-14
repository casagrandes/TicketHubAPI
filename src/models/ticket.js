'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    urgencyID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Urgency',
        key: 'id'
      }
    },
    enteredBy: {
      type: DataTypes.STRING,
    },
    dateEntered: {
      type: DataTypes.DATE
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    contactID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Contact',
        key: 'id'
      }
    }
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
    Ticket.belongsTo(models.Contact, {foreignKey: 'contactID', as: 'contact'});
    Ticket.hasOne(models.Urgency, {foreignKey: 'id', sourceKey: 'urgencyID'})
  };
  return Ticket;
};