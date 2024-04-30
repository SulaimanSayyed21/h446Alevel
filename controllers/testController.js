var express = require('express');
var collection = require('../modal/user');
var router = express.Router();

const handleTestRequest = async (req, res) => {
  try {
    const username = req.session.username;
    console.log(`from session username is ${username}`);
    const { studentName } = req.body; 
    console.log(`From test page: username is ${studentName}`);
    if (studentName === username) {
      console.log('Same person is taking a test:', username);
      const answers = req.body.answers; 
      // Extract 'results' array from 'answers'
      const results = answers.map(answer => ({
        lessonName: answer.lessonName,
        timeStamp: answer.timeStamp,
        totalScore: answer.totalScore,
        points: answer.points
      }));
      const updatedUser = await collection.findOneAndUpdate(
        { name: username }, // Find user by 'username'
        { $push: { results: { $each: results } } }, // Add new 'results' array
        { new: true } // Return updated document
      );
      res.status(200).json({ message: 'Test result saved successfully' });
    } else {
      res.status(403).json({ error: 'Unauthorized: Student name does not match the session username' });
    }
  } catch (error) {
    console.error('Error saving test result:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
module.exports = {
  handleTestRequest
};
