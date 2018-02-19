'use strict';

let jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var moment = require('moment');

module.exports = function(req, res) {
  if (req.body && req.body.username && req.body.password) {

    let username = req.body.username;
    let password = req.body.password;
    let token;

    var hash = bcrypt.hashSync(password, process.env.APP_SECRET);
    req.sql('SELECT username,password FROM users WHERE username=$1 AND password=$2;', [username, hash])
    .then((result) => {
      if (result.rows.length != 1) {reject('You need to be logged in!');}
      let passwordTime = password + moment().format();
      token = jwt.sign(passwordTime, process.env.APP_SECRET);
      req.sql('UPDATE users SET token = $1;', [token]);
      res.json( { token: token} );
    })
    .catch((err) => {
      res.status(401).json( { error: err} );
    });

  } else {
    res.status(401).json( { error: 'You have not supplied username and password!'} );
  }
};
