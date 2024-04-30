// signup route
var express = require('express');
var router = express.Router();
var signupController = require('../controllers/signupController');

/* GET Signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup',{ title: 'Signup' });
});

/* Delegate the resposibility to the signup controller*/

router.post('/signup', signupController.handleRegisterRequest);

module.exports = router;