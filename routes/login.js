// login route

var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');

/* GET login page. */
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

/* Delegate the responsibility to the login controller*/

router.post('/login', loginController.handleLoginRequest);
module.exports = router;