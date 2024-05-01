// login route
var express = require('express');
var router = express.Router();

// Clear specific session variables
// delete req.session.username; It is done automatically 
/* GET logout page. */
router.get('/logout', function (req, res, next) {
    //Destroy the session 
    var  user;
    if (req.session.username) {
        user = req.session.username;
      } else if (req.session.guest) {
        user = 'Guest';
      }else {
        // not possible
      }


    req.session.destroy((err) => {
        if(err) {
            console.error('Error destroying session: ', err);
        }else {
            console.log(`${user} is logging out`);
            res.redirect('/login');  
        }
    })
});
module.exports = router;