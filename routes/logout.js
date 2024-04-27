// login route
var express = require('express');
var router = express.Router();
//var loginController = require('../controllers/loginController');

/* GET logout page. */
router.get('/logout', function (req, res, next) {
    //Destroy the session 
    req.session.destroy((err) => {
        if(err) {
            console.error('Error destroying session: ', err);
        }else {
            res.redirect('/login');  
        }
    })
});

module.exports = router;