const db = require('../models/index');

// get all users
exports.getUsers = async () => {
  try {
    const users = await db.User.findAll();
    return users
  } catch(err) {
    throw err;
  }
}

// get user by ID
exports.getUserByEmail = async (args) => {
  try {
    const user = await db.User.findOne({
      where: {
        email: args
      }});
    return user
  } catch(err) {
    throw err;
  }
}