var express = require('express');

var router = express.Router();

// global.sessions = [];

router.get('/', function(req, res, next) {
  let sessionHash = req.query.session;
  app.locals.sessions[sessionHash].push({email: req.query.email , progress: 0, isHost: false});
  // sessions[sessionHash] = [];
  // sessions[sessionHash].push({email: req.query.email, progress: 0});
  // console.log(sessions[sessionHash]);
  // res.send(JSON.stringify(Object.assign({}, req.app.locals.sessions)));
  // res.json(Object.assign({}, req.app.locals.sessions[sessionHash]));
  res.json(true)
});

// router.get('/', function(req, res, next) {
//   var sessionHash = crypto.randomBytes(20).toString('hex');
//   res.json(sessionHash);
// });

module.exports = router;
