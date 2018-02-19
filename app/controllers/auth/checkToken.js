'use strict';

// just used as a landing spot. The actual logic is handled in middleware/is-authenticated

module.exports = function(req, res) {
  res.json( { message: 'Verify successful'} );
};
