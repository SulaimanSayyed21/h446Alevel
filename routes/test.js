var express = require('express');
var router = express.Router();
var testController = require('../controllers/testController');
var questionService = require('../middleware/questionService');
var topicData = require('../public/data/topics.json');


/* GET Test page. */
router.get('/test', function (req, res, next) {
  console.log('Entered in test Router')
  res.render('test', { Title: 'Test page' });
});

module.exports = router;
// let questions = [];
// 
// router.get('/test', function (req, res, next) {
//   ;

//   // Reading data from json file
//   topicData.topics.forEach(topic => {
//     console.log(topic.title);
//   });
//   res.render('test', { topicData: topicData });
// });

// router.get('/topic/:id', function (req, res) {
//   console.log("Id received is " + req.params.id);
//   const topicId = req.params.id;

//   // Get the lesson name for this id
//   topicData.topics.forEach(topic => {
//     if (topic.id === topicId) {
//       console.log(topic.title + " is clicked ");
//       const lessons = topic.lessons

//       questions = questionService.generateQuestions(lessons);
//     }
//   });
//     // Pass the question to the EJS template
//       res.render('test', { questions: questions });
// });

// /* POST request to be handled */
// /* Delegate the responsibility to the login controller*/

// router.post('/test', testController.handleTestRequest);

