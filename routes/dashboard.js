// dashboard.js
var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/dashboard', function (req, res, next) {
    console.log('Entered in dashboard Router');
   // Access user information from session
  const username = req.session.username;
  
  // Pass user information to dashboard template
  res.render('dashboard', { title: 'Dashboard', username: username });
});
module.exports = router;