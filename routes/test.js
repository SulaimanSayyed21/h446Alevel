var express = require('express');
var router = express.Router();
var testController = require('../controllers/testController');

/* GET Test page. */
router.get('/test', function (req, res, next) {
  console.log('In test get route')
  // Check to see if user is logged in 
  const username = req.session.username;
  const source = req.query.source;
  
  if (!username && source !== 'guest') {
      console.log('User does not exist');
      res.redirect(302, 'login');
  } else if (source === 'guest') {
      console.log('Guest logged in');
      res.render('test', { title: 'Test page', username: source, showLogout: false });
  } else {
      res.render('test', { title: 'Test page', username: username, showLogout: true });
  } 
});

/* Delegate the responsibility to the login controller*/
router.post('/test', testController.handleTestRequest);
module.exports = router;




