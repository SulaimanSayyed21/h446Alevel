// dashboard.js
var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/dashboard', function (req, res, next) {
  console.log('Entered in dashboard Router');
  const username = req.session.username;
  const guest = req.session.guest;
   if(username){
    console.log(`${username} has logged in`);
    res.render('dashboard', { title: 'Dashboard', showLogout: true, username: username });
   }else if(guest) {
    console.log('Guest logged in');
    res.render('dashboard', { title: 'Dashboard', showLogout: true, username: 'guest' });
   }else {
    console.log('User does not exist');
    res.redirect(302, 'login');
   }
  });
module.exports = router;

