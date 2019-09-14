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
   return queryInterface.bulkInsert('Contacts', [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'jdoe@demo.com',
    phone: '406-555-1234',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Shawn',
    lastName: 'Doe',
    email: 'shawn@demo.com',
    phone: '406-555-1235',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    email: 'jdoe@demo.com',
    phone: '406-555-1236',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@demo.com',
    phone: '406-555-1237',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Bob',
    lastName: 'IT',
    email: 'itbob@demo.com',
    phone: '406-555-1212',
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
   return queryInterface.bulkDelete('Contacts', null, {});
  }
};
