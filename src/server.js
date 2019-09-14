'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const Cors = require('cors');
const logger = require('morgan');
const passport = require('passport');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(Cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Log only 4XX and 5xx to console
app.use(logger('dev', {skip: function (req, res) { return res.statusCode < 400}
}));
// Log all req to access.log
app.use(logger('short', {
  stream: fs.createWriteStream(path.join(__dirname, '../api.log'), { flags: 'a' })
}))

app.use(passport.initialize());

// Auth Route
const authRoute = require('./routes/auth');
app.use('/api/user', authRoute);


// Ticket Routes
app.use('/api/tickets', require('./routes/tickets'));
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/assets', require('./routes/assets'));



app.listen(PORT, console.log(`Server started on port: ${PORT}`));

module.exports = app;