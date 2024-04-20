// testScript.js

let selectedQuestions = [];
let questionsGenereated = false;
let questionsMap = {};
let questionIdMapping = {};

// Define a function to generate questions for a given topic ID
function generateRandomQuestions(topicData, title) {
    console.log("Generating Test Questions for lesson : " + title);
    try {
        // Get the handle to the array
        var lessons = [];

        if (topicData.title === title) {
            lessons = topicData.lessons;
        }

        // First shuffle the array
        console.log('Shuffling lessons');
        const shuffledLessons = shuffleArray(lessons);
        const selectedQuestions = [];

        // Iterate over each lesson (limiting to 4 for now)
        for (let i = 0; i < 4; i++) {
            const lesson = shuffledLessons[i];
            const shuffledQuestions = shuffleArray(lesson.questions);

            // Add the first 10 questions to the selectedQuestions array
            const selected = shuffledQuestions.slice(0, 10);
            selected.forEach(question => {
                // Check if the answer is not already present in the selected questions
                if (!selectedQuestions.some(q => q.answer === question.answer)) {
                    selectedQuestions.push(question);
                }
            });
        }

        // Ensure there are only 20 unique questions
        const uniqueQuestions = [];
        for (let i = 0; i < selectedQuestions.length; i++) {
            const question = selectedQuestions[i];
            if (!uniqueQuestions.some(q => q.answer === question.answer)) {
                uniqueQuestions.push(question);
            }
            if (uniqueQuestions.length === 20) {
                break; // Break the loop once we have 20 unique questions
            }
        }

        // Generate and return the questions
        const shuffledUniqueQuestions = shuffleArray(uniqueQuestions);
        shuffledUniqueQuestions.forEach(question => {
            const questionId = question.id;
            if (!questionsMap[questionId]) {
                questionsMap[questionId] = [];
            }
            questionsMap[questionId].push(question);
        });
        return shuffledUniqueQuestions;
    } catch (err) {
        console.log("Error generating random questions:", err);
        return []; // Return an empty array if an error occurs
    }
}


// Function to shuffle an array
function shuffleArray(array) {
    console.log(array);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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
}


function handleGenerateQuestions(topic, title) {
    //clearPreviousData() if needed! 
    try {
        const randomQuestions = generateRandomQuestions(topic, title);
        console.log(' Questions have been genreated : ' + randomQuestions);
        console.log(' Questions present in map ' + questionsMap);
        populateQuestions(randomQuestions);
        questionsGenereated = true;
        const buttonTemp = document.getElementById('generate-questions-btn');
        buttonTemp.disabled = true;
    } catch (error) {
        console.log('error in populating questions');
    }
}


handleGenerateQuestions(topic, title);

// End of file