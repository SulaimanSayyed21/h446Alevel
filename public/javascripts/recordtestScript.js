// recordtestScript.js

// Global variables needed --------------------------
let topics = {}; // reference to json object passed
let lessonName; // To hold lesson name
let correctAnswer = []; // hold original answers
let selectedLabels = []; // user selected labels
let answer = {}; // to hold user's answer
// Keep track of answered questions
const answeredQuestions = new Set(); 
let timerInterval; // Reference to timer
let studentName; // need so correct user db updated
let  points = []; // store 1 or 0
let totalScore = 0; // test score
let startTestButtonClicked = false;
//-----------------------------------------------------

// To initialise from the test file
const recordtestScript = {
    initialise: function (username) {
        studentName = username;
    }
}

//------------------------------------------------------------
// handle click event of the "Start Test" button
function handleStartTestButtonClick(topic, title) {
    // check to see if it has not been pressed before !
   
      if (!startTestButtonClicked) {
            startTestButtonClicked = true;
        // Firest enable all the button in accordion 
        enableAnswerButton();
        enableSubmitButton();
        disableDropdownList();
        topics = topic;
        lessonName = title;
        
        // If a guest is taking the test disable the submit button.
        if( studentName === 'guest') {
            const submitTestButton = document.getElementById('submit-test-btn');
            if (!submitTestButton.disabled) {
                submitTestButton.disabled = true;
            }
        }
        console.log('Starting test...');
        const testMessage = new bootstrap.Modal(document.getElementById('instructions'));
        testMessage.show();
        startTimer(5); // Start the timer
    }
    console.log('Test in progress!');
}

// Function to handle the click event of the "Answer" button
function checkAnswer(questionId) {
   // A small click is needed
    playClickSound(); 
    // get user selected labels
    getSelectedLabels();
    // Only deals question if it hasn't been clicked before.
    if(!answeredQuestions.has(questionId)) {
        //first add it to set
        answeredQuestions.add(questionId);
    // helper function passing user selected with the question id
    const isCorrect = checkWithSelectedLabels(selectedLabels, questionId);
    // Push 1 being correct else 0 and increment the score or leave
    isCorrect ? (points.push(1), totalScore++) : (points.push(0), totalScore);
    } else {
    /* do not do anything it has already been handled,
     In digital test it is not allwed
     as it needs to improve attentin to detail.*/
    }
}

// Function to compare answers
function checkWithSelectedLabels(selectedLabels, questionId) {
    // Get the original question ID using the mapping object saved in another script
    const originalQuestionId = questionIdMapping[questionId];
    console.log(questionId + ' was mapped to original qId: ' + originalQuestionId);
    // Get the array of correct answers for the original qid from the questions map
    const correctAnswers = questionsMap[originalQuestionId];
    // Check if any correct answer matches selected labels
    const isCorrect = correctAnswers.some(item =>
         compareArrays(item.answer, selectedLabels)
    );
    return isCorrect;
}

// helper function
function construcTestData() {
    const timeStamp = new Date();
    const answers = [{ lessonName, timeStamp, totalScore, points }];
    return answers;
}

//------------------------------------------------------------
function handleSubmitTestButtonClick() {
    // Stop the timer by clearing the interval
    clearInterval(timerInterval);

    // Implement your logic for submitting the test
    console.log('Submitting the test...');

    // Disable the submit button to prevent multiple clicks
    const submitTestButton = document.getElementById('submit-test-btn');
    submitTestButton.disabled = true;
    // Gather result values to submit
    const results = construcTestData();
    submitTestToServer(results); // Wait for the result before proceeding   
    console.log('Test submitted successfully by ' + studentName);
    startTestButtonClicked = false;
    enableDropdownList();
    window.location.href="/logout"; //  reload the page after submission
}

// Submit result with POST method
async function submitTestToServer(answers) {
    //  send the POST request
    const url = '/test';
    //  options to set , needs application/json
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ studentName, answers }) // Convert the number to a JSON string
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Test submitted successfully:', data);
       
    } catch (error) {
        console.error('Error submitting test:', error);
        throw error; // Propagate the error for better error handling
    }
}


// Function to start the timer with a specified duration
function startTimer(durationInMinutes) {
    let totalSeconds = durationInMinutes * 60;

    // Update the display every second
    timerInterval = setInterval(function() {
        // Calculate minutes and seconds
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        // Format the time
        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Get all elements with the timer class
        const timerElements = document.querySelectorAll('.clock');

        // Update the content of each timer element
        timerElements.forEach(function(timerElement) {
            timerElement.innerText = formattedTime;
        });

        // Stop the timer if time runs out
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            console.log('Time iss up!');
            handleSubmitTestButtonClick()
        }
        // Decrement totalSeconds
        totalSeconds--;
    }, 1000); // Update every second
}

function enableAnswerButton() {
    const answerButtons = document.querySelectorAll('[id^="answer-q"]');
    // Loop through each button and enable them all
    answerButtons.forEach(button => {
        button.disabled = false;
    });
}

function enableSubmitButton() {
    const submitButton = document.getElementById('submit-test-btn');
    submitButton.disabled = false;
}

//
function disableDropdownList() {
    document.getElementById("topicsDropdown").disabled = true;
}

function enableDropdownList() {
    document.getElementById("topicsDropdown").disabled = false;
}

// Function to get the selected labels
function getSelectedLabels() {
    selectedLabels = [];
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedBoxes.forEach((checkbox) => {
        selectedLabels.push(checkbox.labels[0].textContent);
    });
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

// Function to play a success sound
function playClickSound() {
    const click = new Audio("./sounds/click.wav");
    click.play();
}

// Function to handle checkbox change event
function handleCheckboxChange(event) {
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedCheckboxes.length > 2) {
        event.target.checked = false;
    }
}

// Register necessary event listeners----------------------

document.querySelectorAll('.accordion-button')
    .forEach((button) => {
    button.addEventListener('click', handleAccordionExpand);
});

document.querySelectorAll('.accordion-item')
    .forEach((item) => {
    item.addEventListener('hidden.bs.collapse', handleAccordionCollapse);
});

document.querySelectorAll('input[type="checkbox"]')
    .forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxChange);
});

// Get the handle to submit button
document.getElementById('submit-test-btn')
    .addEventListener('click', () => handleSubmitTestButtonClick());

// End of File









// const testMessage = document.getElementById('instructions')
//     .addEventListener('shown.bs.modal', () => {
// });