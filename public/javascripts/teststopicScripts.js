function loadQuestions(topicId) {
    // Make an AJAX request to fetch questions for the selected topic
    fetch(`/topic/${topicId}`)
        .then(response => response.json())
        .then(data => {
            // Render the questions using the questions.ejs template
            const html = ejs.render(questionsTemplate, { questions: data.questions });
            // Update the DOM with the rendered questions
            document.getElementById('accordion-page').innerHTML = html;
        })
        .catch(error => console.error('Error fetching questions:', error));
}
