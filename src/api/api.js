'use strict';

const router = require('../lib/router.js');

router.get('/api/v1/cats', (req,res) => {
  let id = req.query.id;
  if (id) {
    res.statusCode = 200;
    res.statusMessage = `ID: ${id} was requested`;
  }
  else {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
  }
  res.end();
});

/**
 * POST Route (/data)
 * Accepts a JSON object and simply regurgitates it back to the browser
 * test with httpie:
 *     echo '{"title":"Go Home","content":"foobar"}' | http post http://localhost:8080/data
 */
router.post('/data', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write( JSON.stringify(req.body) );
  res.end();
});

module.exports = {};