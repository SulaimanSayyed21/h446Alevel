// login route
var express = require('express');
var router = express.Router();

// Clear specific session variables
// delete req.session.username; It is done automatically 
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