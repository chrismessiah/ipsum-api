'use strict';

// get all ipsum titles
module.exports = function(req, res) {
  req.sql('SELECT id, title FROM ipsums ORDER BY id;')
  .then((result) => {
    res.json(result.rows)
  })
  .catch((err) => {
    console.log("ERROR IN " + __filename);
    console.log(err);
  });
};
