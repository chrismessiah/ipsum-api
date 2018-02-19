'use strict';

var bcrypt = require('bcrypt');

module.exports = function(req, res) {
  if (req.body && req.body.username && req.body.password && req.body.email) {

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    req.sql('SELECT COUNT(1) FROM users WHERE email=$1 OR username=$2', [email,username])
    .then((result) => {
      if (result.rows[0].count > 0) {res.json({error: 'The email or username already exists'})}
      else {
        var hash = bcrypt.hashSync(password, process.env.APP_SECRET);
        req.sql('INSERT INTO users (username, password, email) VALUES ($1, $2, $3);', [username,hash,email])
        .then((result) => {
          res.json({message: 'Account successfully added'});
        });
      }
    })
    .catch((err) => {
      res.json({error: err});
    });


  }
};
