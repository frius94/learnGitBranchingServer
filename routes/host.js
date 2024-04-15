var express = require('express');
var crypto = require('node:crypto');

var router = express.Router();

// global.sessions = [];

router.get('/', function(req, res, next) {
  console.log(req.query.email);
  var sessionHash = crypto.randomBytes(20).toString('hex');
  console.log(typeof sessionHash)
  app.locals.sessions[sessionHash] = [];
  app.locals.sessions[sessionHash].push({email: req.query.email, progress: 0, isHost: true});
  // sessions[sessionHash] = [];
  // sessions[sessionHash].push({email: req.query.email, progress: 0});
  // console.log(sessions[sessionHash]);
  // res.send(JSON.stringify(Object.assign({}, req.app.locals.sessions)));
  // res.json(Object.assign({}, req.app.locals.sessions[sessionHash]));
  res.json(sessionHash)
});

// router.get('/', function(req, res, next) {
//   var sessionHash = crypto.randomBytes(20).toString('hex');
//   res.json(sessionHash);
// });

module.exports = router;
