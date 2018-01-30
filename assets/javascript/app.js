// Questions and answers Array
var questions = [
  {
    question: 'What does doctype in HTML do?',
    answers: [
      { answer: 'A. Tells the browser how to render the HTML markup', value: true },
      { answer: 'B. Loads all references to external JavaScript files', value: false },
      { answer: 'C. Adds CSS styles to the HTML page', value: false },
      { answer: "D. It doesn't do anything it's just there as a comment to other developers", value: false }
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

var images = {
  right: [
    "<img class='center-block gif' src='https://media.giphy.com/media/l0K4m0mzkJDAIdhHW/giphy.gif'>",
    "<img class='center-block gif' src='https://media.giphy.com/media/WgMulghJVjLry/giphy.gif'>",
    "<img class='center-block gif' src='https://media.giphy.com/media/l0MYJnJQ4EiYLxvQ4/giphy.gif'>",
    "<img class='center-block gif' src='https://media.giphy.com/media/wFOC9RazP97i0/giphy.gif'>",
    "<img class='center-block gif' src='https://media.giphy.com/media/l46Cd4qNHmnDI8Hks/giphy.gif'>",
    "<img class='center-block gif' src='https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif'>",
    "<img class='center-block gif' src='https://media.giphy.com/media/1rf4V8kgTLvva/giphy.gif'>"
  ],
  wrong: [
    "<img class='center-block gif' src='https://media.giphy.com/media/MhVdjqeKACHmM/giphy.gif'>",
    "<img class='center-block gif' src='https://media.giphy.com/media/26xBwYrIXjIlDjr7G/giphy.gif'>",
    "<img class='center-block gif' src='https://media.giphy.com/media/GmlDMFfcNy7tu/giphy.gif'>",
    "<img class='center-block gif' src='https://media.giphy.com/media/3oz8xLd9DJq2l2VFtu/giphy.gif'>",
    "<img class='center-block gif' src='https://media.giphy.com/media/NERY7uUYtur4Y/giphy.gif'>",
    "<img class='center-block gif' src='https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif'>",
    "<img class='center-block gif' src='https://media.giphy.com/media/gnE4FFhtFoLKM/giphy.gif'>"
  ]
};

// Global variables
var game;
var counter = 0;
var clock;
var timer = 30;
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;

$(document).ready(function() {
  // Start the game when that start button is clicked
  $('.answers').css('visibility', 'hidden');
  $('body').on('click', '.start-btn', function(e) {
    event.preventDefault();
    startGame();
    $('.answers').css('visibility', 'visible');
  });

  $('body').on('click', '.answer', function() {
    // console.log($(this));
    chosenAnswer = $(this).text();
    var answerCounter = questions[counter].answers;

    var answer = $('.answer');
    for (var i = 0; i < answerCounter.length; i++) {
      if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === true) {
        clearInterval(clock);
        $(this).attr('class', 'right-answer answer');
      } else if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === false) {
        clearInterval(clock);
        $(this).attr('class', 'wrong-answer answer');
      }
    }
  });

  function rightAnswer() {
    correctCounter++;
    $('.time').html(timer);
    $('.score').text('Right answers: ' + correctCounter);

    $('.questions-page').html(
      '<p class="right text-center col-sm-12">You got it!<br>' + images.right[counter] + '</p>'
    );
    setTimeout(questionCounter, 4000);
  }

  function wrongAnswer() {
    incorrectCounter++;
    $('.time').html(timer);
    $('.score').text('Wrong answers: ' + incorrectCounter);

    $('.questions-page').html(
      '<p class="right text-center col-sm-12">Wrong answer!<br>' + images.wrong[counter] + '</p>'
    );
    setTimeout(questionCounter, 4000);
  }

  function unanswered() {
    unanswered++;
    game =
      '<p class="text-center">Time out!</p>' +
      '<img class="center-block gif col-sm-12" src="https://media.giphy.com/media/dePSX0ft8tlJe/giphy.gif">';
    $('.main').html(game);
  }

  // Start the game
  function startGame() {
    $('.start-page').css('display', 'none');
    $('.questions-page').css('visibility', 'visible');
    $('.timer').html('<p>Time remaining: <span class="time">30</span></p>');

    $('.question').html(questions[counter].question);
    var showingAnswers =
      '<p class="answer first-answer">' +
      questions[counter].answers[0].answer +
      '</p><p class="answer">' +
      questions[counter].answers[1].answer +
      '</p><p class="answer">' +
      questions[counter].answers[2].answer +
      '</p><p class="answer">' +
      questions[counter].answers[3].answer +
      '</p>';

    $('.answers').html(showingAnswers);

    timerHolder();
  }

  function questionCounter() {
    if (counter < 7) {
      counter++;
      startGame();
      timer = 30;
      timerHolder();
    }
  }

  // Timer function
  function timerHolder() {
    clearInterval(clock);
    clock = setInterval(seconds, 1000);
    function seconds() {
      if (timer > 0) {
        timer--;
      } else if (timer === 0) {
        clearInterval(clock);
        unanswered();
      }
      $('.time').html(timer);
    }
  }
});
