var express = require('express');
var router = express.Router();

/* GET practice page. */
router.get('/practice', function (req, res, next) {
    console.log('Entered in practice Router');
    // check to see if the user is already logged in 
       const loggedIn = req.session.username ? true : false;
    res.render('practice', {title: 'Practice', loggedIn: loggedIn , showLogout : false});
});
module.exports = router;
