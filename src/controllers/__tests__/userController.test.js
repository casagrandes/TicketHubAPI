const userController = require('../userController');
const db = require('../../models');

test('getUsers_NoCondition_ExpectArrayofUsers', async () => {
  const data = await userController.getUsers();
  expect(data[0]).toHaveProperty('id');
  expect(data[0]).toHaveProperty('name');
  expect(data[0]).toHaveProperty('email');
  expect(data[0]).toHaveProperty('password');
  expect(data[0]).toHaveProperty('policy');
});

test('getUserByEmail_NoCondition_ExpectObjectOfASingleUser', async () => {
  const data = await userController.getUserByEmail('testuser@demo.com');
  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('name');
  expect(data).toHaveProperty('email');
  expect(data).toHaveProperty('password');
  expect(data).toHaveProperty('policy');
  db.sequelize.close();
});