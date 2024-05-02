const express = require('express');
const router = express.Router();
const User = require('../modal/user');

// Profile page route
router.get('/profile', async (req, res) => {
    const username = req.session.username;
    //const source = req.query.source;
  if (username) {
    try {
        // Fetch the user's data from MongoDB
        const user = await User.findOne({name:username});
        if (!user) {
            return res.status(404).send('User not found');
        }
        // Extract required data from the results array
        const profileData = user.results.map(result => ({
            timeStamp: result.timeStamp,
            lessonName: result.lessonName,
            totalScore: result.totalScore
        }));
        console.log(profileData);
       res.render('profile', { title: 'Profile', username: username, showLogout: true, profileData: profileData });
    }catch (error) {
        console.error('Error fetching profile data:', error);
        res.status(500).send('Internal Server Error');
    }
  } else {
            console.log('User does not exist');
            res.redirect(302, 'login');
  } 
});
module.exports = router;

