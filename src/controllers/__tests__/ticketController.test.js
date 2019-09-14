const ticketController = require('../ticketController');
const db = require('../../models');

test('getTickets_NoCondition_ExpectArrayofTickets', async () => {
  const data = await ticketController.getTickets();
  expect(data[0]).toHaveProperty('id');
  expect(data[0]).toHaveProperty('summary');
  expect(data[0]).toHaveProperty('status');
  expect(data[0]).toHaveProperty('urgencyID');
  expect(data[0]).toHaveProperty('enteredBy');
  expect(data[0]).toHaveProperty('dateEntered');
  expect(data[0]).toHaveProperty('dueDate');
  expect(data[0]).toHaveProperty('contact');
  expect(data[0]).toHaveProperty('Urgency');
  expect(data[0].contact).toHaveProperty('email');
  expect(data[0].Urgency).toHaveProperty('name');

});

test('getTicketById_idOf1_ExpectSingleObjectOfTicketId1', async () => {
  const data = await ticketController.getTicketById(1);
  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('summary');
  expect(data).toHaveProperty('status');
  expect(data).toHaveProperty('urgencyID');
  expect(data).toHaveProperty('enteredBy');
  expect(data).toHaveProperty('dateEntered');
  expect(data).toHaveProperty('dueDate');
  expect(data).toHaveProperty('contact');
  expect(data).toHaveProperty('Urgency');
  expect(data.contact).toHaveProperty('email');
  expect(data.Urgency).toHaveProperty('name');
  db.sequelize.close();
});