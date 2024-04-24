// topics.js

// Function to clear the dropdown list
function clearDropdownList() {
  const topicsList = document.getElementById('topicsList');
  topicsList.innerHTML = '';
}

// Function to create a button with specified text, click handler, and ID
function createButton(text, onClick, id) {
  const button = document.createElement('a');
  button.href = '#';
  button.classList.add('btn', 'btn-outline-secondary', 'flex-fill', 'lessons');
  button.textContent = text;
  button.addEventListener('click', onClick);
  if (id) {
    button.id = id;
  }
  return button;
}

// Function to handle for lessons' button click events
function handleButtonClick(topic, title, lessonNumber) {
  console.log("Topic: " + topic.title + " Lesson number: " + lessonNumber);
  populateQuestions(topic, title, lessonNumber);
}

// Functin to create four lessons on practice page
function createLessonButtonsForFourLessons(topic, title) {
  const buttonGroup = document.createElement('div');
  buttonGroup.classList.add('btn-group', 'd-flex');

  const lessons = topic.lessons;

  lessons.forEach((lesson) => {
    const buttonText = "Lesson " + lesson.lesson_number;
    const onClick = () => handleButtonClick(topic, title, lesson.lesson_number);
    const buttonId = `lesson-${lesson.lesson_number}-btn`;
    const button = createButton(buttonText, onClick, buttonId);
    buttonGroup.appendChild(button);
    const buttonContainer = document.querySelector('.d-flex');
    buttonContainer.appendChild(buttonGroup);
  });
}

// Function to create startTest button on test page using anchor tag
function createStartTestButton(topic, title) {
  const buttonGroup = document.createElement('div');
  buttonGroup.classList.add('btn-group', 'd-flex');

  const startTestButton = document.createElement('a');
  startTestButton.href = '#';
  startTestButton.textContent = 'Start Test';
  startTestButton.id = 'start-test-btn'; // Add an id to the anchor
  startTestButton.classList.add('btn', 'btn-outline-secondary', 'flex-fill' , 'lessons');
  startTestButton.addEventListener('click', () => handleStartTestButtonClick(topic, title));

  buttonGroup.appendChild(startTestButton);

  const buttonContainer = document.querySelector('.d-flex');
  buttonContainer.appendChild(buttonGroup);
}

// Function to create generate questions button using anchor tag
function createGenerateQuestionButton(topic, title) {
  const buttonGroup = document.createElement('div');
  buttonGroup.classList.add('btn-group', 'd-flex');

  const generateQuestionsButton = document.createElement('a');
  generateQuestionsButton.href = '#';
  generateQuestionsButton.textContent = 'Generate Questions';
  generateQuestionsButton.id = 'generate-questions-btn'; // Add an id to the anchor
  generateQuestionsButton.classList.add('btn', 'btn-outline-secondary', 'flex-fill');
  // It is handled in testScript
  generateQuestionsButton.addEventListener('click', () => handleGenerateQuestions(topic, title));

  buttonGroup.appendChild(generateQuestionsButton);

  const buttonContainer = document.querySelector('.d-flex');
  buttonContainer.appendChild(buttonGroup);
}



// Function to create lesson buttons dynamically
function createLessonButtons(topic, title) {
  const buttonContainer = document.querySelector('.d-flex');
  buttonContainer.innerHTML = ''; // Clear previous buttons
  // Set the topic description
  const descriptionElement = document.getElementById('topicid');
  descriptionElement.textContent = topic.description;
  const hasFourLessons = topic.lessons && topic.lessons.length === 4;
  const isTestPage = document.getElementById('testPage');
  if (hasFourLessons) {
    if (!isTestPage) {
      createLessonButtonsForFourLessons(topic, title);
    } else {
      createGenerateQuestionButton(topic, title);
      createStartTestButton(topic, title);
    }
  } else {
    const noLessonButton = createButton("Lesson Not Implemented", () => { });
    buttonContainer.appendChild(noLessonButton);
  }
}


// Function to create list items for each topic
function createTopicListItem(topic, title) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.classList.add('dropdown-item');
  link.href = '#';
  link.textContent = topic.title;
  link.addEventListener('click', () => createLessonButtons(topic, title));
  listItem.appendChild(link);
  return listItem;
}

// Function to fetch topics data from JSON file
function fetchTopicsData() {
  return fetch('./data/topics.json')
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching JSON:', error);
      return { topics: [] };
    });
}

// Function to populate the dropdown list with topics
async function populateDropdown() {
  clearDropdownList();
  try {
    const data = await fetchTopicsData();
    const topicsList = document.getElementById('topicsList');
    data.topics.forEach(topic => {
      const listItem = createTopicListItem(topic, topic.title);
      topicsList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error populating dropdown:', error);
  }
}

populateDropdown();
