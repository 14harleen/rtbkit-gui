const express = require('express');
const check = require('./check.js');

module.exports = function(app) {
  const route = express.Router();
  app.use('/api', route);
  route.post('/insert_adv', check.insertAdv);
  route.post('/login_adv', check.loginAdv);
  route.post('/insert_pub', check.insertPub);
  route.post('/login_pub', check.loginPub);
  route.post('/new_campaign',check.campaign);
}
