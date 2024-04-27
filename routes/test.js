var express = require('express');
var router = express.Router();
var testController = require('../controllers/testController');

/* GET Test page. */
router.get('/test', function (req, res, next) {
  console.log('In test get route')
  // Check to see if user is logged in 
  const username = req.session.username;
  if (!username) {
    console.log('username:' + username + 'does not exit ')
    res.redirect(302, 'login');
  } else {
    res.render('test', { Title: 'Test page', username: username, showLogout : true});
  }
});


/* Delegate the responsibility to the login controller*/

router.post('/test', testController.handleTestRequest);
module.exports = router;




