# H446-03 – PROJECT CONTENTS <!-- omit from toc -->

## TABLE OF CONTENTS <!-- omit from toc -->

- [Introduction: 1.0](#introduction-10)
  - [Overview of the 11 Plus Examination  1.1](#overview-of-the-11-plus-examination--11)
    - [Content of the Exam 1.2](#content-of-the-exam-12)
    - [Who Takes It and Where? (Stakeholders) 1.3](#who-takes-it-and-where-stakeholders-13)
    - [Why It's a Big Deal 1.4](#why-its-a-big-deal-14)
    - [The reason to select this competition test exam 1.5](#the-reason-to-select-this-competition-test-exam-15)
- [ANALYSIS 2.0](#analysis-20)
  - [Problem identification 2.1](#problem-identification-21)
  - [Introduction of Proposed Solution and Stakeholder Needs 2.2](#introduction-of-proposed-solution-and-stakeholder-needs-22)
  - [Describing and Justifying Computational Approach 2.3](#describing-and-justifying-computational-approach-23)
  - [Identifying and Justifying Specific Features 2.4](#identifying-and-justifying-specific-features-24)
  - [How to implement the Proposed Solution 2.5](#how-to-implement-the-proposed-solution-25)
  - [Limitations of the proposed Solution 2.6](#limitations-of-the-proposed-solution-26)
  - [Justifying Hardware and Software Choices 2.7](#justifying-hardware-and-software-choices-27)
  - [Identifying and justifying measurable success criteria for the proposed solution 2.8](#identifying-and-justifying-measurable-success-criteria-for-the-proposed-solution-28)
  - [Requirements for such a project 2.9](#requirements-for-such-a-project-29)
    - [Why Node.js? 2.9.1](#why-nodejs-291)
    - [How a simple nodejs server is created? 2.9.2](#how-a-simple-nodejs-server-is-created-292)
    - [MVC ( MOdel-View-Controller) architecture 2.9.3](#mvc--model-view-controller-architecture-293)
    - [Key Principles 2.9.4](#key-principles-294)
- [Project Application Design 3.0](#project-application-design-30)
  - [Design: Part-A 3.1](#design-part-a-31)
  - [Design: Part-B 3.2](#design-part-b-32)
  - [Design: Part-C 3.3](#design-part-c-33)
- [Working on the design Part-A  4.0](#working-on-the-design-part-a--40)
  - [Starting project application setup 4.1](#starting-project-application-setup-41)
    - [Setting up express nodejs framework 4.1.1](#setting-up-express-nodejs-framework-411)
    - [Generating the application skeleton 4.1.2](#generating-the-application-skeleton-412)
    - [Initialising git and linking it to the GitHub repo 4.1.3](#initialising-git-and-linking-it-to-the-github-repo-413)
  - [Analysing the express skeleton structure 4.2](#analysing-the-express-skeleton-structure-42)
    - [Interrogating the functionality of the www Script 4.2.1](#interrogating-the-functionality-of-the-www-script-421)
    - [Examining app.js code 4.2.2](#examining-appjs-code-422)
    - [What lies under views folder ? 4.2.3](#what-lies-under-views-folder--423)
    - [Examining route folder 4.2.4](#examining-route-folder-424)
  - [Implementing Design Part-A Step-1: Creating Home Page 4.3](#implementing-design-part-a-step-1-creating-home-page-43)
    - [Analysing the above code and creating new folders 4.3.1](#analysing-the-above-code-and-creating-new-folders-431)
    - [Creating homepage header 4.3.2](#creating-homepage-header-432)
    - [Applying styles to home page using styles.css 4.3.3](#applying-styles-to-home-page-using-stylescss-433)
    - [Applying bootstrap icons in header 4.3.4](#applying-bootstrap-icons-in-header-434)
    - [Adding Login and Signup pages 4.3.5](#adding-login-and-signup-pages-435)
    - [Testing UI 4.3.6](#testing-ui-436)
    - [Evaluating UI 4.3.7](#evaluating-ui-437)
    - [Testing Page loading performance 4.3.8](#testing-page-loading-performance-438)
  - [Implementing Design Part-A  Step-2: Setting up Database locally and online 4.4](#implementing-design-part-a--step-2-setting-up-database-locally-and-online-44)
    - [Establishing database connection from the application 4.4.1](#establishing-database-connection-from-the-application-441)
    - [Adding a user schema for the database 4.4.2](#adding-a-user-schema-for-the-database-442)
    - [Handling incoming POST request when submit button is pressed 4.4.3](#handling-incoming-post-request-when-submit-button-is-pressed-443)
    - [Registering user from the signup page 4.4.4](#registering-user-from-the-signup-page-444)
      - [Testing registration process: 1 -\> Locall Database  4.4.4.1](#testing-registration-process-1---locall-database--4441)
    - [Logging the user 4.4.5](#logging-the-user-445)
      - [Testing Login procedure 4.4.5.1](#testing-login-procedure-4451)
    - [Registering the user on online database 4.4.6](#registering-the-user-on-online-database-446)
  - [Implementing Design Part-B:  4.5](#implementing-design-part-b--45)
    - [Designing and implementing the practice page 4.5.1](#designing-and-implementing-the-practice-page-451)
      - [Populating questions from the topic.json file 4.5.1.1](#populating-questions-from-the-topicjson-file-4511)
    - [Desigining and implementing the test page 4.5.2](#desigining-and-implementing-the-test-page-452)
      - [Shuffling lessons 4.5.2.1](#shuffling-lessons-4521)
      - [Shuffling Questions present in each lesson 4.5.2.2](#shuffling-questions-present-in-each-lesson-4522)
      - [Selecting 20 unique question from the pool 4.5.2.3](#selecting-20-unique-question-from-the-pool-4523)
      - [Populating questions 4.5.2.4](#populating-questions-4524)
  - [](#)
- [Implementing Designing Part-C: Making the Web App a PWA](#implementing-designing-part-c-making-the-web-app-a-pwa)
  - [Writing the logic to attach the application with the service worker](#writing-the-logic-to-attach-the-application-with-the-service-worker)
  - [Creating a service worker : Service worker vs client/server architecture](#creating-a-service-worker--service-worker-vs-clientserver-architecture)
  - [Creating and attaching manifest file](#creating-and-attaching-manifest-file)
  - [Watching Chrome behaviour after registering the service worker](#watching-chrome-behaviour-after-registering-the-service-worker)
    - [Passing Google service requirements for PWA](#passing-google-service-requirements-for-pwa)
- [What is Progressive Web Application?](#what-is-progressive-web-application)
  - [How to clone this repository on local machine](#how-to-clone-this-repository-on-local-machine)
  - [References](#references)
    - [Compiled list of 11+ Websites](#compiled-list-of-11-websites)
  - [Appendix-A](#appendix-a)
    - [Vscode extension used](#vscode-extension-used)
  - [Appendix-B](#appendix-b)
  - [Appendix-C](#appendix-c)
- [Appendix-D](#appendix-d)

<div class="page"/>

## Introduction: 1.0

### Overview of the 11 Plus Examination  1.1

The 11 plus, or Eleven Plus, exam is a big deal for children in England and Northern Ireland when they're about 11 years old. It's like a ticket to selective secondary schools, such as grammar schools and some private ones.

#### Content of the Exam 1.2

Depending on where you take it, the test covers `English, Math, verbal reasoning, and non-verbal reasoning`. It's all about seeing how well one can solve problems and show better cognition abilities.

#### Who Takes It and Where? (Stakeholders) 1.3

The number of children taking the 11-plus exams changes a lot depending on where you are in the UK. Some places still use it to decide who gets into certain schools, but others have different systems.

#### Why It's a Big Deal 1.4

People talk a lot about the 11-plus because it's seen as a big deal for children's futures. A better School means a better education one gets and more chances available to learn and compete with the elite class in the future where thousands of pounds fee is required.

#### The reason to select this competition test exam 1.5

I have undertaken this examination, as has one of my sisters. Within our community, it enjoys considerable popularity, with numerous students competing for placements in esteemed grammar schools. Presently, freely accessible practice materials are scarce online. While various websites, such as [Bond 11 Plus](https://www.bond11plus.co.uk) offer packages for online practice via their digital platforms, they typically require purchase. However, some platforms, like [11 Plus Guide](https://www.11plusguide.com) permit the download of sample papers for manual practice. Additionally, I have [compiled a list](#compiled-list-of-11-websites) of other relevant online resources, along with several books and papers available in my personal collection. Notably, one of the frequently consulted books is published by NelSon-Thrones of Oxford University Press[^1](#references).

The diverse content covered in the aforementioned examination offers significant opportunities for an A-level project student to develop either a digital website or a mobile application platform. These platforms would enable 11+ students to engage in online practice sessions for the examinations at no cost. Given the extensive range of subjects covered, including English language, Mathematics, and reasoning, the project's scope is vast and cannot be fully addressed within its confines. As such, I have elected to focus solely on Verbal Reasoning for the purpose of this project

<div class="page"/>

## ANALYSIS 2.0

### Problem identification 2.1

The prevailing challenge in this area lies in the scarcity of accessible and comprehensive resources for students preparing for the 11+ Exams. While traditional textbooks exist, they often lack interactivity and cost-effectiveness in digital formats. Furthermore, existing platforms typically require students to purchase packages, limiting access based on financial constraints. 

> Note: There  exist  no platform where those who can contribute time and resources  to help  11+ students digitally as no such repository online is present.

### Introduction of Proposed Solution and Stakeholder Needs 2.2

To address this issue, a proposed solution focuses on creating a digital platform specifically tailored for 11+ Verbal Reasoning practices. While other areas may be equally important, this project intentionally focuses solely on Verbal Reasoning to remain within the scope of an A-Level project. Here are the key features and benefits of this solution:

1. The platform will focus on Verbal Reasoning exercises for 11+ Exams. Students can improve critical thinking and language skills.
2. Unlike traditional textbooks, the digital solution lets students actively participate. They solve problems, get instant feedback, and track their progress. It’s a better learning experience!

3. Unlike static textbooks, the digital solution will provide an engaging experience. Students can actively participate and receive instant feedback, and track their progress including timed challenges, detailed explanations, and helpful hints, which will enhance the learning experience."

4. The commitment to accessibility means that all content will be available to students at no cost. By eliminating the need for expensive subscriptions or purchases, a wider audience can benefit from the platform.

5. Recognizing the prevalence of handheld devices, the platform will be designed for seamless use on mobile phones and tablets. Students can practice Verbal Reasoning questions anytime, anywhere, without desktop constraints. Additionally, the solution will be optimized for both online and offline modes, ensuring uninterrupted learning even in areas with limited internet connectivity.

6. Beyond content consumption, the platform will foster collaboration. Educators, programmers, and subject matter experts can contribute additional materials, share insights, and enhance the repository. For instance, psychology professionals could design exercises to improve memory and cognition, while educators with expertise in focus enhancement strategies could contribute valuable insights.

7. In addition to practice exercises, the platform will offer analytical solutions. Students can explore detailed explanations, learn problem-solving techniques, and gain deeper insights into the reasoning behind correct answers. This analytical approach encourages a holistic understanding of Verbal Reasoning concepts.

In summary, the proposed solution aims to bridge the gap by providing a free, interactive, and comprehensive digital platform exclusively focused on Verbal Reasoning practice for 11+ Exams. Leveraging technology, collaboration, and accessibility, this initiative seeks to empower students on their educational journey. 

> Note: This solution is not going to be a static website built by any Static Site Generators

[//]: # (After engaging in discussions with stakeholders, including students, parents, and educators, and reflecting on my personal experience of taking these exams, it has become evident that there is a significant demand for accessible, engaging, and effective resources for 11+ exam preparation. To support this assertion, I offer an example from my own family, wherein my parents sought to provide us with ample assistance. However, as previously mentioned, both my sister and I encountered challenges in accessing the necessary support, highlighting the existing gap in available resources.)

### Describing and Justifying Computational Approach 2.3

1. Verbal Reasoning questions are inherently structured and can be systematically analysed by computational methods.
2. Computational methods allow for the creation of dynamic and interactive question formats, personalized practice sessions, and adaptive learning experiences tailored to individual student needs.
3. Additionally, computational approaches enable the scalability and accessibility of the solution, making it available to a wide audience regardless of geographical location or socioeconomic status.
4. By leveraging computational methods, we can automate the generation of practice questions, provide instant feedback to students, and track their progress over time, enhancing the effectiveness and efficiency of exam preparation.
5. By integrating computational methods into the solution, we can harness the power of technology to address the challenges of 11+ exam preparation, making it more engaging, accessible, and personalized for students.

### Identifying and Justifying Specific Features 2.4

1. Comprehensive coverage of Verbal Reasoning topics.
2. Designing interactive question formats dynamically using JavaScript in conjunction with HTML and CSS.
3. These question formats can include  `multiple-choice, matching, fill-in-the-blank, underlining, choosing words from groups and pairs`.
4. More complex question formats can be designed for example presenting users with more than two categories and asking them to select a number of words belonging to a specific category.

### How to implement the Proposed Solution 2.5

1. The front end of the app will utilize technologies like HTML, CSS, and Bootstrap to handle the user interface (UI). For server support, Node.js and its extensive libraries will be employed on the back end. Project structure and module installation will be managed using NPM.
2. A templating engine will simplify HTML code creation, while JavaScript will manage computational logic such as verifying selected answers. JavaScript can also read content from JSON files containing practice and mock data.
3. To streamline Node.js development, the `express` module will be utilized, though alternative frameworks like `React Angular` are viable options.
4. When creating test or exercise content, two approaches are feasible: dynamically generating content with JavaScript or designing the user interface with placeholders filled by JavaScript logic.
5. Sound files may enhance user interaction by signaling success or failure.
6. Data will be stored in JSON format, commonly used with JavaScript libraries.
7. The solution will be device-agnostic, prioritizing compatibility with all devices rather than specific mobile app technologies like Swift or Java.
8. Utilizing Progressive Web Apps (PWAs) will offer a mobile app-like experience, accessible through web browsers with features like offline support, push notifications, and home screen installation.
9. The digital solution will be developed in a Git repository, facilitating collaboration and improvement through platforms like GitHub or GitLab.
10. Cloud servers will host the solution to ensure scalability and accessibility from any internet-connected device.
11. MongoDB, a non-SQL database, will store user credentials. MongoDB Atlas services will be utilized to create an online database for this purpose.
12. Responsive design using Bootstrap will guarantee compatibility across various devices, including desktops, laptops, tablets, and smartphones.
13. User-friendly interfaces and optimized performance will be prioritized to deliver a seamless user experience across different hardware and software configurations.

### Limitations of the proposed Solution 2.6

1. While much has been proposed as a potential solution, several challenges lie ahead, particularly in tailoring the website or app for personalized use. This entails the incorporation of distinct logic for each individual user and the secure storage of their credentials within the database.
2. Though There exist many open-source platform, like `GitLab, GitHub( no longer an open source ) and  Bitbucket` that offers features for managing code repositories yet publishing the repository on clounds to make it available online requires funding.
3. Some platform offers a small chuck of their cloud space to be used and here it is hoped that such an applicatio can enter and find a place.

> Note: I plan to commence the project with a focus on simplicity to meet the requirements outlined in H446 OCR A Level Computer Science (NEA: Non-exam assessment). This approach will allow for a gradual progression, ensuring that the project remains manageable and aligned with the specified criteria.

### Justifying Hardware and Software Choices 2.7

**What technologies are needed for a developer**:

The hardware technologies required  to create websites or PWAs do not necessitate specialized hardware, unlike certain machine learning applications that demand specific computational power. Instead, a standard desktop or laptop with operating systems such as Windows 10/11, Ubuntu (Linux distribution), or macOS on Apple machines will suffice. As for software selection, following tools tools will be used mainly.

1. [Vscode](https://code.visualstudio.com/) to write the code.
2. [Microsoft Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?rtc=1&hl=en-gb&gl=GB) to interact with git.
3. [PickPick](https://picpick.app/) to get the snapshot of the website.
4. [Chrome Browser](https://www.google.com/chrome/) to display the result.
5. [Node.js and npm](https://nodejs.org/) to provide server side handling.
6. [Git](https://git-scm.com/) to keep track the record of the repository.
7. [GitHub](https://github.com/) to upload the repository on the clouds and free hosing.
8. [Mongoose Database]([https://](https://www.mongodb.com/)) to store user credentials safely.

### Identifying and justifying measurable success criteria for the proposed solution 2.8

1. The success of the proposed website can be measured through various quantifiable criteria that directly reflect its effectiveness in addressing the identified problem and meeting stakeholder needs.
2. Firstly, the website's user engagement metrics, such as the number of active users, session duration, and frequency of visits, can serve as indicators of its popularity and usefulness among students, parents, and other users.
3. Secondly, the completion rates of practice sessions and quizzes within the website will gauge the extent to which users are actively utilizing its resources for exam preparation.
4. Thirdly, user satisfaction surveys and feedback mechanisms can provide valuable insights into the perceived value, usability, and overall satisfaction with the website's features and functionality.
5. By establishing these measurable success criteria, we can objectively evaluate the impact and effectiveness of the website in supporting 11+ exam preparation and achieving its intended goals.

<div class="page"/>

### Requirements for such a project 2.9

1. Websites typically follow a client-server architecture, where the client refers to the user's web browser (such as Chrome, Firefox, or Safari), and the server refers to a remote computer that hosts the website's files and data. When a user visits a website, their browser sends a request to the server, asking for the website's content. These request uses HTTP verbs such as `GET` method for the page navigation.
2. Similarly when a user submits a form on a webpage (such as a login form, registration form, or search form), the browser sends a request to the server to process the form data. This request can use either the HTTP GET or POST method, depending on the form's configuration and the type of data being submitted.
3. Web pages often contain resources such as images, stylesheets, scripts, and fonts that are loaded asynchronously from the server. Each of these resources triggers a separate request to the server, allowing the browser to fetch and render them independently while the rest of the page loads.
4. Modern web applications frequently interact with remote APIs (Application Programming Interfaces) to retrieve data, perform actions, or integrate with external services. These API requests can be initiated from the client side using various techniques, such as AJAX, the fetch API, or client-side libraries/frameworks.
5. All the above usually refers to a term commonly known as `Client/Server` architecture.  
6. **Client-Side Activities**: Client-side activities refer to tasks and operations that are performed within the user's web browser. This includes rendering HTML, executing JavaScript code, and handling user interactions such as clicks and form submissions. Client-side activities are responsible for creating the user interface and providing interactivity to the user.
7. **Server-Side Activities**: Server-side activities, on the other hand, are performed on the server, typically using server-side technologies like Node.js. These activities include processing user requests, executing business logic, interacting with databases, and generating dynamic content. Server-side activities are responsible for handling the backend operations of the application, such as user authentication, data validation, and database management.
8. **Role of Node.js in Client-Server Communication**:Node.js plays a crucial role in facilitating communication between the client-side and server-side components of web applications. It serves as the backend infrastructure for handling client requests, processing data, and sending responses back to the client. By leveraging the power of Node.js, developers can build fast, scalable, and real-time web applications that deliver a seamless user experience across different devices and platforms.

<div class="page"/>

#### Why Node.js? 2.9.1

1. **JavaScript Everywhere**: With Node.js, developers can use JavaScript for both client-side and server-side development, enabling a consistent and unified codebase.
2. **Event-Driven Architecture**: Node.js utilizes an event-driven, non-blocking I/O model, which allows for efficient handling of concurrent requests and real-time applications.
3. **Vibrant Ecosystem**: Node.js has a large and active community, providing a wealth of libraries and tools to streamline development.
4. **Scalability**: Node.js applications can easily scale to handle large numbers of concurrent connections, making it suitable for building robust and scalable web applications.

#### How a simple nodejs server is created? 2.9.2

The following code creates  a simple nodejs server that is run locally for developing environment.

```js
// Import the 'http' module
const http = require('http');
// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;
// Create a server
const server = http.createServer((req, res) => {
  // Set the response status and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Send the response
  res.end('Hello, World!\n');
});
// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```

The above code does the followings:

1. Require the built-in http module, which provides functionality for creating HTTP servers using `const http = require('http');`. Declaring some variables for the port and hostname and assigned them some values.
2. Uses the `http.createServer()` method to create a server instance. Pass a callback function to handle incoming requests.
3. Within the callback function, handle incoming HTTP requests. This involves reading request data, processing it, and sending back a response.
4. Specify the port number on which the server should listen for incoming requests.

Similarly the same can be done using a nodejs module called `express` since it provides number of functionalities to ease the job it is also known as express framework. Following code shows how the same job is done using express module.

```js
// Import the Express framework
const express = require('express');
// Create an Express application
const app = express();
// Define a route handler for the root path
app.get('/', (req, res) => {
  // Send a response
  res.send('Hello, World!\n');
});
// Define the port number
const port = 3000;
// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

If we see the above code closely there is not much difference except that express module is used and GET request is handled by a route. This is not we intend to achieve from express but we want our code to be modular and properly structured. For this purpose we use an MVC ( modal view controller ) architecture where components of a websites are treated separately.

#### MVC ( MOdel-View-Controller) architecture 2.9.3

1. it is a design pattern commonly used in software development to organize code and separate concerns.
2. **Model**: The model represents the data and business logic of the application. It encapsulates the application's data and defines how it can be manipulated.In a database-driven web application, models often interact with the database to perform CRUD (Create, Read, Update, Delete) operations.View.
3. **View**: The view is responsible for presenting the user interface and displaying data to the user. It renders the model's data in a format suitable for presentation, such as HTML, XML, or JSON. Views are typically passive components that receive data from the controller and display it to the user.
4. **Controller**: The controller acts as an intermediary between the model and the view. It handles user input and updates the model accordingly. Controllers contain the application's business logic, process user requests, and determine which view to render in response.

- Following is a basic flow of an Express application

```mermaid
graph TD;
    Client-->ExpressApp;
    ExpressApp-->View;
    ExpressApp-->RouteRequest;
    RouteRequest-->HandleRequest;
    HandleRequest-->RetrieveData;
    RetrieveData-->RenderHTML;
    RenderHTML-->SendHTTPResponse;
    SendHTTPResponse-->Client;
```

#### Key Principles 2.9.4

1. Separation of Concerns: MVC separates the application logic into distinct components, making it easier to understand, maintain, and extend.
2. Modularity: Each component (model, view, controller) can be developed, tested, and modified independently, promoting code reusability and scalability.
3. Flexibility: MVC allows for flexible interaction between components, enabling developers to change one component without affecting others.
4. Scalability: The modular structure of MVC facilitates the development of large-scale applications by dividing them into manageable parts.

Overall, MVC architecture provides a robust foundation for building complex software systems by promoting separation of concerns, modularity, and flexibility. It remains a popular choice for developing web applications due to its clear structure and well-defined responsibilities for each component. For this reason I have decided to use this pattern and develop this project.

<div class="page"/>

## Project Application Design 3.0

It is to be designed in a local repository which can be linked to online server. Since the project application promises to provide the full functional website as a digital platform hosted in a cloud server, its design and implementation consist of many steps. It is divided into four design parts. They are further divided into several steps.

1. Design Part-A consist of making a user interface then providing interaction between them and testing the website.
2. Design Part-B consist of making the website to work as [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app). 

### Design: Part-A 3.1

The Part-A consist of four separate stages, they are referred here as steps. Ste-2 and Step-3 overlaps eachother.

1. GUI interface.
2. Setting up database for the project.
3. Making UI elements interactive by connecting to the database.
4. Testing interaction between pages and database.

**Step-1**: The website shows an interface to the user to interact with so that one can login or register. Here a GUI ( Graphical User Interface ) for this purpose is designed.

```mermaid
graph TD;
    HomePage-->LoginPage;
    HomePage-->SignupPage;
    LoginPage-->HomePage;
    SignupPage-->HomePage;
```

These three pages initial sketch is designed and  shown in the following diagram.

![app-design-01](images\\docs\\app-design-01.jpg)<br>
*figure-1*

**Step-2**: Setting up database locally and online to store and retrieve the user credentials. [Mongodb](https://www.mongodb.com/) database is chosen for this purpose.

**Step-3**: Make UI parts interactive so that communication is enabled among different pages using HTTP protocol. Following flow diagram shows such an interaction which happens through this protocol.

```mermaid
graph TD
    A[User visits website] -->|GET| B{Login or Signup}
    B -->|Signup| C[Client-side email criteria checked]-->C
    C -->|Validate email format| D[Submit form]
    D -->|POST| E[Redirect to Login page, HTTP GET]
    D -->|Validation failure| B
    B -->|Login| F[Client-side password confirm criteria checked]-->F
    F -->|Validate password criteria| G[Submit form]
    G -->|POST| H[Redirect to dashboard, HTTP GET]
    G -->|Failure| B
```

**Step-4**: Application is to be tested to make sure it passes all HTTP requests made by the user, to do so either [Postman](https://www.postman.com/),[insomnia](https://insomnia.rest/) or Vscode extension name [thunderclient](https://www.thunderclient.com/) will be used to debug and test APIs.

---

### Design: Part-B 3.2 

- Designing the UI for the dashboard page. This is where the user will be redirected once successfully logged in to the website.
- This page will offer users to practice Verbal Reasoning question and answers or to take a test.
- While practicing user is presented different topics to choose from, in turn each topic would have 1-4 lessons, where each lesson is comprised of 10 questions and answer format data locally saved in JSON format.


### Design: Part-C 3.3

**Step-1**: The website is to be implemented as Progressive Web application and tested on hand-held devices. It has to pass full criteria to be the candidate for PWA. Testing is to be done using available technologies.

- Write down what is to come here ! 

- At first we only design the user interface for the user to login or register to the website.the site to provide us the working websites that includes a home page providing the option of `Login` and `Signup` facilities. Once this stage is passed, testing is done,we will continue to the next stage.
- The project also promises that such a project should be used on mobile devices, thus it would try to achieve this functionality using Progressive Web App technologies before going to the next stage.

---

## Working on the design Part-A  4.0

- As discussed above we are to use the MVC architecture of express node module. In MVC architecture `views` represents the interface or the webpages that user can interact with. When users presses or clicks on these interfaces client initiates the request to navigate to a different page, this requests is handled by the MVC architecture using `routes`. Similarly what is to be done in response to the request can be handled by the `controller` components.
- Express frame work makes our job easy to keep all these components of the web developing environment by providing us separate folders to keep the work modular while working behind the scene providing the logic to interact with each other.

### Starting project application setup 4.1

1. Windows 10/11 machines are used equipped with dual processors running 16 threads with a raid setup. VSCode has been set up with the required extensions activated. Extensions used are shown in [Appendix-A](#appendix-a).

    ![local-machine.png](images\\docs\\local-machine.jpg)

2. VSCode has been set up with the required extensions activated. Extensions used are shown in [Appendix-A](#appendix-a).
3. Node.js, npm, and Git have been installed.
  
    ![version.png](images\\docs\\version.jpg)

4. GitHub has been chosen as the platform for uploading work, with an account under the username '`SulaimanSayyed21` already created.
5. An empty online remote repository with the same name has been created to connect with the local machine.
6. The next step involves configuring the Express framework.

#### Setting up express nodejs framework 4.1.1

- Though the folder structure can be created manually but `express` provides a CLI (command line interface) to ease the work.
- To use the express cli, it has been installed using `npm install -g express-generator`.
- Express allows us to use different templating engine for the html code, I have chosen `ejs` as my template engine.

#### Generating the application skeleton 4.1.2

1. The command `express --view=ejs h446` creates a skeleton folder structure. The out put is shown below.

```
> express --view=ejs h446

   create : h446\
   create : h446\public\
   create : h446\public\javascripts\
   create : h446\public\images\
   create : h446\public\stylesheets\
   create : h446\public\stylesheets\style.css
   create : h446\routes\
   create : h446\routes\index.js
   create : h446\routes\users.js
   create : h446\views\
   create : h446\views\error.ejs
   create : h446\views\index.ejs
   create : h446\app.js
   create : h446\package.json
   create : h446\bin\
   create : h446\bin\www

   change directory:
     > cd h446
   install dependencies:
     > npm install
   run the app:
     > SET DEBUG=h446:* & npm start

```

Following is the listing of this directory.

```bash
Directory: K:\projects\2024\express\h446
Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d----        08/04/2024     12:53                  bin
d----        08/04/2024     12:53                  public
d----        08/04/2024     12:53                  routes
d----        08/04/2024     12:53                  views
-a---        08/04/2024     12:53           1074   app.js
-a---        08/04/2024     12:53            290   package.json
```

- The application project folder name is provided above as `h446`. The above command also sets the html templating engine to be `ejs`.

#### Initialising git and linking it to the GitHub repo 4.1.3

1. First we initialised the `git`into the `h446` folder, using the following command.
2. Second contents of the folder are added to staging area.
3. The commit is made giving some comments.

```Git
> git init .
> git aa 
> git cm "initial commit: express app generated using express cli setting templating engine as ejs"
```

- Note: in above command `git aa` and `git cm` are git aliases set to ease the work, the details of these shortcuts is provided in the [Appendix-B](#appendix-b).

- Taking a git log shows the out put of repo state.

```git
> git log
commit 50e4c936f0a8cb1783dd76e199da7e1ac346f487 (HEAD -> main)
Author: SulaimanSayyed21 <sullisayyed21@outlook.com>
Date:   Mon Apr 8 12:59:25 2024 +0100
```

- Link is established between local and remote repository using `git remote add origin https://github.com/SulaimanSayyed21/h446Alevel.git`.
- Setting a branch name `git branch -M main`.
- Pushing the local repo to remote using `git push -u origin main`.
- The out put is shown below.

```git
 > git push -u origin main
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 16 threads
Compressing objects: 100% (12/12), done.
Writing objects: 100% (15/15), 2.56 KiB | 523.00 KiB/s, done.
Total 15 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To github.com-SulaimanSayyed21:SulaimanSayyed21/h446Alevel.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

Having pushed the local repo to the remote, following is the snapshot of the remote repo.

![github-01.jpg](images\\docs\\github-01.jpg)<br>
*figure-2*

- Express framework has created a `project.json` file which contents are shown below.

```json
{
  "name": "h446",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "ejs": "~2.6.1",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1"
  }
}
```

- The above has set the name of the app along with other information. A script is provided to run the application. In dependencies folder it telss us that this project depends upon these libraries. They are not yet installed. The first step is to install them by using `npm install`.
- When this command is run, npm install all the libraries under `node_modules` folder. It is time to see if our skeleton app is working or not.
- Using `npm run start` the script is started at `port 3000`.
- Terminal output is shown below.

```txt
> npm run start
> h446@0.0.0 start
> node ./bin/www

GET / 200 88.382 ms - 207
GET /stylesheets/style.css 200 5.964 ms - 111
GET /sw.js 404 3.356 ms - 993
GET / 200 2.621 ms - 207
GET /stylesheets/style.css 200 2.111 ms - 111
GET /favicon.ico 404 2.472 ms - 993
```

- The above information shows us that server is run from `./bin/www` directory and different `GET` requests are made, the last one status shows `404` means that there was no `favicon` found. As the project goes along details will be provided of what is happening.
- The server running on port 3000 snapshot is shown below.

![localhost-01.jpg](images\\docs\\localhost-01.jpg)<br>
*figure-3*

- At this state we install another npm library called `nodemon` so that while we work the server is updated automatically. The nodemon watches any live changes in the code and as the files are saved it updates the server without letting us stop and restart the server.
- To do so we use `npm i nodemon`. It can be installed globally or locally in this project. I have installed it globally as it helps me in other projects.
- Adding a script in `project.json` file using this line of code `"dev":"nodemon --ext js,ejs,json,css ./bin/www"`. It lets us start the script using `npm run dev` where the word `dev` represents our development environment while the script `nodemon --ext js,ejs,json,css` are instructions given to nodemon to watch the changes in these file.
- Staring the server using `npm run dev`, following is the output of this command.

```txt
> npm run dev
> h446@0.0.0 dev
> nodemon --ext js,ejs,json,css ./bin/www

[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,ejs,json,css
[nodemon] starting `node ./bin/www`
```

- Since we have added the node_modules and it is a git project we create a `.gitignore` file so that node_modules is not included in our project. It is a common practice as it includes thousand of libraries folders. When anyone else clone this repository, one has to only run `npm install` and all dependencies are installed and project can be run. Also adding `Readme.md` file.
- Readme.md is a markdown file which can be rendered on any browser, it frees you to write contents in html file using different elements as `<h1>` etc.
- A commit is made to save the state of the repository.

> Note: So far we have created a nodejs express skeleton app that gives us a server which is running on the local machine on the port 3000. No code for the required app is written.

### Analysing the express skeleton structure 4.2

- The first job for us to understand and analyse how express server is working. Where and how our webpages to be written, where are styles and JavaScript code along with other static files such as images if we have any, are to be placed.
- Second writing the logic or code for our application. Also deciding in which folder it has to go and how to provide the logic for express to understand what we intend to do so that it can work accordingly.
- Let see what folder structure is created by express for us, it is shown below using the `tree /F` command on terminal.

```txt
K:.
│   app.js
│   package.json
│
├───bin
│       www
│
├───public
│   ├───images
│   ├───javascripts
│   └───stylesheets
│           style.css
│
├───routes
│       index.js
│       users.js
│
└───views
        error.ejs
        index.ejs
```

- The above structure tells us that the main application name is `app.js` which is present at the root of our project.
- Public folder is a place where static files are to be placed. static files are the one which are not changed dynamically when the application is run.
- Views provide the place where html pages are to be written and kept. It is the frontend part of the client/sever architecture.
- Routes folder where routing logic is to be created for the navigation of the pages. It represents the backend of the client/server architecture.
- The bin directory has a www file without any extensions but it is js script which creates the server, since it is created by an express server it provides the logic ro `run, debug and listen to the server along with any error detailed if encountered. Following is code from this file.

> Note: It was possible to delete all the contents provided by the express framework and starts writing the logic from the beginning but it would have been useless as express only provides the basic logic which we would have to write again. To delete and write the same code is not a good practice in software engineering and referred as reinventing the wheel.

```js
#!/usr/bin/env node

var app = require('../app');
var debug = require('debug')('h446:server');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
```

#### Interrogating the functionality of the www Script 4.2.1

1. **Shebang**: `#!/usr/bin/env node` - This line specifies that the script should be executed by the Node.js runtime. The symbol `#!` is shell environment is known as `Shebang` and must be the first part of the first line of the script for the script to run successfully.
2. **Module Dependencies**: The script requires necessary modules:
    - `var app = require('../app');`: This imports the `app.js` from the root folder.
    - `var debug = require('debug')('h446:server')`: This is used for debugging purpose providing the name for our root folder.
    - `var http = require('http');`: To use the http object for the server to start it gets the handle to the node built in `http` module.

3. **Get Port**: The script attempts to obtain the port number from the environment variables. If not found, it defaults to port 3000. This port number is then set on the Express application.

4. **Create HTTP Server**: The script creates an HTTP server using the `http.createServer()` method and passes the Express application (`app`) to it.

5. **Event Listeners**:
    - `server.on('error', onError)`: Listens for any errors that occur when starting the server.
    - `server.on('listening', onListening)`: Listens for when the server starts listening for connections.

6. **Normalize Port Function**: This function attempts to normalize the provided port into a number, string, or false by using if logic and checking different possible situations.

7. **Error Handling**: The `onError` function handles errors that occur when starting the server, such as permission issues or port conflicts. It also provides the logic by having a `switch` statement and displays the code using `console.error` function.

8. **Listening Event Handling**: The `onListening` function logs a message indicating that the server is listening on a specific port or pipe.

> Note: in short express has provided much more sophisticated logic to handle the errors and encountering possible mistakes. The same task was earlier provided by simple logic as shown above under the heading "How a simple nodejs server is created".

#### Examining app.js code 4.2.2

- It is the main entry point for an Express application. It is where the application is configured, routes are defined, middleware is applied, and the server is started. Lets examine this code.

```js
// app.js 

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```

1. The code begins by requiring necessary modules such as `http-errors, express, path, cookie-parser, and logger`. These modules are used for handling errors, creating the Express application, working with file paths, parsing cookies, and logging requests. This is how the node application works using CommonJs model syntax. In contrast to CommonJs ES6 uses `import/export` syntax to achieve the same goal.
2. Next, it requires route files for handling different parts of the application. indexRouter and usersRouter are required from their respective route files `(./routes/index)` and `(./routes/users)`. The index routes represents our home page and can be accessed using `http:<URL>/` or `http:<url>index`, as we are using localhost on port 3000, we will get our home page using `localhost:3000` respectively.
3. An instance of Express application is created and stored in the variable `app` using `var app = express()`.
4. Express is configured to use the EJS view engine. The views directory is set to `views`, and the view engine is set to `ejs`.
5. Middleware functions are applied to the Express application using the `app.use()` method. in short wherever express uses `app.use()` this format is used to setup the middleware. All the above defined middleware `use` methods are handled by the express internally these include:
    - `logger('dev')`: Configures logging middleware with the 'dev' format..
    - `app.use(express.json()) and app.use(express.urlencoded({ extended: false }))`: Middleware for parsing JSON and URL-encoded request bodies.
    - `cookieParser()`: Parsing cookies attached to incoming requests.
    - `express.static()`: Serving static files from the 'public' directory.

6. `app.use('/', indexRouter)`: Mounts the index router at the root URL `('/')`. This route is to be handled by us or the developer to provide the logic what happens when the home page is served.
Similarly `app.use('/users', usersRouter)`: Mounts the users router at the '/users' URL. While `app.use(function(req, res, next) { ... })`: Handles 404 errors by passing them to the next middleware. 

> Note: The function arguments `req` means the request and `res` means the response sent when receiving the request while `nex` represent what is to be done next, in above case it invokes the `createError(404)`method.

1. `app.use(function(err, req, res, next) { ... })`: It is a central error-handling middleware which sets the error status, renders an error page, and sends an error response.

2. `module.exports = app`: Exports the Express application to make it available to other modules.

Overall, app.js sets up an Express application, configures middleware, defines routes, and handles errors to create a robust web server.

#### What lies under views folder ? 4.2.3

1. As mentioned earlier it is this folder which represents the front end of our website. Express provides us with two files. One is `error.js` which contains nothing but three lines logic to show the error messages and express uses this file to show an error if encounters. The code is shown below.
2. Since we are using ejs templating engine its notation `<% %> or <%- %> or <%= %>` is used in above code. We will leave this file as it is.

```ejs
<h1><%= message %></h1>
<h2><%= error.status %></h2>
<pre><%= error.stack %></pre>
```

The second file is `index.ejs` which serves as our home page. Earlier when we ran our server the website snap shot shown above gives us the message defined in this page. Following is the code for this file. We do not intend to use this file and its contents will be deleted.

```html
// index.ejs 

<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
  </body>
</html>
```

Before we start to work we will also see what is present in our `route` folder.

#### Examining route folder 4.2.4

The route folder has two files containing the code of handling the navigation of home page and the users. We first look at the `index.js` or home page routing code.

```js
// index.js 

var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
```

1. The code begins by importing the express module and creating a new router instance using express.Router().
2. ext a route is defined using the get() method of the router object. This route handles `HTTP GET` requests to the root path ('/').
3. The route callback function takes three parameters req (request), res (response), and next.
4. Inside the route handler function, the `res.render()` method is used to render the index view template with some data. In this case, it sets the `title` variable to `Express`.
5. Finally, the router object is exported using `module.exports`, making it available for use in other parts of the application.

In short this route serves as the handler for the home page ('/') of the Express application, rendering the index view template and passing it the title 'Express'. Having done with the route folder it takes us to the one more file provided by the express framework in `public/stylesheet/styles.css`. It is used to provide some styles, we are not going to use this file and contents of this file will be deleted.

```css
// styles.css
body {
  padding: 50px;
  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
}
a {
  color: #00B7FF;
}
```

- Express does not provide any script so the javascript folder is empty.

> Note: So far we have examined the express skeleton structure and the code provided. The next step is to provide the logic for our intended website.

Before going any further vscode snapshot is taken to show how work is done in it.

![vscode-01.jpg](images\\docs\\vscode-01.jpg)<br>
*figure-4*

<div class="page"/>

### Implementing Design Part-A Step-1: Creating Home Page 4.3

The application should adhere to the layout outlined in Part-A, comprising three distinct pages: the homepage, login page, and signup page. Each page should seamlessly link to the others, ensuring smooth navigation between them.


1. Starting from the home page: the contents of `index.ejs` are removed. A new folder named `layout` is created in views folder and `header.ejs` template is created. The contents of the this file is shown below.

```html
// index.js 

<!doctype html>
<html lang="en">
<head>
  <title><%= title %></title>
  </title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <!-- Link to local Bootstrap CSS -->
  <link rel="stylesheet" href="/bootstrap-5.0.2/css/bootstrap.min.css">
  <!-- Link to Custom CSS -->
  <link rel="stylesheet" href="/stylesheets/styles.css">
  <!-- bootstrap icons cdn link -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
```

- The reason to create the head layout is that this app has three different pages so far and they all have to have the above code in those files. By creating the template we ony need to insert the template reference and they will be rendered.

#### Analysing the above code and creating new folders 4.3.1

- `<!doctype html>`: Declares the document type and version of HTML being used.
- `<html lang="en">`: Defines the root element of the HTML document and specifies the language of the content (English).
- `<head>`: Contains metadata about the HTML document, such as the title, character encoding, viewport settings, and links to external resources.
  - `<title><%= title %></title>`: Sets the title of the HTML document dynamically using EJS syntax. The value of the `title` variable will be inserted here.
  - `<meta charset="UTF-8">`: Defines the character encoding of the document as UTF-8, which supports a wide range of characters.
  - `<meta name="viewport" content="width=device-width, initial-scale=1">`: Configures the viewport settings for responsive web design. It sets the width of the viewport to the width of the device and sets the initial zoom level to 1.
  - `<link rel="icon" type="image/x-icon" href="/favicon.ico">`: Specifies the favicon (shortcut icon) for the website.
  - `<link rel="stylesheet" href="/bootstrap-5.0.2/css/bootstrap.min.css">`: Links to the local Bootstrap CSS file, which provides styling for the HTML elements using Bootstrap.
  - `<link rel="stylesheet" href="/stylesheets/styles.css">`: Links to a custom CSS file (`styles.css`) for additional styling specific to the application.
  - `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">`: Links to the Bootstrap Icons CDN (Content Delivery Network) for using icons in the application.

The above sets up the basic structure and styling for an HTML document in this application, ensuring proper rendering and styling of the content. In above code bootstrap files are accessed locally thus  they are to be  downloaded in `public` folder. As mentioned earlier express framework looks for static files in the public directory. Custom styles and scripts are to be placed under this folder. Following folders are created under public folder and related files are downloaded from the [Bootstrap site](https://getbootstrap.com/docs/5.2/getting-started/download/). Vscode snapshot shows these folder and files.

![bootstrap.jpg](images\docs\\bootstrap.jpg)<br>
*figure-5*

The contests of the  `style.css` provided by express are deleted. An `icons` folder is also created to keep the application related icons.

> Note: A local commit is made and contents arre pushed to the github.

```git
> git lol

2c104d9 (HEAD -> main)  bootstrap folder is added and files are downloaded, also layout folder is created and header.ejs is written
ffeff25 Readme.md updated, design diagrams added
7500e32 normal commit: Readme updated, table of contents added
60388d4 documentation done in Readme.md and output taken in pdf-output
cbf038a (origin/main)  vscode worksapce is added, Readme.pdf genertated automatically by the extension, one image added.
1e05319  nodemon installed globally, script added in package.json fi.e, readme.md added, server is working
50e4c93 initial commit: express app generated using express cli setting templating engine as ejs

> git push origin main

Enumerating objects: 52, done.
Counting objects: 100% (52/52), done.
Delta compression using up to 16 threads
Compressing objects: 100% (35/35), done.
Writing objects: 100% (42/42), 945.49 KiB | 4.22 MiB/s, done.
Total 42 (delta 9), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (9/9), completed with 1 local object.
To github.com-SulaimanSayyed21:SulaimanSayyed21/h446Alevel.git
   cbf038a..2c104d9  main -> main
```

- Following is a snap shot of remote github showing the current changes.

![github-02.jpg](images\\docs\\github-02.jpg)<br>
*figure-6*

#### Creating homepage header 4.3.2

> Note: header.ejs name is changed to head.ejs as head and header represent different sections of html page .

- All pages of our application shares the header and footer, though footer is same but header differs. The home page offers user to login or to Signup option we first write this template.
- The home page would contain this format.

```txt
head template
header template
main section of the home page
footer template
```

- Creating `loginheader.ejs` template in `layout` folder under `views`. Following are the contents of `loginheader.ejs` template.

```html
// loginheader.ejs 
<body>
    <header>
      <div class="container">
          <div class="row">
            <div class="col">
              <h3>
                Verbal Reasoning
              </h3>
            </div>
            <div class="col-auto">
              <a href="/login" class="anchor"> Login</a>
              <a href="/signup" class="anchor"> Signup</a>
            </div>
          </div>
        </div>
    </header>
```

- Similarly `footer.ejs` template is also created under the same folder. The contents are shown below.
  
```html
// footer.ejs
<footer>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>A Level Project by Sulaiman Sayyed</h3>
            </div>
        </div>
    </div>
</footer>
</body>
```

- Now we need to add these layout templates into our home page which is `index.ejs` file which is also an ejs template. The contents are shown below.

```html
//index.js

<%- include('layout/head.ejs'); %>
  <%- include('layout/loginheader.ejs'); %>
    <main>
    </main>
    <%- include('layout/footer.ejs'); %>
      <script src="bootstrap-5.0.2/js/bootstrap.bundle.min.js"></script>
      </body>

      </html>
```

- Running our server using `npm run dev` and it is started on port 3000.
- When the port is open in chrome, it shows the following error on the webpage.

![error-01.jpg](images\\docs\\error-01.jpg)<br>
*figure-7*

- It is to be noted that what happens when the page is not found a `404` page is shown, since express provides the logic to show the error output handling in www script where the server is run, it outputs its logic on the webpage which is convenient for the developer. The error shows that it does not find the file `footer.ejs`.
- Found the typo in the file name, it was `foter` changed to `footer.ejs`. The following is displayed on `localhost:3000`.

![localhost-02.jpg](images\\docs\\localhost-02.jpg)<br>
*figure-8*

The above result shows that the home page is displayed successfully on the given port. But the desired result is not achieved yet. The reason being that we have not supplied our styles. Before we write the styles for the home page we would examine what is written in above layouts.

**index.ejs** contents: This `index.ejs` file is an EJS (Embedded JavaScript) template used to render the homepage of an Express.js application. The code is examined below.

1. `<%- include('layout/head.ejs'); %>`: Includes the content of the `head.ejs` file located in the `layout` directory. This contains the HTML head section, including metadata, CSS links, and the opening `<body>` tag.

2. `<%- include('layout/loginheader.ejs'); %>`: Includes the content of the `loginheader.ejs` file located in the `layout` directory. It represents the header section of the homepage, which  includes navigation links to login and Signup pages.

3. `<main></main>`: Defines the main content section of the homepage. At this stage it is empty.
`<%- include('layout/footer.ejs'); %>`: Includes the content of the `footer.ejs` file located in the `layout` directory. This represents the footer section of the homepage, which may include links, copyright information, or other footer content.

4. `<script src="bootstrap-5.0.2/js/bootstrap.bundle.min.js"></script>`: Loads the Bootstrap JavaScript file (`bootstrap.bundle.min.js`) from the local `bootstrap-5.0.2` directory. This script provides functionality such as dropdowns, modals, and other Bootstrap components.

5. `</body>` and `</html>`: Closes the HTML body and HTML document tags, respectively.

**loginheader.ejs** contents: The `loginheader.ejs` file represents the header section of a webpage.

1. `<body>`: The opening `<body>` tag, which signifies the start of the HTML body section.
2. `<header>`: Defines the header section of the webpage, usually containing navigation links or brand name along with brand logo or icon.

The following 1,2 and numbered 3 lines contains CSS ( Cascading Style Sheets ) classes, since bootstrap responsive design is used, its `container` class is used.

1. `<div class="container">`: Creates a container to hold the header content, ensuring proper alignment and spacing.
2. `<div class="row">`: Defines a row within the container to organize content horizontally using the Bootstrap grid system.
3. `<div class="col">`: Creates a column within the row to hold the branding or title of the webpage.
4. `<h3>`: Defines a level 3 heading element (`<h3>`) to display some text. In this case, it represents the name of the website `Verbal Reasoning`.
5. `<div class="col-auto">`: This class allows the contents to adjust their width based on content.
6. `<a href="/login" class="anchor"> Login</a>`: Defines an anchor (`<a>`) element representing a navigation link to the login page. The `href` attribute specifies the URL to navigate to when clicked, and the `class="anchor"` class will be used for styling purposes which has yet been written.
7. `<a href="/signup" class="anchor"> Signup</a>`: Another anchor element representing a navigation link to the signup page. Similar to the login link, it has an `href` attribute pointing to the signup page and a `class="anchor"` class for styling which is to be written.

 At this stage, it would be a better idea to examine how HTML tags, elements or headings are constructed. Every HTML tag or element is treated as an object, which has its properties. These properties, in turn, may include attributes." For example, in `head.ejs` file a meta tag is used `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. The `<meta>` is an HTML object and has many properties, among them are `name`, `content` and `initial-scale` in turn these are assigned specific attributes. This is how HTML object or elements are constructed.

- Similarly the `footer.ejs` contents are same and have been discussed above, with one exception that it shows the different text or message.

#### Applying styles to home page using styles.css 4.3.3 

- As we have seen in figure-8 that our footer is not aligned to the bottom of the page. The reason being that the header or the footer tags are HTML semantics tags which allows user to use them in their code to convey the meaning of the HTML elements, it is the job of the developer to provide its styles. Following code is written in `styles.css`
  
```css
body {
  margin: 0;
  padding: 0;
}

header {
  background-color: #b4b4e5;
  color: #171717;
  padding: 0px;
  text-align: center;
  display: flex; /* Use flexbox */
  align-items: center; /* Vertically center items */
  justify-content: space-between; /* Distribute items horizontally */
  height:50px;
 
}

footer {
  background-color: #b4b4e5;
  color: #171717;
  padding: 0px;
  text-align: center;
  display: flex; /* Use flexbox */
  align-items: center; /* Vertically center items */
  justify-content: space-between; /* Distribute items horizontally */ 
  width: 100%;
  position: fixed;
  bottom: 0;
  height:70px;
}
```

- When above styles are applied the shape of our application is shown in the figure below.

![localhost-03](images\\docs\\localhost-03.jpg)<br>
*figure-9*

- The comments presented in the styles defines the code reason. The footer is attached to the bottom using `position:fixed` styles while both header and the footer are given their heights as well.
- From the figure-9 above it can be seen that both `Login` and `Signup` text is shown but does not have any styles, since both of them are provided with a class name "anchor", its styles are written now. Following styles are applied to the CSS class `.anchor`.
  
```css
.anchor{
  font-size: 18px;
  background-color: #b4b4e5;
  color: #171717;
  padding: 0px 15px 0px 15px; /* top, right, bottom, left */

}
```

- The padding values makes sure that there is some distance present between the items.

#### Applying bootstrap icons in header 4.3.4

- Since the page is presented to the user to login or register, it is a good idea to have some icons presented here. Three different icons are used in loginheader template, their respective classes are shown below.

```html
//loginheader.ejs
<body>
  <header>
    <div class="container">
        <div class="row">
          <div class="col">
            <h3>
              <span class="bi bi-lock-fill"></span>
              Verbal Reasoning
            </h3>
          </div>
          <div class="col-auto">
            <a href="/login" class="anchor"><i class="bi bi-key-fill"></i> Login</a>
            <a href="/signup" class="anchor"><i class="bi bi-arrow-bar-up"></i> Signup</a>
          </div>
        </div>
      </div>
  </header>
```

- The state of the application is shown below in figure-10.

![localhost-05](images\\docs\\localhost-05.jpg)<br>
*figure-10*

- To make sure that our design is responsive we move the size of the window by dragging and enlarging to the full screen size, it is noted that the contents are behaving as designed. The text in header and footer always aligned to the center of the container. It is shown in the next figure.

![localhost-06](images\\docs\\localhost-06.jpg)<br>
*figure-11*

> Note: Application home page is successfully implemented using bootstrap class to control the styles and ejs templating engine to write html and rendering them by express server.

- Before moving ahead to the next page design, a `favicon` will be added to the website and the title of the website will be changed dynamically. In figure-11 it can be seen that the application tab has no icon and the title is still shown `Express`.
- Created an online icon for the tab of size `16X16` and saved as `favicon.ico` in the root of the website which is a public directory from where it is rendered by express.
- To change the title of the page we edit the homepage router file contents. As it is the `index.ejs` which is rendered when users goes to our website, in express the route that handles this request is present in our `routes` folder named `index.js`. The modified contents are shown below.

```js
// index.js

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Verbal Reasoning for 11+'}); /* title is changed to 11+ */ 
});

module.exports = router;
```

The following figure shows the different title and favicon in the title of the webpage.

![localhost-07](images\\docs\\localhost-07.jpg)<br>
*figure-12*

---

#### Adding Login and Signup pages 4.3.5 

- Two files are created `login.ejs` and `signup.ejs` in `views` folder where home page layout `index.ejs` is already present.
- Following the design shown in [figure-1](#design-part-a), first a template file named `normalheader.ejs`is created which will be injected in both login and signup template.
- The contents of the `normalheader.ejs` is shown below.

```html
// normalheader.ejs

<body>
    <header>
      <div class="container">
        <div class="row">
          <div class="col">
            <h3><i class="bi bi-lock-fill"></i>Verbal Reasoning</h3>
          </div>
        </div>
      </div>
    </header>
```

- The above code does not show either login or signup options as it is rendered within these pages.
- Initially The contents of the `login.ejs` is shown below.
  
```html
// login.ejs

<%- include('layout/head.ejs'); %>
    <body>
        <%- include('layout/normalheader.ejs'); %>
        <div class="container">
            <div>
                <h1>Login</h1>
            </div>
        </div>
        <%- include('layout/footer.ejs'); %>
    </body>
</html>
```

- Though the contents of the page is created but its route is not present in the route directory. Therefore a file name `login.js` is created in `routes` folder. The contents to handle the incoming GET request when user press the Login option from the home page is shown below.

```js
// login.js

var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login',{ title: 'Login' });
});

module.exports = router;
```

- Though the route logic is provided but we have to make an entry into `app.js` so that it knows about this route. There are two entries made, first `loginRouter` is declared at the top along with already predefine `indexRouter`, using `var loginRouter = require('./routes/login');` then adding the middleware part by telling `app.js` to use this logic `app.use('/', loginRouter);`. In the above code it can be seen when this page is displayed, the title value is also provided and it will be updated automatically.
- At this stage server is running and shows the login page.

![localhost-08](images\\docs\\localhost-08.jpg)<br>
*figure-13*

- Now we further modify the `login.ejs` file and add form contents to be filled by the user. Contents are shown below.

```html
// login.ejs

<%- include('layout/head.ejs'); %>
<body>
<%- include('layout/normalheader.ejs'); %>
<div class="container form-border">
  <div class="">
    <h1>Login</h1>
    <!-- LOGIN FORM -->
    <form action="/login" method="post">
    <!-- Label for Name -->
      <label for="name">Name:</label>
      <input type="text" id="name" name="username" placeholder="Enter your name" required autocomplete="off"
        class="form-control">
    <!-- Label for Email -->
      <label for="email">Email:</label>
      <input type="text" id="email" name="useremail" placeholder="Enter your email" required autocomplete="off"
        class="form-control">
    <!-- Label for Password -->
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" class="form-control" required>
      <button type="submit" class="btn btn-warning btn-lg">Login</button>
    </form>
    <hr>
    <p>Need an account? <a href="/signup">Signup</a> Or go <a href="/">home</a>.</p>
  </div>
</div>
<%- include('layout/footer.ejs'); %>
  </body>
  </html>
```

- Following is a snapshot of the localhost showing login page.

![localhost-09](images\\docs\\localhost-09.jpg)<br>
*figure-14*

- In above snapshot, the fields of the form grows in full screen mode, to avoid this happening boot strap classes `col-sm-6` in the div just below the container. Also to provide the border to its parent container making a CSS class `.form-border`. By making this amendment lengths of the form fields are controlled.

![localhost-10](images\\docs\\localhost-10.jpg)<br>
*figure-15*

- Signup page is not added yet, if it is clicked express server sends the request to get it since it is not present we get the error. The developing setup shows this scenario by telling us `404` error.

![terminal-output-01](images\\docs\\terminal-output-01.jpg)<br>
*figure-16*

To add the Signup page following steps are taken:

  1. Informs `app.js` to use this route, by declaring a `signupRouter = require('./routes/signup');` variable and assigning the `./routes/signup` by giving its directory address.
  2. A middleware `app.use('/', signupRouter);` is added in `app.js` to inform that this route is to be used for signup request
  3. A new file is created under `routes` folder named `signup.js` to handle the request. The code renders the `signup.ejs` template and sends the response back to the browser with the template content along with the title of the page `Signup`.
  4. A new file `signup.ejs` is created and the contents are provided, since they are same as of `login.ejs` they are not discussed in detail. It differs in only one way that it also adds the `Confirm password` label and field.

```js
// signup.js

var express = require('express');
var router = express.Router();
/* GET Signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup',{ title: 'Signup' });
});
module.exports = router;
```

- The above shows the `signup.js` router contents while the snapshot of the signup page is shown below.

![localhost-11](images\\docs\\localhost-11.jpg)<br>
*figure-17*

> Note: Upon visual inspection a mistake is detected, the above page wrongly shows the `Confirm Password` label and filed, it is corrected and made sure the this code is present in `login.ejs` layout and not in `signup.js`. The corrected pages are shown below.

![localhost-12](images\\docs\\localhost-12.jpg)<br>
*figure-18*

- A commit is made indicating the changes. First we take the state of our stage using `git st` shown below and make a commit. Also removed `.form-group` classes and unnecessary `divs` from both files.

```git
git st                             pwsh  17:16:52 On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   Readme.md
        modified:   views/login.ejs
        modified:   views/signup.ejs

Untracked files:
  (use "git add <file>..." to include in what will be committed) 
        public/images/docs/local-machine.jpg
        public/images/docs/localhost-12.jpg
        public/images/docs/version.jpg

no changes added to commit (use "git add" and/or "git commit -a")
```

- Design Part-A step-1 is achieved which consisted of providing a user interface.

#### Testing UI 4.3.6 

- Three browsers `Google chrome, Microsoft edge and mozilla firefox are used`.
  
1. When home page  is seen in full width using above browsers, they all show contents are displayed in the center and both Login and Signup links are displayed with icon.
2. When the size is changed horizontally to the minimum width, `Edge and Chrome` displays the header text in one line but `firefox` behaves differently as shown in the following figure.

![ui-testing-01.jpg](images\\docs\\ui-testing-01.jpg)<br>
*figure-19 - Home page*

- To avoid it happening the `.anchor` class property ` padding: 0px 10px 0px 10px; /* top, right, bottom, left */` values were chaged from `15` to `10`. The problem is corrected. as shown below.

![ui-testing-02.jpg](images\\docs\\ui-testing-02.jpg)<br>
*figure-20 - Home page*

 Checking Login and Signup pages. They are displayed correctly in all three  browsers as shwon below.

![ui-testing-login-03.jpg](images\\docs\\ui-testing-login-03.jpg)<br>
*figure-21 - Login page*

![ui-testing-signup-03.jpg](images\\docs\\ui-testing-signup-03.jpg)<br>
*figure-22 - Signup page*

#### Evaluating UI 4.3.7 

| Testing              | Issues |
| -------------------- | ------ |
| 1. Visuals elements  | No     |
| 2. Layout            | No     |
| 3. Consistency       | No     |
| 4. Responsive design | No     |


#### Testing Page loading performance 4.3.8

Using developers tool provided by chrome, all three pages were loaded and network tab is used to see the performance, there were no bottleneck issues were found, the load time varies from `54ms to 93ms` when page is cached and without cache from `150ms to 180ms`. Following figure shows the Network tab activity fo the Login page from developers tools.

![performance-testing-01.jpg](images\\docs\\performance-testing-01.jpg)<br>
*figure-23*
The following page shows the `performance tab` from Google chrome devlopers tools. At the bottom section summary informs how much time it has taken to laod the pages.

![performance-testing-02.jpg](images\\docs\\performance-testing-02.jpg)<br>
*figure-24*

<div class="page"/>

### Implementing Design Part-A  Step-2: Setting up Database locally and online 4.4 

- Mongodb server and clients utilities are installed on the local machine. Two client utilities are installed one is a mongo shell called `mongosh` and second one is GUI called `Compass`.
- Both are shown to be running in the following figure. Mongo shell can be opened in Compass or separately

![mongosh-compass.jpg](images\\docs\\mongosh-compass.jpg)<br>
*figure-25*



- An online account is created using a usr name `sullisayyed21@outlook.com` with a  cluster name `usersName0` shown below.

![atlas-online.jpg](images\\docs\\atlas-online.jpg)<br>
*figure-26*


- A database named `vrusers` is created locally and online. This database contains a collection name `credentials` where the details of the user will be added.
- A Database user is added giving a role of admin to handle with this database online, password and user name is set.
- At first newly created database name `vrusers's` collection is empty. It is to be filled when user register on the site.
- To connect to a local mongodb server the address is provided from `Compass` client utility it is `mongodb://localhost:27017/vrusers`. As it can be seen that we are providing the database name `vrusers` in the end of the URL to connect to the right address.
- Similarly to connect to online server, the online Atlas server has provided the connection string it is shown below.

```txt
mongodb+srv://<user>:<password>@usersname0.r4rl0vd.mongodb.net/vrusers?retryWrites=true&w=majority&appName=usersName0
```

- In the above string user and password fields to be filled in our application, this string also points to the database we intend to use.
- To connect the application to a local or online server node `mongoose` module is installed in the project using `npm i mongoose`.
- Though local and online server are setup to be used yet no code is present in our app to start the mongoose service from the application. To do so first we need to provide configuration settings. To do so, a file name `connection.js` is created in a new folder called `dbconfig`. Following are the contents of `connection.js`

```js
// connection.js

const mongoose = require("mongoose");

// Load env variable from .env file
require('dotenv').config();
//console.log(process.env);

connectMongoDb = function () {
    try {
        const uri = process.env.MONGODB_URI 
        if (!uri) {
            throw new Error("MONGODB_URI environment variable is not defined");
        }
        mongoose.set('strictQuery', false);
        const connect = mongoose.connect(uri);
        console.log(`Connected to  MongoDB database!`);
    } catch (error) {
        console.error("Mongo Error:", error);
    }
}
// Exporting the whole function to be used in another module.
module.exports = connectMongoDb;
```

- The above code provide the logic to connect the application to the local or online Database server. This function is exported to be used in application and started from the `app.js` file.

> Note: The string provided by the mongodb Atlas online app is not to be exposed on GitHub, as it can be seen by others. So to avoid this it is stored in an `.env` file which is not pushed to the GitHub. To avoid it being pushed, its entry is made in `.gitignore` file. When a Web App is hosted in the clouds on any platform, it is provided directly to that host.

- To store the database connection string securely nodejs library `dotenv` is used by first installing it into our project using `npm i dotenv`. The first line in above code `require('dotenv').config()` automatically loads the variable ( connection string ) from the `.env` file into local machine's running `process.env`.
- The connection string is stored in `.env` file as shown below.

```txt
MONGODB_URI='mongodb+srv://sulli:21March@usersname0.r4rl0vd.mongodb.net/vrusers?retryWrites=true&w=majority&appName=usersName0'
```

- Since for testing and development process a local host string is used which is later on replaced by the above.

```txt
MONGODB_URI='mongodb://localhost:27017/vrusers'
```

#### Establishing database connection from the application 4.4.1

To start the mongoose server from our application two lines are added at the top section of  `app.js` file and one in the middle. To start this service  `connectMongoDb();` function is used. This function is exported exported by `dbconfig/connection.js` file and it is loaded or required in `app.js`.

```js
// app.js

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config(); // new lines added
var connectMongoDb = require('./dbconfig/connection'); // new lines added
...........
connectMongoDb(); // connects the application to database server
```

- Following message is shown on the terminal assuring that successful connection is established.

```txt
> h446@0.0.0 dev
> nodemon --ext js,ejs,json,css ./bin/www

[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,ejs,json,css
[nodemon] starting `node ./bin/www`
Connected to online MongoDB database!
[nodemon] restarting due to changes...
[nodemon] starting `node ./bin/www`
Connected to  MongoDB database!

```

#### Adding a user schema for the database 4.4.2 

- The structure of the database depends upon the schema and it is to be added in our application. To do so a `schema` is to be created which provided a skeleton of the fields that are to be created. This is our modal in terms of express `MVC` architecture.
- For this purpose we create a folder name `modal` under `h446` working directory and in this modal a file name `user.js` is created which will represent the modal. Following are the contents of the `user.js`:

```js
// user.js 

var mongoose = require("mongoose");

var loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const collection = mongoose.model('credentials', loginSchema);

module.exports = collection;
```

- The code `mongoose.model('credentials', loginSchema);` using the `mongoose` library add `loginSchema`. The collection name of our `vrusers` database  `credentials` is also passed to be used with.
- The handle or reference is provided to a variable name `collection` which is exported to be used in other modules, where it will be required.

> Note: So far we have setup a database system locally and online, crated a database name `vrusers` with one collection named `credentials`. The application connection has been established. Now the code logic is to be added into the app so that when user enters the detail to register, it is added into our local or online database.

#### Handling incoming POST request when submit button is pressed 4.4.3 

- In our application views and routes are present a modal has also been created yet we do not have controller. It is time to implement MVC architecture fully to keep the code modular and maintainable this approach also adheres to the separation of concern principle where each component  (routes, controllers, models) has its specific role and responsibility.
- A `controllers` folder is created and two files are added `loginController.js and signupController.js`.
- When `Submit` button is pressed by the user, a Post request is sent to `/signup` route or `/login` route depending where it is pressed from. The above two files will handle these POST requests. A new module name `bcrypt` is to be used to provide the hashing mechanisms, so it is installed using `npm i bcrypt`.
- No user exist initially, they need to register first so starting with `signupController.js` a modal is imported to work with on the top along with another module which will be used for hashing the password to make is secured. Following shows the contents of a `signupController.js`

```js
// Signup controller

var bcrypt = require('bcrypt');
var collection = require('../model/users');

// Handler function that deals with POST
const handleRegisterRequest = async (req, res) => {
  console.log('Entered in signup controller:');
  try {
    // Validate input fields
    const { username, useremail, password } = req.body;
    if (!username || !useremail || !password) {
      return res.status(400).send("Please provide all required fields.");
    }

    // Check if user or email already exists
    const existingUser = await collection.findOne({ name: username });
    const existingEmail = await collection.findOne({ email: useremail });
    if (existingUser) {
      return res.status(400).send("User already exists. Please choose a different username.");
    }
    if (existingEmail) {
      return res.status(400).send("Email already exists. Please choose a different email.");
    }

    // Hash password and save user data
    const saltRounds = 10; // Number of salt rounds for bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userData = await collection.create({
      name: username,
      email: useremail,
      password: hashedPassword
    });
    console.log("User registered:", userData);
    res.render('login', { title: 'Login' });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send("An error occurred during signup. Please try again later.");
  }
};

module.exports = {
  handleRegisterRequest
};
```

In the above code, [asynchronous](#appendix-c) function named `handlePostRequest` is created, it does five jobs:

1. First check if incoming data present in POST `req.body` exists or not if not sent `400` notification with the message. To check the data mongoose api `findOne` is used.
2. Second checks both user name and email, if exists again sends the message back to the user.
3. Third by using `bcrypt` node module hashed the password with recommended 10 rounds.
4. Then using mongodb api on `collection` model apply `create` function using all parameters. This `create` function adds the data into the database collection named `credentials`.
5. Once a user is registered, it is directed to `login` page again to login into the site. Errors are handled accordingly.

- For the above function to work, we need to inform the `signup` route to delegate the responsibility of handling POST request to this function so a new line `router.post(/'signup', signupController.handleRegisterRequest)` is injected into `signup.js` route.
  
![localdatabase-empty](images\\docs\\localdatabase-empty.jpg)<br>
*figure-26*

#### Registering user from the signup page 4.4.4

- The app is running on port 3000, and first user signs up to the site, when submit button is pressed, the data is entered successfully into local database name `vrusers`. MonogoDB is a non relational database that records what is called `documents` in `collections`. Here first document is created, it is shown below.

![data-added-01](images\\docs\\data-added-01.jpg)<br>
*figure-27*

> Note: The application uses `console.log()` extensively to make sure that when code is executed, it keeps the programmers well informs of the activities. The code shown above in `signupController.js` also uses `console.log()` function to log the data on console, it is shown below.

```txt
Entered in signup controller:
User registered: {
  name: 'sulaiman sayyed',
  email: 'sullisayyed21@outlook.com',
  password: '$2b$10$MolVGPwSF963lib.c9PRg.ZSTJ8YG0eVJ5p3B6lzwOgaJNI.o04Z6',
  _id: new ObjectId('661b2739ade0a28f9a1352c8'),
  createdAt: 2024-04-14T00:45:45.301Z,
  updatedAt: 2024-04-14T00:45:45.301Z,
  __v: 0
}
POST /signup 200 144.009 ms - 2270
```

- The hash password is shown as it has been hashed by the code. The code having shown the data on console takes the user to `login` page so that one can login to the site.

##### Testing registration process: 1 -> Locall Database  4.4.4.1

This test is done when nodejs express server is running locally on `port:3000` and connected to local instance of mongodb client application called compasss.

1. When the same name is tried to register and tested locally, it successfully sends the string back fron the its controller `signupController`. The string is shown below.

```txt
if (existingEmail) {
      return res.status(400).send("Email already exists. Please choose a different email.");
    }
Email already exists. Please choose a different email. <--- string returned.
```

#### Logging the user 4.4.5

To handle POST request coming from login page,  `login.js` route is amended to delegates all incoming POST request to `loginController`. It is done by adding the following code.

```js
// login route

var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController'); //new line added
/* GET login page. */
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

/* Delegate the responsibility to the login controller*/
router.post('/login', loginController.handleRegisterRequest); // new line added
module.exports = router;
```

- The code to handle POST requests is shown below in `loginController.js`

```js
// Login Controller

var bcrypt = require('bcrypt');
var collection = require('../modal/user');

const handleLoginRequest = async (req, res) => {
  console.log("Entered In login controller");
  try {
    const checkUser = await collection.findOne({ name: req.body.username });
    if (!checkUser) {
      return res.redirect('/login?error=user_not_found');
    }

    const checkEmail = await collection.findOne({ email: req.body.useremail });
    if (!checkEmail) {
      return res.redirect('/login?error=email_not_found');
    }

    try {
      const isPasswordMatch = await bcrypt.compare(req.body.password, checkUser.password);
      if (isPasswordMatch) {
        return res.render('dashboard', { title: 'Dashboard' });

      } else {
        return res.redirect('/login?error=wrong_password');
      }
    } catch (error) {
      console.error("Error comparing passwords:", error);
      return res.send('Error during login. Please try again.');
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.send('Error during login. Please try again.');
  }
};

module.exports = {
  handleLoginRequest
};
```

##### Testing Login procedure 4.4.5.1

The above code using mongoose module library uses `findOne()` methods to find the user name and email in the database against the message coming in the `req.body.username`. If it fails it sends back the proper message in the header to inform the user of what information is wrong. Similarly the module `bcrypt.compare()` API compares the entered password with the password already present in the database and gives the result. Errors are shown to the user in the address bar.

```txt
http://localhost:3000/login?error=user_not_found
http://localhost:3000/login?error=email_not_found
http://localhost:3000/login?error=wrong_password
```

- When login procedure is completed, the `dashboard` page is rendered. A new template `dashboard.ejs` is created in a `views` folder.  Also, a new route is created under `route` folder named `dashboard.js` both contents are shown below. The contents of dashboad will change with some message and links.

```html
// dashboard.ejs

<%- include('layout/head.ejs'); %>
    <body>
        <%- include('layout/normalheader.ejs'); %>
            <body>
                <h1> Welcome to Application Dashboard!</h1>
                <%- include('layout/footer.ejs'); %>
            </body>
            </html>
```

```js
// dashboard route
var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/dashboard', function (req, res, next) {
    console.log('Entered in dashboard Router');
  res.render('dashboard', { title: 'Dashboard' });
});
module.exports = router;
```
#### Registering the user on online database 4.4.6

- The connection string in `.env` file is changed to point to the online database name `vruser` and a new user is added. By using `console.log()`, it is printed to console to make sure that local machine register the environment variable. The log below, third line shows it is successfully loaded into the machine environment. The message `connected to online Mongo database is shown`.


```bash
LOCALAPPDATA: 'C:\\Users\\books\\AppData\\Local',
LOGONSERVER: '\\\\SAS-DESKTOP',
MONGODB_URI:    <--- Variable inserted in local environment
'mongodb+srv://sulli:21March@usersname0.r4rl0vd.mongodb.net/vrusers?retryWrites=true&w=majority&appName=usersName0',
NODE: 'C:\\Program Files\\nodejs\\node.exe',
NODE_EXE: 'C:\\Program Files\\nodejs\\\\node.exe',
NPM_CLI_JS: 'C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js',
npm_command: 'run-script',
XML_CATALOG_FILES: 'file:///W:/miniconda3/etc/xml/catalog',
_CONDA_EXE: 'W:\\miniconda3\\Scripts\\conda.exe',
_CONDA_ROOT: 'W:\\miniconda3'

Connected to  online MongoDB database!
```

- Following figure shows the newly added data to online database. This time in name field `Sulaiman` is entered. The project name online was also changed to `VERBAL-REASONING` separately.

![online-data-added-02.jpg](images\\docs\\online-data-added-02.jpg)</br>
*figure-28*

Upon successful registration it is redirected to login page where the same credentials were entered and it takes us to dashboard page.

> Note: In this phase both local and online database were shown to be connected by using different environment string saved in `.env` file. The user were registered locally and online and the dashboard page is successfully rendered.


<dev class="page"/>


### Implementing Design Part-B:  4.5

When user successfully logged in, it is redirected to `Dashboard` page. This page will take him to either to practice the test or or to take a test. It only contains tow links to take the user to other pages. Its design and details are not given below and can be see in online repo. The following state digram shows the simple scenario.

```mermaid
stateDiagram 
    [*] --> AppStarted
    AppStarted --> LoginOrRegister
    LoginOrRegister --> Dashboard
    Dashboard --> Practice
    Dashboard --> Test
```

The dashboard page initially job is to provide the option to the user, whihc would take him to the practice or play ground page.
  
![playground-01.jpg](images\\docs\\playground-01.jpg)<br>
*figure-29*

- The above diagram shows different phases of the practice page which is labelled as `Playground`.
- It consist of UI design consisting of `header` as in other previous pages and a footer. There is a dropdown menu present in the header which shwos the list of topic available to practice. Just below the header a messge is shown with some instructions about the lesson being displayed.
-  When a topic is chosen by the user , it adds four buttons to display the lessons, and when lesson is pressed accordion is used to display different questions which are scrollable and presents the choice to the user.
-  At the bottom there is an answer button which tells if the user has been successful or not.

#### Designing and implementing the practice page 4.5.1

- Besides header and footer it has four main parts followed by a link to navigate to the previous page. 

```html
//practice.ejs
<main id="accordion-page" class="container">
<div class="accordion-topic"><label for="topic" id="topicid">Choose The topic</label></div>
<!-- pladce holder for message -->
<div class="row">
    <div class="mx-auto">
        <div class="d-flex align-items-center justify-content-evenly">
 <!-- create four button to show the lessons -->          
        </div>
    </div>
</div>
```

1. The `<div>` with unique id `topicid` and a class `.d-flex` is used in the script to get the handle to these placeholders and UI elements are injected dynamically. The reason being that the contents of the heading and number of lessons and the message shown on the message bar depands upon the data which is independent of the `view`.

2. To structure questions and answers, an accordion compoent of the bootstrap is used. To avoid being written 10 times manually, an `ejs for` loop is used. Similarly, all these items are to be injected with data, requirign to have a need of referening to them. Their unique `ids` are also build using `.ejs`. For example `<Label for="q-<%= i %>-optional">` builds `Label` elements attributes dynamically using a for loop. It is shown below.

```html
//practice.ejs
<div class="accordion mt-4">
<% for (let i=1; i <=10; i++) { %>
<div class="accordion-item" id="accord-item-<%= i %>">
  <h2 class="accordion-header" id="heading<%= i %>">
<button id="q-<%= i %>" class="accordion-button" type="button" data-bs-toggle="collapse"
  data-bs-target="#collapse<%= i %>" aria-expanded="true"
  aria-controls="collapse<%= i %>">
 <!-- placeholder for question -->
  Questions
</button>
 <div id="collapse<%= i %>" class="accordion-collapse collapse"
      aria-labelledby="heading<%= i %>">
<div class="accordion-body">
<ul class="list-group">
<li class="list-group-item"><input type="checkbox" id="q-<%= i %>-option1">
<label for="q-<%= i %>-option1">words<!-- placeholder --></label>
</li>
<li class="list-group-item"><input type="checkbox" id="q-<%= i %>-option2">
<label for="q-<%= i %>-option2">words<!-- placeholder --></label>
</li>
<li class="list-group-item"><input type="checkbox" id="q-<%= i %>-option3">
<label for="q-<%= i %>-option3">words<!-- placeholder --></label>
</li>
<li class="list-group-item"><input type="checkbox" id="q-<%= i %>-option4">
<label for="q-<%= i %>-option4">words<!-- placeholder --></label>
</li>
<li class="list-group-item"><input type="checkbox" id="q-<%= i %>-option5">
<label for="q-<%= i %>-option5">words<!-- placeholder --></label>
</li>
</ul>
<button id="answer-q-<%= i %>-btn" class="btn btn-primary mt-3"
   onclick="checkAnswer('q-<%= i %>')">Answer</button>
</div>
  </div>
 </div>
 <% } %>
</div>
```

To use above structure and be filled with values two scripts are used and mentioned at the bottom of this file as shown below. The button element `button` givign every button a unique id is also attached with `onClick` event handler which is used in the scripts.

```html
//practice.ejs
<!-- Link to JavaScript file -->
<script src="../javascripts/topicScript.jst"></script>
<script src="../javascripts/practiceScript.js"></script>
</html>
```

The above scripts named `topicScript.js` and `practiceScript.js` are created under `public/javascripts/` directory. The first script reads a file named `topics.json` and traverse through the data and upon finding a unique object `topics.lessons.title` reads its value and fills in a list of tipics which is made dynamically on the fly for the user to select the topics. A dropdown item is shown below. This script `topicScript.js` is used by both pages `practice.ejs and test.ejs`. When creating some buttons, it checks to see call is coming from which page.

![topic-dropdown-01.jpg](images\\docs\\topic-dropdown-01.jpg)<br>
*figure-*

 When `practice.ejs` template is loaded number of  ineractions happens which are indicated by the numbers in sequenceDiagram shown below. DOM functions used are described in [Appendix-D](#appendix-d)

> Note: Interaction number 4 shows that the page gets a reference to a unique id named `topicList`, it is present in a header section of this practice page. Then the dynamically generated list is attached to the header.
 
```mermaid
sequenceDiagram
    autonumber
    participant DOM
    participant topicScript.js
    participant topics.json

    DOM->>topicScript.js: Call populateDropdown()
    topicScript.js->>topicScript.js: Clear dropdown list
    topicScript.js->>topics.json: Fetch topics data from JSON file
    topicScript.js->>topicScript.js: Get reference from header `id=topicList` for the list to be attached
    topicScript.js->>topicScript.js: Parse JSON objct 
    loop for each topic
        topicScript.js->>topicScript.js: Create topic list item
    end
    topicScript.js->>topicScript.js: Attach event handlers to all topics
    topicScript.js->>topicScript.js: Implements handling, attach unique handlers
    topicScript.js->>topicScript.js: Populate dropdown list
    topicScript.js->> DOM: Render dropdown list
```

To fetch the data from a JSON file, code used is shown below with comments. It uses a promise and returns the read JSON object from the file. If there is an error, returns only an empty array `[]`.

```js
//topicScript.JS 
// Function to fetch topics data from JSON file
function fetchTopicsData() {
  // Start fetching the JSON file
  return fetch('./data/topics.json')
    // Parse the response as JSON
    .then(response => response.json())
    // Catch and handle any errors
    .catch(error => {
      // Log the error to the console
      console.error('Error fetching JSON:', error);
      // Return an object with an empty topics array
      return { topics: [] };
    });
}
```

When user clciks on topic item, it goes through number of activities and either create four buttons for the lessons or if does not find the lesson says not implmented. The code snippets from `topicScript.js` shown below. All code for the app can be downloaded from the online repository.

```js
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
```

The script `topicScript.js` also makes three calls to outside files to be handled. The reason being that this script is shared between `practiceScript.js` and `testScript.js`. These two scripts provides functionality for two different purpose, one is used in practicing while the other is used in taking a test. The third call which is handled by `recordtestScript.js` is the one which records all the activity when test button is pressed.

```mermaid
sequenceDiagram
    autonumber
    participant DOM
    participant topicScript.js
    participant practiceScript.js
    participant testScript.js
    participant recordtestScript.js

    DOM->>topicScript.js: User clicks on topic item
    topicScript.js->>topicScript.js: Call createLessonButtons(topic, title)
    alt hasFourLessons true
        alt isTestPage false
            topicScript.js-->>topicScript.js: Call createLessonButtonsForFourLessons(topic, title)
            loop for each lesson
              topicScript.js->>topicScript.js: Call handleButtonClick(topic,title,lesson.lesson_number)
              topicScript.js->>practiceScript.js: Call populateQuestion(topic,title,lessonNumber)
            end
        else isTestPage true
            topicScript.js-->>topicScript.js: Call createGenerateQuestionButton(topic,title) & Call createStartTestButton(topic,title)
            topicScript.js->>testScript.js: Call handleGenerateQuestions(topic,title)
            topicScript.js->>recordtestScript.js: Call handleStartTestButtonClick(topic,title)
        end
    else
        topicScript.js-->>topicScript.js: Create a button, say not implemented
    end
    topicScript.js-->>DOM: Render buttons to DOM
```

The above sequenceDiagram shows that `topicScript.js` invoke three functions present in another file called `practiceScript.js, testScript.js and recordtestScript.js`. These files handle and implement these fucntions as needed. 

##### Populating questions from the topic.json file 4.5.1.1

To understand the process of populating the questions and the code used to populate each question, the data  arrangement in `topic.json` kept in JSON format is shown below.

```json
//topic.json
{
    "topics": [
        {
            "id": "_1",
            "title": "Opposites",
            "description": "Choose  the most opposites words in meaning",
            "lessons": [
                {
                    "lesson_number": 1,
                    "questions": [
                        {
                            "id": "q-1",
                            "words": [
                                "ability",
                                "capable",
                                "inability",
                                "liability",
                                "real"
                            ],
                            "answer": [
                                "ability",
                                "inability"
                            ]
```

There are ten different topics, each topic title is denoted by the field `title` or `Key:value` pair. The `Opposites` being the first topic. The topic `Opposites` has four lessons, every lesson accessed as `topics.lessons.lesson_number` by traversing from the top to reach a particualre item.
  
Similarly every lesson_number has 10 unique questions kept in an array. And each question has two arrays one for `words` and one for the correct answer as `asnwer`.

> Note: Not only accordion component being a place holder is drawn dynamically first by using `.ejs` template but now it is being populated dynamically when the call comes to get this job done to `practiceScript.js`.

When a user clicks on the topic say `Opposites` from the dropdown list.

![topic-dropdown-02.jpg](images\\docs\\topic-dropdown-02.jpg)<br>

Four buttons gets created on the fly, as each topic has four lessons.

![topic-dropdown-03.jpg](images\\docs\\topic-dropdown-03.jpg)<br>

Thoubh the buttons to generate the lessons have been created but the accordion is empty as shown in figure below.

![localhost-13.jpg](images\\docs\\localhost-13.jpg)

And when from these lessons, user clicks on any lesson, say `Lesson-1` indicated by a button, then all the questions present in that particulare lessons are populated in the accordion using a `ForEach` loop applied on array object as shown in code snippet given below.

```js
//practiceScript.js
let  topics = {}; // to hold the reference to the data object
let lessonName;  // to hold the lesson name being passed
let lessonNumber; // to hold the lesson number
let correctAnswer = []; // to hold answer given in data or file
let selectedLabels = []; // to hold user selection

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
```

What is done first is that for the clickedLesson, its data is referenced using `const clickedLessonData = topic.lessons[clickedLesson - 1];`. To get to first lesson we need to choose `topic.lessons[0]` that is the first elment of the array `lesson[0]`. As the argument `clickedLesson` represents the `lesson_number`. And to get to the first lesson being number `1` is represented by the index zero in an array, this substraction is done `clickedLesson-1`.

Then by iterating all the questions present in clicked lesson, the data is read and populated in the accordion. The tric used to access to the right place holder is to use the correct `question.id` from the data and constructing checkboxId using a loop. Once it is constructed, the code `checkbox.nextElementSibling.textContent = words[i];` does the assignment of the words present in an array `words`.

When all the questions are populated, user can start to do the activity, for example in topic one being `opposites`, it is asked to selected two most opposites words. The anser can be checked promptly by clicking the anser button as a succes or failure sound and the color of the answer button gets triggered. The rest of the code for `practiceScript.js` is shown below.


```js
//practice.js
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
getSelectedLabels()
const isCorrect = compareArrays(correctAnswer, selectedLabels);
const answerButton = document.getElementById("answer-" + questionId + "-btn")
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
// End of file.
```

#### Desigining and implementing the test page 4.5.2

- There is no change in practice and test page except when the script `topicScript.js` finds out that the call is coming from the `test.ejs` template, two buttons are drawn one to generate the questions and the other one is to start the test.
- When taking a test 20 questions are  presented instead of 10 and when Answer button is pressed no indicatin is given the choice being right or wrong.

- To make the test interesting shuffling is done in the following manner:
    1. All four lessons are shuffled first so if the were in the order of `1,2,3 and 4` they are present in a different random order.
    2. Then every lesson having 10 questions is dealth with and all questions present in each lesson are shuffled.
    3. A pool is created and all questions are saved. The idea is that the question generator should generate radom questions from the total available questions.

- Since we have four lessons for each topic and each lesson has 10 question. Total questions available to the generator functions are `40` where duplicate keys are present. For example, each lesson has first question being represented as `id:q-1` woud be repeated four times so are others.
- Out of fourty questions only 20 unique questions are chosen. It is also made sure that one questins which has been picked up randomly does not get to be chosen again.

##### Shuffling lessons 4.5.2.1

1. When `Generate Questions` button is pressed, the call comes to `testScript.js` fucntion `handleGenerateQuestions` shown below. 

```js
//testScript.js
function handleGenerateQuestions(topic, title) {
    try {
        const randomQuestions = generateRandomQuestions(topic, title);
        populateQuestions(randomQuestions);
        questionsGenereated = true;
        const buttonTemp = document.getElementById('generate-questions-btn');
        buttonTemp.disabled = true;
        disableAnswerButtons();
    } catch (error) {
        console.log('error in populating questions');
    }
}
```

2. This question in turns call `generateRandomQuestions` shown below.

```js
// Define a function to generate questions for a given topic ID
function generateRandomQuestions(topicData, title) {
try { var lessons = [];
 if (topicData.title === title) {
     lessons = topicData.lessons;
 }
 // First shuffle the array 
 const shuffledLessons = shuffleArray(lessons);
 const selectedQuestions = [];
 // Iterate over each lesson
 for (let i = 0; i < shuffledLessons.length; i++) {
     const lesson = shuffledLessons[i];
     const shuffledQuestions = shuffleArray(lesson.questions);
     // Add first 10 questions to the selectedQuestions array
     const selected = shuffledQuestions.slice(0, 10);
     selected.forEach(question => {
         if (!selectedQuestions.some(q => q.answer === question.answer)) {
             selectedQuestions.push(question);
         }else {
                 console.log('duplicate tried to be pushed!!1');
         }
     });
     console.log(selectedQuestions);
 }
 // Ensure there are only 20 unique questions
 const uniqueQuestions = [];
 for (let i = 0; i < selectedQuestions.length; i++) {
     const question = selectedQuestions[i];
     if (!uniqueQuestions.some(q => q.answer === question.answer)) {
         uniqueQuestions.push(question);
     }else{
         console.log(' Same question is being pushed !!!');
     }
     if (uniqueQuestions.length === 20) {
         console.log(uniqueQuestions);
         break; // Break the loop once we have 20 unique questions
     }
 }
 // Generate and return the questions
 const shuffledUniqueQuestions = shuffleArray(uniqueQuestions);
 console.log(uniqueQuestions);
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
```

Using developer mode and logging output following figures are acquired to show what hapens during questions being generated.

![test-01.jpg](images\\docs\\test-01.jpg)<br>

The above shows that the lessons are present in memory as it is, when they were loaded form the JSON file, starting from `1-4`. Once they are shuffled, the state of the json object in memory is shown below.

![test-02.jpg](images\\docs\\test-02.jpg)<br>

The above shows that lessons have been shuffled. Next each lesson is taken and its questions are shuffled. Following figure shows the state before being shuffled and after shuffling.


##### Shuffling Questions present in each lesson 4.5.2.2

To hold the shuffled questions a local variable named `shuffledQuestions` is used in a for loop which runs four times, as only four lessons being present. The following figure shows the state before and after shuffling.

![test-04.jpg](images\\docs\\test-04.jpg)<br>

Next these questions are to be stored in a new array, so a global varibale `slectedQuestions[]` is used to hold these questions, a pool of all fourty questions is created where all questions are shuffled completely as shown in the figure below. They no longer belong to any unique lesson but by being having a uniqe `Key:value` format the array would contain `id:q-1` at least four times so are other questions id being repreated four times.

![test-05.jpg](images\\docs\\test-05.jpg)<br>


##### Selecting 20 unique question from the pool 4.5.2.3

Now only 20 questions are to be selected from the the pool, a local variable `uniqueQuestions[]` is decalred  and first 20 questions have been chosen.

> Note: The idea to pickup random questions is to have them suffled first and pick from the top of the stack. While picking up 20 questions it is also made sure that duplicate answer array having same contents is not present, which is not possible, as the data does not contain any answer that is repeated, but it is still checked.

Following shows 20 slected questions where each question with the same id is repeated twice by virtue of lessons sharing the `key:value` pair. The followign firgure also shows two questions of `id:q-4` having different words and answer.

![test-06.jpg](images\\docs\\test-06.jpg)<br>

##### Populating questions 4.5.2.4

When questions are populated, they are populated as present in `uniqueQuestions` array shown above. The very first element presnet in this array at `index[0]` is `q-4` which is going to be populated in the first accordion where this question is represented as `q-1`. According to the figure above the second and thrid accordion would have `q-2 and q-9` contents present in coming accordion being represented as `Question-2 and Question-3` labels.

| Accordion Questions order | UniqueQuestions Array order |
| ------------------------- | --------------------------- |
| Question-1                | q-4                         |
| Question-2                | q-2                         |
| Question-3                | q-9                         |


The above concern comes when we have to find the correct answer as previously when in practice page, questions were not shuffled and order was same so by comparing the first accordion to the first key in an array and comparing the answer have no issues. Similarly in test page 20 questions are presented, these questions contains two different sets of questions answer represented by the same `key:value` pair. To address this issue two global variables were dcalard and used `qustionsMap, questionIdMapping`. The array `questionMap` holds the set of array represented by the same `id:value`.

![test-08.jpg](images\\docs\\test-08.jpg)<br>

To populate the questions into accordion following function is used.

```js
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
```

The above function runs a `forEach` loop and before inserting the values makes sure it has the records of which question was pointing to which Id originally. When `questionIdMapping` is printed following map is seen.

![test-09.jpg](images\\docs\\test-09.jpg)<br>













---

### 








---

<div class='page'/>

---
## Implementing Designing Part-C: Making the Web App a PWA

To make a web application a [progressive web app](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps), following steps are taken.

1. Providing the code that register the service worker file.
2. Creating the service worker file named `sw.js`.
3. Writing the contents of the service worker file, so that it knows what to be done.
4. Creating a `manifest.json` file for a service worker to understand the assets of the application.
5. Informing the header of the home page about the `manifest.json` file so that it knows that this app is to be used as PWA.








### Writing the logic to attach the application with the service worker


A new file `register-service-worker.js` is created under the `public/javascripts` directory. The contents are shown below.

```js
// register-service-worker.js

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => {
                console.log('Service worker registered:', reg);
            })
            .catch(err => {
                console.error('Service worker registration failed:', err);
            });
    });
}
```

The above code register the running application using an arrow [`=>`](#appendix-c) function expression with a service worker file `sw.js`. It is not yet present and can be noticed. When the application or express framework is started from the terminal the activities are shown there, the application  now tries to find this file  `sw.js` file in the root of the website since it is not present, express frame work rightly displays the `404` message as shown in the following figure.

![sw-01jpg](images\\docs\\sw-01.jpg)<br>
*figure-30*


A new file name `sw.js` is created under `public` directory. This file sits in the middle and by sitting here, in between the server and client side it comes between them and handles request going to network and decides what can be served from the cache instead of going to server.

### Creating a service worker : Service worker vs client/server architecture

So far in this  application the request and response between the client and server was happening directly. From now on this file takes the responsibility to serve the pages so that it can take help form cache mechanisms. In this file, instructions are written about what pages are to be cached, and what service to be provided and how to provide them. As it is said earlier that in order to use the cache mechanisms, the code is to be written in `sw.js` file. But recently [Google](https://developer.chrome.com/docs/workbox/))  has provided a service called `workbox-sw.js` which can be used in conjunction with the local service worker easing the burden to write all the logic.  Following graph shows this scenario.

```mermaid
graph TD;
    subgraph Browser
        A(Client Application) -- Register --> B[Local Service Worker]
        B[Local Service Worker] -- Register --> C[Google workbox]
    end

    subgraph Service Worker
        B -- Fetch & Cache Assets --> C[Google Workbox]
        C -- Serve Cached Assets --> A
        A -- Intercept Requests --> B
        B -- Proxy Requests --> C
        B -- No Cache Found --> D[Server]
    end

    subgraph Server
        D -- Serve Data --> A
    end
```

Following are the contents of `sw.js` in the beginning

```js
// sw.js

importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );
  // Precache manifest
const precacheManifest = [
    //  icon paths to be cached
    '/icon/icon-192x192.png',
    '/icon/icon-512x512.png',
  ]; 
  // Set up Workbox to precache assets
  workbox.precaching.precacheAndRoute(precacheManifest);
  // Cache icon requests
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image' &&
      request.url.includes('/icon/'),
    new workbox.strategies.CacheFirst()
  );

// other routes to be used by the service worker.
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'script' || request.destination === 'style',
    new workbox.strategies.StaleWhileRevalidate()
  );
  workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.NetworkFirst()
  );
  workbox.routing.registerRoute(
    ({ url }) => url.pathname === '/',
    new workbox.strategies.CacheFirst()
);
workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/login'),
    new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/signup'),
    new workbox.strategies.CacheFirst()
);
```
There are three mains job done above after importing the `Workbox` from `workbox-dcn`

1. First create an array of precaching assets, where icons to be cached are defined, then get the `workbox` service to use it.
2. Tell `Workbox` about all the routes used in the application. They are one by one declared above.
3. `Workbox` is informed what caching mechanisms to use. There are many ways a `Workbox` service can provide caching mechanisms. The above uses `CacheFirst(), NetworkFirst(), StaleWhileRevalidate()`. They do the job as they say by the name of their functions. Having inject the service worker, express frame work notification changes from `404` to `200` indicating the success in finding the file in root of the application.

Though the details of the assests to be cached are provided in the service worker yet this informatin is noth enough. Service worker needs to know where are these assest present in the local folder, along with other deatils required by the PWA. All these information are kept in a file named `manifest.json`.


### Creating and attaching manifest file

A `manifest.json` file is added at the root of the client site which is `public` directory to inform the application that a `manifest.json` file is to be used in this  application. This is known as `attaching manifest to PWA`. To do so its entry is made in the head section of the home page .The following snippets shows its contents.

```html
// layout/head.ejs 

<!doctype html>
<html lang="en">
<head>
  <title><%= title %></title>
  </title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <!-- Link to manifest.json -->
  <link rel="manifest" href="/manifest.json">
  <!-- Link to local Bootstrap CSS -->
  <link rel="stylesheet" href="/bootstrap-5.0.2/css/bootstrap.min.css">
  <!-- Link to Custom CSS -->
  <link rel="stylesheet" href="/stylesheets/styles.css">
  <!-- bootstrap icons cdn link -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
```
  
The  contents fo manifest.json are  shown below.

```json
{
    "name": "Verbal Reasoning for 11+",
    "short_name": "11+",
    "lang": "en",
    "description": "it is made in express node js frame work and acts as a  Progressive Web App too",
    "icons": [
        {
            "src": "/icon/icon-192x192.png",
            "type": "image/png",
            "sizes": "192x192",
            "purpose": "maskable"
        },
        {
            "src": "/icon/favicon.ico",
            "type": "image/ico",
            "sizes": "16x16"
        },
        {
            "src": "/icon/icon-512x512.png",
            "type": "image/png",
            "sizes": "512x512"
        },
        {
            "src": "/icon/icon-144x144.png",
            "type": "image/png",
            "sizes": "144x144",
            "purpose": "maskable"
        }
    ],
    "start_url": "/",
    "id": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#3367D6",
    "orientation": "portrait"
}
```

Starting from the `manifest.json`, it takes the application long and short name along with other details of icons which are needed for wide and small hand-held devices. Some other details including the entry point of the application and suitable background and foreground color information are provided. The service worker `sw.js` reads these instructions for the application to make it work with cache and in offline mode and it makes the PWA  installable as well. To make the the application pass WPA criteria, SEO (search engine optimisation ) information are added in the `head` section of the home page, along with some other detials.

```html
<!-- For SEO -->
  <meta name="author" content="Sulaiman Ahmed Sayyed">
  <meta name="description" content="11+ app for verbal reasoning to help students prepare for this exam">
```

> Note: The contents of the `sw.js` and `manifest.json` are much longer than the code snippets shown above. They can be seen in online repository.

### Watching Chrome behaviour after registering the service worker

- When application is started in a browser using developer mode, number of things can be observed. Following shows the message along with `workbox` service responding to different requests.

![sw-02.jpg](images\\docs\\sw-02.jpg)<br>
*figure-32*

[//]: # ( Complete your work here ! )


#### Passing Google service requirements for PWA

1. When the application is tested in `incognito mode`
  
---


## What is Progressive Web Application?

- The second part of the design Part-A is successfully implemented and tested, our app is now installable, workable offline and has passed the Google Lighthouse utility test.
- it is time to start Part-B of the design that is to deal with the POST request and meets the requirement.
  
---

### How to clone this repository on local machine 

---


<div class="page"/>

### References

#### Compiled list of 11+ Websites

1. [Exam papers plus:](https://exampapersplus.co.uk/)
2. [11 Plus Swot:](https://www.11plusswot.co.uk/)
3. [11 Plus Leap:](https://www.11plusleap.co.uk/)
4. [11 Plus Lifeline:](https://www.11pluslifeline.com/)
5. [Exam Ninja:](https://www.examninja.co.uk/)
6. [11 Plus Exams:](https://www.11plus-exams.co.uk/)
7. [11 Plus Tutors Academy:](https://www.11plustutorslondon.co.uk/)
8. [Schofield & Sims:](https://www.schofieldandsims.co.uk/)

[^1]: 11+ Personal Tutor, Verbal Reasoning by Frances Down of Nelson Thrones

<div class="page"/>

---

### Appendix-A  

#### Vscode extension used

1. [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
2. [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
3. [Markdwon All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
4. [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf)
5. [MarkdwonLint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
6. [Vscode-pdf](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf)
7. [Monokai Pro](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode)

---

### Appendix-B

- Git aliases
  
```github
co = checkout
cob = checkout -b
coo = !git fetch && git checkout
br = branch
brd = branch -d
brd = branch -D
merged = branch --merged
st = status
aa = add -A .
cm = commit -m
aacm = !git add -A . && git commit -m
cp = cherry-pick
amend = commit --amend -m
dev = !git checkout dev && git pull origin dev
staging = !git checkout staging && git pull origin staging
master = !git checkout master && git pull origin
po = push origin
pod = push origin dev
pos = push origin staging
pom = push origin master
pomain = push origin main
rename = branch -m master main
poh = push origin HEAD
pogm = !git push origin gh-pages && git checkout master && git pull origin master && git reba>
pomg = !git push origin master && git checkout gh-pages && git pull origin gh-pages && git re>
plo = pull origin
plod = pull origin dev
plos = pull origin staging
plom = pull origin master
ploh = pull origin HEAD
unstage = reset --soft HEAD^
gr = grep -Ii
ls = log --pretty=format:'%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]' --decorate
ll = log --pretty=format:'%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]' --decorate --numstat
f = '!git ls-files | grep -i'
rso = remote show origin
lss = log --stat --summary
lol = log --oneline
logg = log --graph --decorate --oneline --all
```


---
### Appendix-C

1. **Arrow function expression**: is a short form of conventional function expression used in javascript.

  ```js

  ```
2. **Asynchronous function**: It is a part of `promised` based APIs, it works in conjuntion with `await` returning a new proimse. As the name suggest this function is designed to be used in places where a thread is not to be blocked because some job has not been finished, so the code inside the function can wait.


---

## Appendix-D

| DOM Method                  | Description                                                        |
|-----------------------------|--------------------------------------------------------------------|
| `document.getElementById()` | Retrieves an element from the document with specified ID attribute. |
| `document.createElement()`  | Creates a new HTML element specified by the `tagName` parameter.   |
| `element.addEventListener()`| Registers an event listener on the specified element,vent occurs. |
| `element.appendChild()`     | Appends a node as the last child of a specified parent node.       |
| `element.innerHTML`         | Gets or sets the HTML or XML markup contained within the element.  |
