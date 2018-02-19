"use strict";

// http://chaijs.com/api/bdd/#method_property

process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var app = require('../server.js');
// var assert = chai.assert;    // Using Assert style
// var expect = chai.expect;    // Using Expect style


// var should = chai.should();
// describe('Root1', () => {
//
//   it('GET /', (done) => {
//     chai.request(app)
//       .get('/')
//       .end((err, res) => {
//         res.should.have.status(404);
//         done(); // do not pass err here, will be errors
//       });
//   });
//
//   it('GET /api/', (done) => {
//     chai.request(app)
//       .get('/api')
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.have.property('message').eql('Hello World!');
//         done();
//       });
//   });
//
// });



var expect = require('chai').expect;
describe('Root2', () => {


    it('GET /', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          //expect(res).to.have.status(200);
          done(); // do not pass err here, will be errors
        });
    });

    // Really fuckin important, dont forget the (done) parameter
    // otherwise the code inside .end will not be evaluated before the test
    
    // it('GET /ipsums/', (done) => {
    //     chai.request(app)
    //     .get(`/ipsums/`)
    //     .end(function(err, res) {
            // expect(err).to.be.null;
            // expect(res).to.be.json;
            // expect(res).to.have.status(200);
            // expect(res.body).to.have.property('message', 'Hello fucking World!!!!');
    //         done(err);
    //     });
    // });

});
