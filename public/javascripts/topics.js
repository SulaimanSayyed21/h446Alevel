// topics.js

// Function to clear the dropdown list
function clearDropdownList() {
  const topicsList = document.getElementById('topicsList');
  topicsList.innerHTML = '';
}

// Function to create a button element
function createButton(text, onClick) {
  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('btn', 'btn-outline-secondary');
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}

// Function to handle button click events
function handleButtonClick(topic, title, lessonNumber) {
  console.log("Topic: " + topic.title + " Lesson number: " + lessonNumber);
  populateQuestions(topic, title, lessonNumber);
}

// Function to create buttons dynamically for each lesson
function createLessonButtons(topic, title) {
  const buttonContainer = document.querySelector('.d-flex');
  buttonContainer.innerHTML = ''; // Clear previous buttons

  // Check if lessons array exists and has length
  if (topic.lessons && topic.lessons.length > 0) {
    // Change the message on message bar
  // Set the right context in the meassage bar
  var message = document.getElementById('topicid');
  //const description = topic.description;
  message.textContent = topic.description;
    topic.lessons.forEach((lesson) => {
      const buttonText = "Lesson " + lesson.lesson_number;
      const onClick = () => handleButtonClick(topic, title, lesson.lesson_number);
      const button = createButton(buttonText, onClick);
      buttonContainer.appendChild(button);
    });
  } else {
    // If lessons array is undefined or empty, display "Lesson Not Implemented" button
    const noLessonButton = createButton("Lesson Not Implemented", () => {
    });
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

// Call populateDropdown() to fetch and populate the dropdown initially
populateDropdown();
