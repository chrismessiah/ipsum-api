'use strict';

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

module.exports = function(app) {
  require('./add-env');

  app.set('secret', process.env.APP_SECRET);
  app.set('port', process.env.PORT || 3000);

  app.use(compression());

  //app.use(bodyParser.json({ type: 'application/json'}));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.text());

  app.use(require('./add-sql-function'));

  // ************* CONTROLLERS *************
  let controller = require('./add-controllers');
  // ************* CONTROLLERS *************

  // ************* ROUTES *************
  let router = express.Router();
  // ************* ROUTES *************

  app.use('/', router); // Register our base-route
  require('../router').getRouter(router, controller);

};
