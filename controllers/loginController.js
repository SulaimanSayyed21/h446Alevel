// Login Controller
var bcrypt = require('bcrypt');
var collection = require('../modal/user');

const handleLoginRequest = async (req, res) => {
  console.log("Entered In login controller");
  try {
    const checkUser = await collection.findOne({ name: req.body.username });
    if (!checkUser) {
      return res.redirect('/login?error=user_not_found');
    }
    const checkEmail = await collection.findOne({ email: req.body.useremail });
    if (!checkEmail) {
      return res.redirect('/login?error=email_not_found');
    }

    try {
      const isPasswordMatch = await bcrypt.compare(req.body.password, checkUser.password);
      if (isPasswordMatch) {
        //store username in session
        const username =  req.body.username;
        req.session.username = username;
        console.log(`${username} has logged in :` );
       // res.send('Logged in successfully');
        return res.render('dashboard', { title: 'Dashboard' , username: username });
      } else {
        return res.redirect('/login?error=wrong_password');
      }
    } catch (error) {
      console.error("Error comparing passwords:", error);
      return res.send('Error during login. Please try again.');
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.send('Error during login. Please try again.');
  }
};
module.exports = {
  handleLoginRequest
};


