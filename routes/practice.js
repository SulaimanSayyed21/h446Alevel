var express = require('express');
var router = express.Router();

/* GET practice page. */
router.get('/practice', function (req, res, next) {
    console.log('Entered in practice Route');
    const username = req.session.username;

    if (username) {
        console.log(`${username} is practicing!`);
        const loggedIn = true;
        res.render('practice', { title: 'Practice', username: username, showLogout: true });
    } else if (req.session.guest) {
        console.log('Guest practicing!');
        res.render('practice', { title: 'Practice', username: 'Guest', showLogout: true });
    } else {
        console.log('User does not exist');
        res.redirect(302, 'login');
    }
});

module.exports = router;





//     // If username exists, do something
//     if (username) {
//         console.log(`${username} has logged in`);
//         const loggedIn = true;
//         res.render('practice', { title: 'Practice', loggedIn: loggedIn, showLogout: true });
//     } else {
//         console.log('Log in fisrt');
//         res.redirect(302, 'login');
//     }
// });

