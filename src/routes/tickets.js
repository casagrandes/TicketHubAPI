const express = require('express');
const router = express.Router();

const db = require('../models/index');
const Ticket = require('../models/ticket');
const ticketController = require('../controllers/ticketController');

router.get('/', async (req, res, next) => {
  const tickets = await ticketController.getTickets()
  res.json(tickets);
});

router.get('/:id', async (req, res, next) => {
  console.log(req.params.id)
  const ticket = await ticketController.getTicketById(req.params.id)
  res.json(ticket);
});



module.exports = router;