// Refactored practice.js

// Constants
let  topics = {};
let lessonName;
let lessonNumber;
let correctAnswer = [];
let selectedLabels = [];

// Function to populate questions in the accordion
function populateQuestions(topic, title, clickedLesson) {
    topics = topic;
    lessonName = title;
    lessonNumber = clickedLesson;

    const clickedLessonData = topic.lessons[clickedLesson - 1];
    clickedLessonData.questions.forEach(populateQuestion);
}

// Function to populate a single question in the accordion
const populateQuestion = (question) => {
    const words = question.words;
    const questionNumber = question.id;
    const questionButton = document.getElementById(questionNumber);

    questionButton.textContent = question.id;

    for (let i = 0; i < words.length; i++) {
        const checkboxId = question.id + `-option${i + 1}`;
        const checkbox = document.getElementById(checkboxId);
        checkbox.nextElementSibling.textContent = words[i];
    }
};

// Function to retrieve the correct answers for a question
function retrieveCorrectAnswers(questionId) {
    topics.lessons.forEach((lesson) => {
        if (lesson.lesson_number === lessonNumber) {
            lesson.questions.forEach((question) => {
                if (question.id === questionId) {
                    correctAnswer = question.answer;
                }
            });
        }
    });
}

// Function to handle the click event of the "Answer" button
function checkAnswer(questionId) {
    retrieveCorrectAnswers(questionId);
    getSelectedLabels();

    const isCorrect = compareArrays(correctAnswer, selectedLabels);
    const answerButton = document.getElementById("answer-" + questionId + "-btn");

    if (isCorrect) {
        handleCorrectAnswer(answerButton);
    } else {
        handleIncorrectAnswer(answerButton);
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
function handleCorrectAnswer(answerButton) {
    answerButton.classList.add("btn-success");
    playSuccessSound();
    resetLabelsAndAnswers();
}

// Function to handle an incorrect answer
function handleIncorrectAnswer(answerButton) {
    answerButton.classList.add("btn-danger");
    playFailureSound();
    resetLabelsAndAnswers();
}

// Function to play a success sound
function playSuccessSound() {
    const successSound = new Audio("./sounds/success.wav");
    successSound.play();
}

// Function to play a failure sound
function playFailureSound() {
    const failureSound = new Audio("./sounds/buzz.wav");
    failureSound.play();
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

// // Function to handle the start test button click event
// document.getElementById('start-test-btn').addEventListener('click', handleStartTestButtonClick);

// // Function to handle the submit test button click event
// document.getElementById('submit-test-btn').addEventListener('click', handleSubmitTestButtonClick);

// // Function to handle the start test button click event
// function handleStartTestButtonClick() {
//     this.disabled = true;
//     updateTimer();
// }

// // Function to update the timer
// function updateTimer() {
//     let timeRemaining = 300; // 5 minutes in seconds
//     const timerElement = document.getElementById('timer');
//     const timerInterval = setInterval(() => {
//         if (timeRemaining > 0) {
//             timerElement.textContent = timeRemaining;
//             timeRemaining--;
//         } else {
//             clearInterval(timerInterval);
//             submitTest();
//         }
//     }, 1000);
// }

// // Function to handle the submit test button click event
// function handleSubmitTestButtonClick() {
//     submitTest();
// }

// // Function to submit the test data to the server
// function submitTest() {
//     // Implement your logic to collect the user's answers and submit them to the server
//     console.log('Submitting test data...');
// }
