'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    location: DataTypes.STRING,
    serialNumber: DataTypes.STRING,
    tagNumber: DataTypes.STRING,
    contactID: {
      type: DataTypes.INTEGER,
      refernces: {
        model: 'Contact',
        key: 'id',
      }
    },
    status: DataTypes.BOOLEAN,
  }, {});
  Asset.associate = function(models) {
    // associations can be defined here
    Asset.belongsTo(models.Contact, {foreignKey: 'contactID', as: 'contact'})
  };
  return Asset;
};