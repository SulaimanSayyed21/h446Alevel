
// topics js

// It avoides list being appended to previously added itets
function refreshDropdown() {
  const topicsList = document.getElementById('topicsList');
  topicsList.innerHTML = ''; // Clear the contents of the dropdown list
}

// Function to create buttons dynamically
function createButtons(topic, title) {
  // Set the right context in the meassage bar
  const placeHoder = document.getElementById('topicid');
  const description = topic.description;
  placeHoder.textContent = description;

// Getting handle to parents container where children to be appended  
  const buttonContainer = document.querySelector('.d-flex');
  // Clear previous buttons
  buttonContainer.innerHTML = '';
  topic.lessons.forEach((lessons) => {
    // Create a button element
    const button = document.createElement('button');
    
    //setting  button attributes
    button.type = 'button';
    button.classList.add('btn', 'btn-outline-secondary');

    // Getting which lesson to be added on button
    button.textContent = "Lesson " + lessons.lesson_number;

    // Attach event lister to the button
    button.addEventListener('click', (event) => {

      console.log("Topic: " + topic.title + " Lesson number: " + lessons.lesson_number);
      // delegate the responsibility to pratice.js 
      // This function passes the JSON object with lessoan name and title being clicked
      populateQuestions(topic, title, lessons.lesson_number);

      //console.log("Button clicked. Topic ID:", topicId, "Lesson Number:", lessonNumber);
    });
    // Append button to the container
    buttonContainer.appendChild(button);
  });
}

// Fetch the JSON file
function fetchTopics() {
  fetch('./data/topics.json')
    .then(response => response.json())
    .then(data => {
      const topicsList = document.getElementById('topicsList');
      topicsList.innerHTML = ''; // Clear the contents of the dropdown list

      data.topics.forEach(topic => {
        
        //Getting referenced to the elements
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.classList.add('dropdown-item');
        link.href = '#';
        link.textContent = topic.title;
        
        // Add event listener to the the list items
        link.addEventListener('click', () => {     

          // invoking a helper button to do the job
          createButtons(topic, link.textContent);
          console.log("Link " + link.textContent + " is pressed");
          
        });
        // Appendign children
        listItem.appendChild(link);
        topicsList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

// Call fetchTopics() to fetch and populate the dropdown initially
fetchTopics();
