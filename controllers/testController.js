var express = require('express');
var router = express.Router();

const handleTestRequest = async (req, res) => {
    console.log('Entered in signup controller:');
    try {
      // Validate input fields
      console.log( "In test Controller" );

    }catch (err){}
};
/* Delegate the responsibility to the login controller*/


module.exports = {
  handleTestRequest
}