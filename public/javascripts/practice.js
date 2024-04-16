// practice.js

//Function to fetch and populate questions from opposites.json file
// Declaring some golbal variables
var topics = {}; // to hold the coming JSON object
var lessonName ;
var lessonNumber;
var correctAnswer = []; // To hold the correct answer from question in conceren
var accordionItemId; // To keep track which accordion being used
var checkedBoxes; // To clear the checkboxes it is needed
var selectedLabels = [];
var correctAnswer = [];

// This function populates the question in htem/ejs template dynamically
function populateQuestions(topic, title, clickedLesson) {
    //console.log(data);
   // globals variables are initialised, they can be used in other functions
    topics = topic;
    lessonName = title;
    lessonNumber = clickedLesson;

    console.log("In populateQuestions");
    console.log(topic + 'passed ' + ' with title: ' + title + " and  Lesson number: " + clickedLesson);
    
     // Since lessons is an arry it starts with `0` indes
     // Retrieve the clicked lesson data
    const clickedLessonData = topic.lessons[clickedLesson-1]; 
    console.log(clickedLessonData);
    // Iterate through each question within the clicked lesson
    clickedLessonData.questions.forEach((question) => {
        const words = question.words; // Get the array of words
        const questionNumber = question.id; // Get the question ID
        const questionButton = document.getElementById(questionNumber);
    
        // Populate the text content of the button with current question ID
        // it is the header of the accordion
        console.log(questionNumber);
        questionButton.textContent = question.id;
    
        // Loop through each word in the words array
        // Also construct correct id value
        for (let i = 0; i < words.length; i++) {
            const checkboxId = question.id + `-option${i + 1}`;
            const checkbox = document.getElementById(checkboxId);
            checkbox.nextElementSibling.textContent = words[i]; // Set the label text
            console.log(words[i] + " populated:");
        }
    });
}


// Decalring and defining the function to get the right answer from the question id being passed

function retrieveCorrectAnswers(questionId) {
    topics.lessons.forEach(topic => {
        // Iterate through each lesson within the topic 
        // Only interested in the lesson being practiced
        if ( topic.lesson_number === lessonNumber) {

             // Iterate through each question within the lesson
            topic.questions.forEach(items => {
             // checking if passed questionId is same against all questin in a lesson
                if (items.id === questionId) {
                        correctAnswer = items.answer;
                }
            });
        }
    });
}


// Function to handle the click event of the "Answer" button
function checkAnswer(questionId) {
    console.log("Answer Button is pressed with id=" + (questionId));
    // Get the parent element of the button (accordion item)
    const accordionItem = document.getElementById(questionId).closest('.accordion-item');

    // Get the ID of the accordion item
    accordionItemId = accordionItem.getAttribute('id');
    console.log(accordionItemId);

    // Get the selected checkboxes for the current question
    var selectedLabels = [];

    // Select all checkboxes for the specified question
    checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // Loop through all selected checkboxes
    checkedBoxes.forEach((checkbox) => {
        const associatedLabels = checkbox.labels;
        if (associatedLabels.length > 0) {
            console.log(associatedLabels[0].textContent + " is checked");
            selectedLabels.push(associatedLabels[0].textContent);
        }
    });

   //console.log(selectedLabels);
    
   // Uer has selected the answers, get the correctec answer of the questin
   retrieveCorrectAnswers(questionId);
      console.log(correctAnswer);
   // Check if the selected options are same as question's answer
    console.log("comparing arrays");

    // calling compareArrays function
    var isCorrect = compareArrays(correctAnswer, selectedLabels);
    // Get the answer button and its parent element
    var answerButton = document.getElementById("answer-" + questionId + "-btn");
    // If the answer is correct
    if (isCorrect) {
        // Add green color to the answer button
        answerButton.classList.add("btn-success");

        // Play success sound
        var successSound = new Audio("./sounds/success.wav");
        successSound.play();
        setTimeout(function () {
            answerButton.classList.remove("btn-success");
        }, 3000);

        // Reset selected array
        selectedLabels = [];
        correctAnswer = [];

    } else {
        // Play failure sound
        var failureSound = new Audio("./sounds/buzz.wav");
        failureSound.play();

        // Add red color to the answer button temporarily
        answerButton.classList.add("btn-danger");

        // Revert the color back to its original color after 2 seconds
        setTimeout(function () {
            answerButton.classList.remove("btn-danger");
        }, 3000);
        // Set the arrays to be empty
        }
}    
// Compare both arrays of answers
// Checkign two arrays
function compareArrays(correctAnswer, selectedLabels) {
    if (correctAnswer.length !== selectedLabels.length) {
        return false;
    }
    const sortedArr1 = correctAnswer.slice().sort();
    const sortedArr2 = selectedLabels.slice().sort();
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            console.log("Wrong optons are slected!")
            return false;
        }
    }
    console.log("Right optons are slected!");
    return true;
}

// Function to handle accordion collapse and clear checkboxes
function handleAccordionCollapse(event) {
    // Get the accordion item that triggered the event
    console.log("accordion collapsed!");
    const accordionItem = event.target.closest('.accordion-item');

    // Clear all checkboxes within the accordion item
    const checkboxes = accordionItem.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    console.log("Check boxes are cleared!")
}

// Function to handle accordion expand
function handleAccordionExpand(event) {
    // Get the ID of the accordion item that was just expanded
    const expandedItemId = event.target.getAttribute('aria-controls');
    console.log(expandedItemId + " accordion is expanded");

    // Close all other accordion items except the one that was just expanded
    document.querySelectorAll('.accordion-item').forEach(item => {
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

    // If more than two checkboxes are checked
    if (checkedCheckboxes.length > 2) {
        // Prevent the checkbox from being checked
        event.target.checked = false;
    }
}

// Add event listener to click evnet to all accordion items to make sure that at one time only one accordion is expanded
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', handleAccordionExpand);
});



// Add event listener for accordion collapse to all accordion items so that in case of collapse checkboxes are cleared
document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('hidden.bs.collapse', handleAccordionCollapse);
});

// Add event listeners to checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', handleCheckboxChange);
});

// Function to handle checkbox change event
function handleCheckboxChange(event) {
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // If more than two checkboxes are checked
    if (checkedCheckboxes.length > 2) {
        // Prevent the checkbox from being checked
        event.target.checked = false;
    }
}

// invokeing this function when page is loaded to populate the accordion from JSON file.
window.onload = function () {
//populateQuestions(topic);
};

       
