'use strict';

// get 5 ipsums random
module.exports = function(req, res) {
  req.sql('SELECT * FROM ipsums ORDER BY random() LIMIT 5;')
  .then((result) => {
    res.json(result.rows)
  })
  .catch((err) => {
    console.log("ERROR IN " + __filename);
    console.log(err);
  });
};
