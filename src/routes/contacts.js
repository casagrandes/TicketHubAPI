const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');

router.get('/', async (req, res, next) => {
  const contacts = await contactController.getContacts()
  res.json(contacts);
});

router.get('/:id', async (req, res, next) => {
  console.log(req.params.id)
  const contact = await contactController.getContactById(req.params.id)
  res.json(contact);
});

router.post('/', async (req, res) => {
  console.log(req.body)
  const addContact = await contactController.addContact(req.body);
  if(addContact && addContact.created) {
    res.status(200).send('Contact Added');
  } else {
    res.status(400).send('Bad Request');
  }
  
});

module.exports = router;