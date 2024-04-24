// recordtestScript.js

let topics = {};
let lessonName;
let lessonNumber;
let correctAnswer = [];
let selectedLabels = [];
const users = {};
let userScore = {};
const timeStamp = {};
const testData = [];
// Keep track of answered questions
const answeredQuestions = new Set(); // needed so same anwer can not be added twice
let timerInterval; // Reference to timer
let date;  // 
let startTestButtonClicked = false;


function checkWithSelectedLabels(selectedLabels, questionId) {
    // Get the original question ID using the mapping object saved in another script
    const originalQuestionId = questionIdMapping[questionId];
    console.log('Question ' + questionId + ' was mapped to original question ID: ' + originalQuestionId);

    // Get the array of correct answers for the original question ID from the questions map
    const correctAnswers = questionsMap[originalQuestionId];

    // Check if any correct answer matches selected labels
    const isCorrect = correctAnswers.some(item => compareArrays(item.answer, selectedLabels));

    return isCorrect;
}


// Function to handle the click event of the "Answer" button
function checkAnswer(questionId) {
    // 1. get selected labels and save them in selectedLabels[]
    getSelectedLabels();
    // call helper function passing user selected values with the question id
    if (isCorrect = checkWithSelectedLabels(selectedLabels, questionId)) {
        console.log('isCorrect :' + isCorrect);
        console.log('It is correct answer');
        handleCorrectAnswer(questionId);
    } else {
        handleIncorrectAnswer();
    }
}


// Function to handle a correct answer
function handleCorrectAnswer(username, questionId) {
    console.log(`Handling correct answer for question ${questionId} by ${username}`);

    // Initialize user data if not exists
    if (!users[username]) {
        users[username] = {};
    }

    // Check if the question has already been answered
    if (answeredQuestions.has(questionId)) {
        console.log(`Question ${questionId} has already been answered.`);
        return;
    }

    // Check if the question has already been answered
    if (users[username][questionId]) {
        console.log(`Question ${questionId} has already been answered by ${username}.`);
        return;
    }

    // Record the attempt
    users[username][questionId] = {
        isCorrect: true, // Yes
        attempts: 1, // Number of attempts
        // Add more fields as needed
    };

    // Update score
    updateScore(username);
}

// Function to update user's score based on progress
function updateScore(username) {
    // Calculate user's score based on progress data
    let score = 0;
    for (const questionId in users[username]) {
        if (users[username][questionId].isCorrect) {
            score++;
        }
    }

    // Update user's score
    users[username].score = score;
}


// Function to get the selected labels
function getSelectedLabels() {
    selectedLabels = [];
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedBoxes.forEach((checkbox) => {
        selectedLabels.push(checkbox.labels[0].textContent);
    });
}

function handleIncorrectAnswer(questionId) {
    // will be implemented later on 
    console.log('doing nothing!');
    // Make as set to keep recored of which questions were wrong!
}

// Function to handle a correct answer
function handleCorrectAnswer(questionId) {
    console.log('Handling correct answer for question', questionId);
   // Check if the question has already been answered
   if (answeredQuestions.has(questionId)) {
    console.log(`Question ${questionId} has already been answered.`);
    return;
}
    // if (answeredQuestions.has(questionId)) {
    //     console.log(`Question ${questionId} has already been answered.`);
    //     return;
    // }

    // Increment the user's score for this question
    userScore[questionId]++;
    // Record the attempt
    testData[questionId] = {
        isCorrect: true, // Assuming it's correct
        score: userScore,
        username: '', // Replace with actual username
        points: '', // Replace with actual points
    };
}

  //const endTime = new Date();
//const timeTaken = (endTime - startTime) /1000

// Function to reset labels and answers
// function resetLabelsAndAnswers() {
//     selectedLabels = [];
//     correctAnswer = [];
// }

// Function to compare two arrays
function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }
    return true;
}

// Function to handle accordion collapse
function handleAccordionCollapse(event) {
    const accordionItem = event.target.closest('.accordion-item');
    const checkboxes = accordionItem.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
}

// Function to handle accordion expand
function handleAccordionExpand(event) {
    const expandedItemId = event.target.getAttribute('aria-controls');
    closeOtherAccordionItems(expandedItemId);
}

