'use strict';

// get ipsum corresponding to the id
module.exports = function(req, res) {
  let id = req.params.id;
  req.sql('SELECT * FROM ipsums WHERE id=$1', [ id ])
  .then((result) => {
    res.json(result.rows)
  })
  .catch((err) => {
    console.log("ERROR IN " + __filename);
    console.log(err);
  });
};
