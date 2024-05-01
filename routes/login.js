// login route
var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');

/* GET login page. */
router.get('/login', function (req, res, next) {
  const username = req.session.username;

  res.render('login', { title: 'Login', showLogout: true, username: username });
});

/* GET for guest */
router.get('/guest/login', function (req, res, next) {
  req.session.guest = true;

  res.render('dashboard', { title: 'Dashboard', showLogout:true, username: 'guest'  });
});


/* Delegate the responsibility to the login controller*/
router.post('/login', loginController.handleLoginRequest);
module.exports = router;