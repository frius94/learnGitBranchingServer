var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
  var sessionHash = req.query.dashboard;
  var progress = app.locals.sessions[sessionHash];
  res.json(progress);
  // res.json(Object.assign({}, progress));
});

module.exports = router;
