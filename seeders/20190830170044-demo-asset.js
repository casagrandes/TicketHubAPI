'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   let array = [];
   let i;
    for(i=5; i<106; i++) {
      let assetInfo = {
        name: `PC-${i}`,
        type: 'Desktop',
        location: 'Main Site',
        serialNumber: `ABC${i}`,
        tagNumber: `0${i}`,
        contactID: 1,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      array.push(assetInfo);
    }
   
   return queryInterface.bulkInsert('Assets', array, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Assets', null, {});
  }
};
