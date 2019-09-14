'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      summary: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      contactID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'Contacts',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      urgencyID: {
        type: Sequelize.INTEGER(11),
        defaultValue: 1,
        references: {
          model: 'Urgencies',
          key: 'id'
        }
      },
      enteredBy: {
        type: Sequelize.STRING,
      },
      dateEntered: {
        type: Sequelize.DATE,
      },
      dueDate: {
        type: Sequelize.DATEONLY,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tickets');
  }
};