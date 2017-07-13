const express = require('express');
const check = require('./check.js');

module.exports = function(app) {
  const route = express.Router();
  app.use('/api', route);
  route.post('/insert_adv', check.insertAdv);
}
