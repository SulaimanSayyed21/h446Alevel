// testScript.js

//--------global variable needed----
let selectedQuestions = []; // 
let questionsGenerated = false; // flag to disable the button
let questionsMap = {}; // To keep track of the questions
let questionIdMapping = {}; // Needed to track the questions Ids
//-----------------------------------

// Define a function to generate questions for a given topic ID
function generateRandomQuestions(topicData, title) {
    //console.log("Generating Test Questions for lesson : " + title);
    try {
        // Get the handle to the array
        var lessons = [];
        if (topicData.title === title) {
            lessons = topicData.lessons;
        }
        // First shuffle the array 
        // console.log('In generateRandomQuestions : before shuffling');
        console.log(lessons);
        const shuffledLessons = shuffleArray(lessons);
        // console.log('After shuffling ')
        // console.log(shuffledLessons);
        //console.log();
        const selectedQuestions = [];
        // Iterate over each lesson 
        for (let i = 0; i < shuffledLessons.length; i++) {
            console.log('Topic : ' + title + ' Lesson Number : ' + shuffledLessons[i].lesson_number);
            console.log('questins are shuffled');
            const lesson = shuffledLessons[i];
            console.log('Questions: before shuffling');
            console.log(lesson.questions);
            const shuffledQuestions = shuffleArray(lesson.questions);
            console.log('Questions after shuffling');
            console.log(shuffledQuestions);
            // Add first 10 questions to the selectedQuestions array
            const selected = shuffledQuestions.slice(0, 10);
            selected.forEach(question => {
                // Check if the answer is not already present in the selected questions
                if (!selectedQuestions.some(q => q.answer === question.answer)) {
                    selectedQuestions.push(question);
                } else {
                    console.log('duplicate tried to be pushed!!!!!!!!1');
                }
            });
            console.log('Questions are being inserted!');
            console.log(selectedQuestions);
        }

        // Ensure there are only 20 unique questions
        console.log('Questions are checked again to be unique');
        const uniqueQuestions = [];
        for (let i = 0; i < selectedQuestions.length; i++) {
            const question = selectedQuestions[i];
            if (!uniqueQuestions.some(q => q.answer === question.answer)) {
                uniqueQuestions.push(question);
            } else {
                console.log(' Same questin is being pushed !!!');
            }
            if (uniqueQuestions.length === 20) {
                console.log(uniqueQuestions);
                break; // Break the loop once we have 20 unique questions
            }
        }

        // Generate and return the questions
        const shuffledUniqueQuestions = shuffleArray(uniqueQuestions);
        console.log('unique questions have been shuffled again ');
        console.log(uniqueQuestions);
        shuffledUniqueQuestions.forEach(question => {
            const questionId = question.id;
            if (!questionsMap[questionId]) {
                questionsMap[questionId] = [];
            }
            questionsMap[questionId].push(question);
        });
        console.log(shuffledUniqueQuestions);
        console.log(questionsMap);
        return shuffledUniqueQuestions;
    } catch (err) {
        console.log("Error generating random questions:", err);
        return []; // Return an empty array if an error occurs
    }
}

// Function to shuffle an array
function shuffleArray(array) {
    console.log('In shuffle array functions:');
    console.log('before shuffling ');
    console.log(array);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log('After shuffling :');
    console.log(array);
    return array;
}

// Function to populate questions
function populateQuestions(randomQuestions) {
    // Initialize an object to store the mapping between shuffled and original question IDs
    randomQuestions.forEach((question, index) => {
        const words = question.words; // Get the array of words
        const questionNumber = index + 1; // Get the question ID
        const questionId = `q-${questionNumber}`;
        const questionButton = document.getElementById(questionId);
        // Populate the text content of the button with current question ID
        // it is the header of the accordion
        console.log(questionNumber);
        questionButton.textContent = `Question-${questionNumber}`;
        // Store the mapping between shuffled and original question IDs
        questionIdMapping[questionId] = question.id;
        // Loop through each word in the words array
        // Also construct correct id value
        for (let i = 0; i < words.length; i++) {
            const checkboxId = questionId + `-option${i + 1}`;
            const checkbox = document.getElementById(checkboxId);
            checkbox.nextElementSibling.textContent = words[i]; // Set the label text
            console.log(words[i] + " populated:");
        }
    });
    console.log(questionIdMapping);
}

// Functin to generate questions
function handleGenerateQuestions(topic, title) {
    //clearPreviousData() if needed! 
    //console.log('In handleGenerateQuestions :')
    // console.log(topic);
    if (!questionsGenerated) {
        try {
            const randomQuestions = generateRandomQuestions(topic, title);
            console.log(' Questions have been genreated : ');
            console.log(randomQuestions);
            console.log(' Questions present in map ');
            console.log(questionsMap);
            populateQuestions(randomQuestions);
            questionsGenerated = true;
        } catch (error) {
            console.log('error in populating questions');
        }
    }
}

//Functin to disable answer button in accordion.
function disableAnswerButtons() {
    // Select all buttons with ids starting with "answer-q"
    const answerButtons = document.querySelectorAll('[id^="answer-q"]');

    // Loop through each button and disable it
    answerButtons.forEach(button => {
        button.disabled = true;
    });
}

//Function to disable submit button
function disableSubmitButton(){
    const submitButton = document.getElementById('submit-test-btn');
    submitButton.disabled = true;
}

window.onload = function() {
    disableAnswerButtons();
    disableSubmitButton();
}

// End of file