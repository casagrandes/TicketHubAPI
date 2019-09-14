const contactController = require('../contactController');
const db = require('../../models');

test('getContacts_NoCondition_ExpectArrayofContacts', async () => {
  const data = await contactController.getContacts();
  expect(data[0]).toHaveProperty('id');
  expect(data[0]).toHaveProperty('firstName');
  expect(data[0]).toHaveProperty('lastName');
  expect(data[0]).toHaveProperty('email');
  expect(data[0]).toHaveProperty('department');
  expect(data[0]).toHaveProperty('phone');
  expect(data[0]).toHaveProperty('active');
});

test('getContactById_Idof1_ExpectSingleContact', async () => {
  const data = await contactController.getContactById(1);
  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('firstName');
  expect(data).toHaveProperty('lastName');
  expect(data).toHaveProperty('email');
  expect(data).toHaveProperty('department');
  expect(data).toHaveProperty('phone');
  expect(data).toHaveProperty('active');
  db.sequelize.close();
});