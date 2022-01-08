const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = require('../server/app');

describe('GET /players', function () {
  it('responds with json', function (done) {
    request(app)
      .get('/players')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        console.log(response.body);
        done();
      })
      .catch((err) => done(err));
  });
});
