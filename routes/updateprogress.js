var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
  var sessionHash = req.query.session;
  var email = req.query.email;
  var amountOfLevels = 18
  var oneLevelPercent = 100/amountOfLevels;

  console.log(sessionHash);
  console.log(email);
  console.log(app.locals.sessions);

  let updatedProgress = app.locals.sessions[sessionHash].map(participant => {
    if (participant.email === email) {
      participant.progress += oneLevelPercent;
    }
    return participant
  });
  console.log(updatedProgress)

  app.locals.sessions[sessionHash] = updatedProgress;

  // app.locals.sessions[sessionHash][email].progress += oneLevelPercent;
  res.json(true);
  // res.json(Object.assign({}, progress));
});

module.exports = router;
