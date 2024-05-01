const express = require('express');
const router = express.Router();
const User = require('../modal/user');

// Profile page route
router.get('/profile', async (req, res) => {
    const username = req.session.username;
    //const source = req.query.source;
  if (!username) {
      console.log('User does not exist');
      res.redirect(302, 'login');
  } else {
      //console.log('Guest logged in');
      res.render('profile', { title: 'Profile page', username: username, showLogout: true });
  } 
});
module.exports = router;    
    
    
    
    
    
    
    
    
//     try {
//         // Retrieve user information from the database based on session
//         //const user = await User.findOne({ username: req.session.username });

//         if (user) {
//             // Render the profile page with user information
//             res.render('profile', { user: user });
//         } else {
//             // Handle case where user is not found
//             res.status(404).send('User not found');
//         }
//     } catch (error) {
//         console.error('Error fetching user profile:', error);
//         res.status(500).send('Internal server error');
//     }
// });

