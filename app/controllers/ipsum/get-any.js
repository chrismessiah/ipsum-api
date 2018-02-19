'use strict';

// get one random ipsum
module.exports = function(req, res) {
  req.sql('SELECT * FROM ipsums ORDER BY random() LIMIT 1;')
  .then((result) => {
    res.json(result.rows)
  })
  .catch((err) => {
    console.log("ERROR IN " + __filename);
    console.log(err);
  });
};
