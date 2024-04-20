// recordtestScript.js

let topics = {};
let lessonName;
let lessonNumber;
let correctAnswer = [];
let selectedLabels = [];
let userScore = {};
const timeStamp = {};
const questionRecords = [];
// Keep track of answered questions
const answeredQuestions = new Set();

/* Function to see if options selected by the user with 
* question id are correct or not */

function checkWithSelectedLabels(selectedLabels, questionId) {
    // Initialize an array to store the results of each question
    const results = [];
    // Get the original question ID using the mapping object saved in another script
    const originalQuestionId = questionIdMapping[questionId];
    console.log('currrent ' + questionId + ' was mapped to -->' + originalQuestionId);

    // Get the array of correct answers for the original question ID from the questions map
    // It returns an arrays with two objects containing duplicate keys
    const correctAnswers = questionsMap[originalQuestionId];

    // Check if any correct answer matches selected labels
    const isCorrect = correctAnswers.some(item => {
        if (compareArrays(item.answer, selectedLabels)) {
            console.log('it is correct answer ! ');
        } {
            console.log('it is not a correct answer !');
        }
        //item.includes(selectedLabels);
    });


    // Calculate the time taken to anser 
    //const endTime = new Date();
    //const timeTaken = (endTime - startTime) /1000
    //Assign points

    return isCorrect;
}
// // Get the array of correct answers for the original question ID from the questions map
// const correctAnswers = questionsMap[originalQuestionId];

// console.log(correctAnswers); // does not print ? because it is an object contianing two arrays
// console.log (selectedLabels);
// console.log('correct Answer includes the selected labels :' + correctAnswers.includes(selectedLabels));

// correctAnswers.forEach(items => {
//     console.log(items.answer); 
// });
//  //isCorrect = correctAnswers.every(correctAnswer => selectedLabels.includes(correctAnswer));
//  isCorrect = correctAnswers.some(correctAnswer => correctAnswer.words.some(word => selectedLabels.includes(word)));
// console.log(isCorrect);
// // Push the result (true/false) to the results array
// results.push(isCorrect);
// });



// Function to handle the click event of the "Answer" button
function checkAnswer(questionId) {
    // 1. get selected labels and save them in selectedLabels[]
    getSelectedLabels();

    // call helper function passing user selected values with the question id
    if (isCorrect = checkWithSelectedLabels(selectedLabels, questionId)) {
        //console.log('Yes, it is correct');
        handleCorrectAnswer(questionId);
    } else {
        handleIncorrectAnswer();
    }
}

// Function to get the selected labels
function getSelectedLabels() {
    selectedLabels = [];
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedBoxes.forEach((checkbox) => {
        selectedLabels.push(checkbox.labels[0].textContent);
    });
}

// Function to handle a correct answer
// Function to handle a correct answer
function handleCorrectAnswer(questionId) {
    console.log('Handling correct answer for question', questionId);
    // Check if the question has already been answered
    if (answeredQuestions.has(questionId)) {
        console.log(`Question ${questionId} has already been answered.`);
        return;
    }
    // Increment the user's score for this question
    userScore[questionId]++;
    // Record the attempt
    questionRecords[questionId] = {
        isCorrect: true, // Assuming it's correct
        username: '', // Replace with actual username
        points: '', // Replace with actual points
    };
}


// Function to handle an incorrect answer
function handleIncorrectAnswer(answerButton) {
    console.log('handling with incorrect answer');

    // send the message to close the accordion
    // playFailureSound();
    // resetLabelsAndAnswers();
}

// Function to reset labels and answers
function resetLabelsAndAnswers() {
    selectedLabels = [];
    correctAnswer = [];
}

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

// Get all answer buttons
// document.querySelectorAll('.answer-btn').forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log('answer button is pressed-----------!');
//         // Find the parent accordion item
//         const accordionItem = button.closest('.accordion-item');

//         // Check if the accordion item is already collapsed
//         if (accordionItem.classList.contains('show')) {
//             // Collapse the accordion item
//             // const collapse = new bootstrap.Collapse(accordionItem);
//             // collapse.hide();
//             // Close other accordion items
//             const expandedItemId = accordionItem.querySelector('.accordion-collapse').getAttribute('id');
//             closeOtherAccordionItems(expandedItemId);
//         }
//     });
// });

//Use event delegation to attach the event listener to a parent element
// document.addEventListener('click', function(event) {
//     // Check if the clicked element is an answer button
//     if (event.target.classList.contains('answer-btn')) {
//         console.log('answer button is pressed!');
//         // Find the parent accordion item
//         const accordionItem = event.target.closest('.accordion-item');

//         // Check if the accordion item is already collapsed
//         if (!accordionItem.classList.contains('collapsed')) {
//             // Collapse the accordion item
//             const collapse = new bootstrap.Collapse(accordionItem);
//             collapse.hide();
//         }
//     }
// });

// Add event listener to the parent container of answer buttons (replace 'parentContainer' with the actual parent container)
// const parentContainer = document.querySelector('.parent-container');
// parentContainer.addEventListener('click', (event) => {
//     const button = event.target.closest('.answer-btn');
//     if (button) {
//         console.log('Answer button is pressed!');
//         // Find the parent accordion item
//         const accordionItem = button.closest('.accordion-item');

//         // Check if the accordion item is already expanded
//         if (accordionItem.classList.contains('show')) {
//             // Close other accordion items
//             const expandedItemId = accordionItem.querySelector('.accordion-collapse').getAttribute('id');
//             closeOtherAccordionItems(expandedItemId);
//         }
//     }
// });


startTestButton = document.getElementById('start-test-btn');

//const startTestButton = document.getElementById('start-test-btn'); // Select the button by its id
const submitTestButton = document.getElementById('submit-test-btn');
// Add event listeners to buttons
submitTestButton.addEventListener('click', handleSubmitTestButtonClick);


const timerElement = document.getElementById('timer');
//let timeRemaining = 300; // 5 minutes in seconds


// Function to update the timer
function updateTimer() {
    let timeRemaining = 300; // 5 minutes in seconds
    const timerElement = document.getElementById('timer');
    const timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timerElement.textContent = timeRemaining;
            timeRemaining--;
        } else {
            clearInterval(timerInterval);
            submitTest();
        }
    }, 1000);
    //clear all questions.
}


// Function to handle the click event of the "Start Test" button
function handleStartTestButtonClick(topic, title) {
    // Implement your logic for starting the test
    const startTime = new Date();

    topics = topic;
    lessonName = title;

    console.log('Starting the test...');
    console.log("Function call 1:");


    updateTimer(); // Start the timer
    const tempStartTestButton = document.getElementById('start-test-btn');
    tempStartTestButton.disabled = true; // Disable the button to prevent multiple clicks
    console.log(`test button gets disabled`);
    const submitTestButton = document.getElementById('submit-test-btn');
    if (submitTestButton.disabled) {
        submitTestButton.disabled = false;
    }


    //startTest(); // Invoke the startTest function
    //updateTimer(); // Start the timer
}

function handleGenerateQuestionClick() {

}

// Function to handle the click event of the "Submit Test" button
function handleSubmitTestButtonClick() {
    // Stop the timer
    
    submitTest(); // Submit the test data to the server
}

// Function to submit the test data to the server
function submitTest() {

    console.log('Submitting test data...');

    // Implement your logic to collect the user's answers and submit them to the server
    // For example:
    // 1. Collect the user's answers from the checkboxes
    // 2. Prepare the test data to send to the server (e.g., an array of objects containing question IDs and selected answers)
    // 3. Send an HTTP POST request to the server endpoint (e.g., '/test') with the test data

}


