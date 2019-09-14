const db = require('../models/index');

// get all contacts
exports.getContacts = async () => {
  try {
    const contacts = await db.Contact.findAll();
    return contacts
  } catch(err) {
    throw err;
  }
}

// get contact by ID
exports.getContactById = async (args) => {
  try {
    const contact = await db.Contact.findByPk(args);
    return contact
  } catch(err) {
    throw err;
  }
}

// add a contact
exports.addContact = async (args) => {
  try {
    const addContact = await db.Contact.create(args);
    return  { addContact, created: true};
  } catch(err) {
    throw err;
  }
}