'use strict';

const router = require('../lib/router.js');

router.get('/api/v1/cats', (req,res) => {
  if (req.url.query.id == false) {
    res.statusCode = 404;
    res.statusMessage = 'OK';
    res.write(`Not Found`);
  } else if(req.url.query.id) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(`ID: ${req.url.query.id} was requested`);
  }  else {
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.write('Bad Request');
  }
  res.end();
});

router.post('/data', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write( JSON.stringify(req.body) );
  res.end();
});

router.put('/api/v1/cats', (req,res) => {
  if(req.url.query.id) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(JSON.stringify(req.body) );
  } else {
    res.statusCode = 404;
    res.write(`Not found`);
  }
  res.end();
});

router.delete('/api/v1/cats', (req,res) => {
  if(req.url.query.id) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(`ID: ${req.url.query.id} was deleted`);
  } else {
    res.statusCode = 404;
    res.statusMessage = 'OK';
    res.write(`Not found`);
  }
  res.end();

});

module.exports = {};