const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', async (req, res, next) => {
  const users = await userController.getUsers()
  res.json(users);
});

router.get('/:email', async (req, res, next) => {
  console.log(req.params.email)
  const user = await userController.getUserByEmail(req.params.email)
  res.json(user);
});

module.exports = router;