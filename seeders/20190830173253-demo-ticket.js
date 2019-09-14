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
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() +1);
    let array = [];
    let i;
      for(i=6; i<107; i++) {
        let ticketInfo = {
          summary: `test ticket${i}`,
          status: 'New',
          urgencyID: 1,
          enteredBy: 'Shawn',
          contactID: 1,
          dateEntered: new Date(),
          dueDate: tomorrow,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        array.push(ticketInfo);
      }

    
    return queryInterface.bulkInsert('Tickets', array, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Tickets', null, {});
  }
};
