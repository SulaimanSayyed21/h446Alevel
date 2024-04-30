// login route
var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');

/* GET login page. */
router.get('/login', function (req, res, next) {
  // check to see if the user is already logged in 
  const loggedIn = req.session.username ? true : false;

  res.render('login', { title: 'Login', loggedIn: loggedIn });
});

/* Delegate the responsibility to the login controller*/
router.post('/login', loginController.handleLoginRequest);
module.exports = router;