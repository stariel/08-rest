'use strict';

let superagent = require('superagent');
let app = require('../src/app.js');

describe('api', () => {

  beforeAll( () => {
    app.start(3000);
  });

  afterAll( () => {
    app.stop();
  });

  it('handles an invalid get request with a 404', () => {
    return superagent.get('http://localhost:3000/api/vi/cats/blah')
      .then(response => expect(response.status).toBe(404));
    // .catch(response => );

  });

  it('should return 200 for base route', () => {
    return superagent.get('http://localhost:3000/api/v1/cats')
      .then(response => {
        expect(response.status).toBe(200);
      });
  });

  it('should return ID for GET /?id=123', () => {
    const expected = 'ID: 123 was requested';
    return superagent.get('http://localhost:3000/api/v1/cats?id=123')
      .then(response => {
        expect(response.text).toBe(expected);
      });
  });

  xit('should return bad request when no ID is included', () => {
    return superagent.get('http://localhost:3000/api/v1/cats')
      .catch(err => {
        expect(err.status).toBe(400);
        expect(err.response.text).toBe('Bad Request');
      });
  });

  xit('if given bad id, should return not found', () => {
    return superagent.get('http://localhost:3000/api/v1/cats?id=0')
      .catch(err => {
        expect(err.status).toBe(404);
        expect(err.response.text).toBe('Not Found');
      });
  });

  xit('handles a good post request', () => {
    let obj = {id:'Bob'};
    return superagent.post('http://localhost:3000/api/v1/cats')
      .send(obj)
      .then(response => {
        expect(response.text).toEqual(expect.stringContaining('{"id":"Bob"}'));
      })
      .catch(console.err);
  });

  xit('handles a post request with no body', () => {
    return superagent.post('http://localhost:3000/api/v1/cats')
      .catch(err => {
        console.log(err.status);
        expect(err.status).toBe(400);
        expect(err.response.text).toEqual('Bad Request');
      });
  });

  xit('handles a good put request', () => {

    let obj = {id:'2'};
    return superagent.put('http://localhost:3000/api/v1/cats?id=2')
      .send(obj)
      .then(response => {
        expect(response.text).toEqual(expect.stringContaining('{"id":"2"}'));
      })
      .catch(console.err);
  });

  xit('handles no id for put', () => {

    let obj = {name:'Jerry'};
    return superagent.put('http://localhost:3000/api/v1/cats')
      .send(obj)
      .catch(err => {
        expect(err.response.text).toEqual(expect.stringContaining('Not Found'));
      });

  });

  xit('should handle good delete request', () => {
    return superagent.delete('http://localhost:3000/api/v1/cats?id=12')
      .then(response => {
        expect(response.text).toEqual(`ID: 12 has been deleted`);
      });
  });
  
  xit('should handle a bad delete request', () => {
    return superagent.delete('http://localhost:3000/api/v1/cats?blah')
      .catch(err => {
        expect(err.response.text).toEqual(`Not Found`);
      });

  });

});