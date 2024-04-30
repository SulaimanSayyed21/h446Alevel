// Signup controller

var bcrypt = require('bcrypt');
var collection = require('../modal/user');

// Handler function that deals with POST
const handleRegisterRequest = async (req, res) => {
  console.log('Entered in signup controller:');
  try {
    // Validate input fields
    const { username, useremail, password } = req.body;
    if (!username || !useremail || !password) {
      return res.status(400).send("Please provide all required fields.");
    }
    // Check if user or email already exists
    const existingUser = await collection.findOne({ name: username });
    const existingEmail = await collection.findOne({ email: useremail });
    if (existingUser) {
      return res.status(400).send("User already exists. Please choose a different username.");
    }
    if (existingEmail) {
      return res.status(400).send("Email already exists. Please choose a different email.");
    }
    // Hash password and save user data
    const saltRounds = 10; // Number of salt rounds for bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userData = await collection.create({
      name: username,
      email: useremail,
      password: hashedPassword
    });
    console.log("User registered:", userData);
    res.render('login', { title: 'Login' });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send("An error occurred during signup. Please try again later.");
  }
};
module.exports = {
  handleRegisterRequest
};