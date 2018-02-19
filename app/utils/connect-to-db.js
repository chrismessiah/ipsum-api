'use strict';

let Promise = require('bluebird');

let pg = require("pg");
let dbConfig = require('pg-connection-string').parse(process.env.DATABASE_URL || "postgres://root@localhost:5432/ipsumapi");
dbConfig.max = 3; dbConfig.idleTimeoutMillis = 3000;
let pgPool = new pg.Pool(dbConfig);

module.exports = function(req, sql, params, opts) {
  if (!params) {params = [];}
  if (opts && opts.showQuery) {console.log(sql);}

  return new Promise((resolve, reject) => {
    pgPool.connect((err, client, done) => {
      if (err) reject(err);
      client.query(sql, params, (err, result) => {
        done(); if (err) reject(err);
        resolve(result);
      });
    });
  });
};