// Function to close other accordion items
function closeOtherAccordionItems(expandedItemId) {
    document.querySelectorAll('.accordion-item').forEach((item) => {
        const itemId = item.querySelector('.accordion-collapse').getAttribute('id');
        if (itemId !== expandedItemId) {
            const collapse = bootstrap.Collapse.getInstance(item.querySelector('.accordion-collapse'));
            if (collapse) {
                collapse.hide();
            }
        }
    });
}

// Function to handle checkbox change event
function handleCheckboxChange(event) {
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedCheckboxes.length > 2) {
        event.target.checked = false;
    }
}


// Event listeners

document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click', handleAccordionExpand);
});

document.querySelectorAll('.accordion-item').forEach((item) => {
    item.addEventListener('hidden.bs.collapse', handleAccordionCollapse);
});

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxChange);
});


// Select the button by its id
startTestButton = document.getElementById('start-test-btn');

// Get the handle to submit button
const submitTestButton = document.getElementById('submit-test-btn');
// Add event listeners to buttons
submitTestButton.addEventListener('click', handleSubmitTestButtonClick);

// Get the reference to timer element
const timerElement = document.getElementById('timer');
//let timeRemaining = 300; // 5 minutes in seconds


// Function to update the timer
function updateTimer() {
    let timeRemaining = 300; // 5 minutes in seconds
    const timerElement = document.getElementById('timer');
    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timerElement.textContent = timeRemaining;
            timeRemaining--;
        } else {
            clearInterval(timerInterval);
            submitTest();
        }
    }, 1000);
}

function handleSubmitTestButtonClick() {
    // Stop the timer by clearing the interval
    clearInterval(timerInterval);

    // Implement your logic for submitting the test
    console.log('Submitting the test...');

    // Disable the submit button to prevent multiple clicks
    const submitTestButton = document.getElementById('submit-test-btn');
    submitTestButton.disabled = true;

    // Submit the test data to the server or perform any other required action
    submitTest(testData);

    // Optionally, display a confirmation message to the user
    console.log('Test submitted successfully.');
}

// Function to enable all buttions in accordion
function enableAnswerButton() {
    const answerButtons = document.querySelectorAll('[id^="answer-q"]');

    // Loop through each button and enable them all
    answerButtons.forEach(button => {
        button.disabled = false;
    });
}

//---------------------------------------------------------------------------------
// Function to handle the click event of the "Start Test" button
function handleStartTestButtonClick(topic, title) {

    // check to see if it has not been pressed before !

    if (!startTestButtonClicked) {
        startTestButtonClicked = true;
        // Firest enable all the button in accordion 

        enableAnswerButton();
        date = new Date();

        topics = topic;
        lessonName = title;

        console.log('Starting the test...');
        console.log("Function call 1:");


        updateTimer(); // Start the timer
        //const tempStartTestButton = document.getElementById('start-test-btn');
        // tempStartTestButton.disabled = true; // Disable the button to prevent multiple clicks
        // console.log(`test button gets disabled`);
        const submitTestButton = document.getElementById('submit-test-btn');
        if (submitTestButton.disabled) {
            submitTestButton.disabled = false;
        }

    }
    //startTest(); // Invoke the startTest function
    //updateTimer(); // Start the timer
    console.log('Test is in progress!');
}

//-----------------------------------------------------------------------
// Function to submit the test data to the server
function submitTest() {
    console.log('Submitting test data to server');
    submitTestToServer(testData);

}

function submitTestToServer(testData) {
    // Define the URL to which you want to send the POST request
    const url = '/test';

    // Define the request options
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Specify the content type as JSON
        },
        body: JSON.stringify(testData) // Convert the test data object to JSON string
    };

    // Make the POST request using fetch
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            console.log('Test submitted successfully:', data);
            // Optionally, perform any action after successful submission
            // Reload the page
            window.location.reload();
        })
        .catch(error => {
            console.error('Error submitting test:', error);
            // Optionally, handle errors
        });
}

// Implement your logic to collect the user's answers and submit them to the server
// For example:
// 1. Collect the user's answers from the checkboxes
// 2. Prepare the test data to send to the server (e.g., an array of objects containing question IDs and selected answers)
// 3. Send an HTTP POST request to the server endpoint (e.g., '/test') with the test data

