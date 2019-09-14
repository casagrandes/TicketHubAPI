const Ticket = require('../models/ticket');
const db = require('../models/index');

// get all tickets
exports.getTickets = async () => {
  try {
    const tickets = await db.Ticket.findAll({
      include: [{model: db.Contact, as: 'contact'}, {model: db.Urgency}],

    });
    return tickets
  } catch(err) {
    throw err;
  }
}

// get ticket by id
exports.getTicketById = async (args) => {
  try {
    const ticket = await db.Ticket.findByPk(args, {
      include: [{ model: db.Contact, as: 'contact'}, {model: db.Urgency}],
    });
    return ticket
  } catch(err) {
    throw err;
  }
}