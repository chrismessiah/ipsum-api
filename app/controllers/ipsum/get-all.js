'use strict';

// get all ipsums
module.exports = function(req, res) {
  req.sql('SELECT * FROM ipsums ORDER BY id;')
  .then((result) => {
    res.json(result.rows)
  })
  .catch((err) => {
    console.log("ERROR IN " + __filename);
    console.log(err);
  });
};
