'use strict';

module.exports = function(req, res) {
  let filename = 'index.html';
  let htmlFile = `${__dirname}/public/${filename}`;
  res.sendFile(htmlFile);
};
