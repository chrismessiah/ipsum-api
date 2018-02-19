'use strict';

let isAuthenticated = require('./middleware/is-authenticated');

exports.getRouter = function getRouter(router, controller) {
  router.route('/')
    .get(controller.html.index);
  router.route('/api/titles/ipsums/')
    .get(controller.ipsum.getTitles);
  router.route('/api/ipsums/')
    .get(controller.ipsum.getAny);
  router.route('/api/ipsums/:id')
    .get(controller.ipsum.getSpecific);
  router.route('/api/signup/')
    .get(controller.html.auth)
    .post(controller.auth.signup);
  router.route('/api/token/')
    .post(controller.auth.getNewToken);
  router.route('/api/token/verify')
    .get(isAuthenticated, controller.auth.checkToken)
    .post(isAuthenticated, controller.auth.checkToken);

  return router;
};
