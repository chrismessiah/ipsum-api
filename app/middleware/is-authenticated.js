'use strict';

module.exports = function(req, res, next) {
  if (req.body && req.body.token || req.query && req.query.token) {

    let token = (req.body && req.body.token) ? req.body.token : req.query.token;

    req.sql('SELECT COUNT(1) FROM users WHERE token=$1;', [token])
    .then((result) => {
      if (result.rows[0].count == 1) {next();}
      else {res.status(401).json( { error: 'Supplied token does not exist!'} );}
    })
    .catch((err) => {
      res.status(401).json( { error: err} );
    });

  } else {
    res.status(401).json( { error: 'You have not supplied token!'} );
  }

  // console.log(req.query); // get-request: url params
  // console.log(req.params); // ???
  // console.log(req.body);   // post-request: remember to send as x-www-form-urlencoded
};
