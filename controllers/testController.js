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


    // The above line are working do not delete!
    //-----------------------------------------------
    //console.log(`From test page testData format is ${req.body}`);
    // The above line does not work, it has to be used with JSON.stringifY()
    //Get the data in 
    
    //-----------------------------------------------
    //console.log('Data Recieved after json.stringify' + JSON.stringify(testsTaken));

    // try {
    //   //const timeStamp = new Date();
    //   const updatedUser = await collection.findOneAndUpdate(
    //     { name: username }, // Find user by username
    //     { $push: { testsTaken: { $each: testsTaken } } }, // Add new testsTaken
    //     { new: true } // Return updated document
    //   );
//     answers = req.body.answers; // Assuming 'answers' is received from the request body

//     try {
//       const testsTaken = answers.map((answer, index) => ({
//         timeStamp: answer.timeStamp, // Access 'timeStamp' property, not 'timestamp'
//         totalScore: answer.totalScore, // Assuming 'totalScore' is accessible from 'answers'
//         results: answer.results.map((questionResult) => ({
//           questionId: questionResult.questionId, // Use 'questionId' from 'questionResult'
//           score: questionResult.score, // Use 'score' from 'questionResult'
//         })),
//       }));
    
//       const updatedUser = await collection.findOneAndUpdate(
//         { name: username }, // Find user by 'username'
//         { $push: { testsTaken: { $each: testsTaken } } }, // Add new 'testsTaken' array
//         { new: true } // Return updated document
//       );
//       res.redirect(302,'/login');
//       // Handle updatedUser or perform other actions
//     } catch (error) {
//       // Handle errors appropriately
//       console.error('Error occurred:', error);
//     }
//   } else {
//     console.log('From testController users are different !');
//   }
// }
//  module.exports = {
//     handleTestRequest
//   }

      //const answerDocuments = [];

        
      // const updatedUser = collection.findOneAndUpdate(
      //   { name: username },
      //   {
      //     $push: {
      //       testsTaken: {
      //         $each: answers.map((answer, index) => ({
      //           timeStamp: answer.timestamp ,
      //           score: answer.score,
      //           result: answer.result.map((questionResult) => ({
      //             questionId: `q-${index + 1}`,
      //             score: questionResult.score,
      //           })),
      //         })),
      //       },
      //     },
      //   },
      //   { new: true }
      // );
      
      //res.status(200).json({ message: 'Test data updated successfully', user: updatedUser });
 
    // } catch (error) {
    //   console.error('Error updating test data:', error);
    //   res.status(500).json({ error: 'Internal server error' });
    // }
 