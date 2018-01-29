// Questions and answers Array
var questions = [
  {
    question: 'What does doctype in HTML do?',
    answers: [
      { answer: 'Tells the browser how to render the HTML markup', value: true },
      { answer: 'Loads all references to external JavaScript files', value: false },
      { answer: 'Adds CSS styles to the HTML page', value: false },
      { answer: "It doesn't do anything it's just there as a comment to other developers", value: false }
    ]
  },
  {
    question: 'What is NOT an HTML5 element?',
    answers: [
      { answer: 'block', value: true },
      { answer: 'audio', value: false },
      { answer: 'canvas', value: false },
      { answer: 'section', value: false }
    ]
  },
  {
    question: 'How can you make a script run asynchronous?',
    answers: [
      { answer: 'script async', value: true },
      { answer: 'asynchronous', value: false },
      { answer: 'async script', value: false },
      { answer: 'script asynchronous', value: false }
    ]
  },
  {
    question: 'What is the difference between classes and IDs in CSS?',
    answers: [
      { answer: 'IDs can only be used once in the HTML', value: true },
      { answer: 'IDs can be accessed by JavaScript', value: false },
      { answer: 'Classes are used on children elements', value: false },
      { answer: "Classes can't be added to the body element", value: false }
    ]
  },
  {
    question: "What does 'reset' in CSS mean?",
    answers: [
      { answer: 'Resets the default browser styling', value: true },
      { answer: 'Normalizes styles accross all browsers', value: false },
      { answer: 'Removes inline CSS styles', value: false },
      { answer: 'Start the project over', value: false }
    ]
  },
  {
    question: 'What does z-index do?',
    answers: [
      { answer: 'Controls the vertical stacking order of elements that overlap', value: true },
      { answer: 'Moves elements off screen', value: false },
      { answer: 'Hides elements from the screen', value: false },
      { answer: 'Controls the horizontal stacking order of elements that overlap', value: false }
    ]
  },
  {
    question: 'What is the box model?',
    answers: [
      { answer: 'All HTML elements can be considered as boxes', value: true },
      { answer: 'A way of stacking HTML elements', value: false },
      { answer: 'A way of styling HTML elements', value: false },
      { answer: 'Creates a way to position the browser grid', value: false }
    ]
  }
];

// Global variables
var game;

// Start the game when that start button is clicked
$('body').on('click', '.start-btn', function(e) {
  event.preventDefault();
  console.log(questions[0].question);
  game =
    "<p class='timer text-center'>Time Remaining:<br><span class='time'>30</span></p><p class='question text-center'>" +
    questions[0].question +
    '</p>';

  $('.main').html(game);
});

// Show questions and answers options

// Show that time remaining

// When answer was correct or wrong, show some picture

// Finish the game and show: correct answers, incorrect answers and, unanswered

// Show button start over
