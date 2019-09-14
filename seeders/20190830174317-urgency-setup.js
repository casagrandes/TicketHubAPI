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
   return queryInterface.bulkInsert('Urgencies', [
  {
    name: 'Low',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Medium',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'High',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Urgent',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Urgencies', null, {});
  }
};
