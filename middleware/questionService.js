var express = require('express');
console.log('Entered in questionService');

let selectedQuestions = [];

// Define a function to generate questions for a given topic ID
function generateQuestions(lessons) {
    //First shuffle the array
    const shuffledLessons = shuffleArray(lessons);

    // Iterate over each lesson (limiting to 4 for now)
    for (let i = 0; i < 4; i++) {
        const lesson = shuffledLessons[i];
        const shuffledQuestions = shuffleArray(lesson.questions);

        // Add the first 10 questions to the selectedQuestions array
        selectedQuestions.push(...shuffledQuestions.slice(0, 10));
    }
    // Generate and return the questions
    // Example logic:
    // Array to store the generated questions
    var questions = []; 
    questions = shuffleArray(selectedQuestions);
    // Logic to generate questions...
    return questions;
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

// Export the function for use in other parts of the application
module.exports = {
    generateQuestions: generateQuestions
};
