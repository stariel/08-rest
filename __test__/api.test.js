'use strict';

let api = require('../src/api/api.js');

let superagent = require('superagent');

describe('api', () => {

  xit('should return ID for GET /?id=123', () => {
    const expected = 'ID: 123 was requested';
    superagent
      .get('http://localhost:3000/api/v1/cats?id=123')
      .then(data => console.log(data))
      .catch(err => console.error(err));

    expect(result).toBe(expected);
  });
});