//make a quiz

var readlineSync = require("readline-sync");

var scoreLevelOne = 0;
var scoreLevelTwo = 0;
var scoreLevelThree = 0;
var qualifyingRoundOneScore = 2;
var qualifyingRoundTwoScore = 2;
var qualifyingRoundThreeScore = 2;
var questionBankLevelOne = [
  {
    question: "How many hours are there in a day? ",
    answer: "24",
  },
  {
    question: "What is the National Flower of India? ",
    answer: "Lotus",
  },
];
var questionBankLevelTwo = [
  {
    question: "What is the name of the biggest planet in our solar system? ",
    answer: "Jupiter",
  },
  {
    question: "Which is the smallest planet in our solar system? ",
    answer: "Mercury",
  },
];
var questionBankLevelThree = [
  {
    question: "Who invented the Telephone? ",
    answer: "Alexander Graham Bell",
  },
  {
    question: "Who successfully built and flew the world’s first Aeroplane? ",
    answer: "The Wright Brothers",
  },
];

function checkRightOrWrong(question, answer, round) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right!");
    if (round === 1) {
      scoreLevelOne++;
    } else if (round === 2) {
      scoreLevelTwo++;
    } else if (round === 3) {
      scoreLevelThree++;
    }
  } else {
    console.log("Wrong!");
  }
  if (round === 1) {
    console.log(`Current Score: ${scoreLevelOne}`);
  } else if (round === 2) {
    console.log(`Current Score: ${scoreLevelTwo}`);
  } else if (round === 3) {
    console.log(`Current Score: ${scoreLevelThree}`);
  }
  console.log("-------------------------");
}

function playLevelOne() {
  console.log("Level One");
  console.log('--------------');  

  for (var i of questionBankLevelOne) {
    checkRightOrWrong(i.question, i.answer, 1);
  }
  if (scoreLevelOne === qualifyingRoundOneScore) {
    successMessage();
    playLevelTwo();
  } else {
    failureMessage();
  }
}
function playLevelTwo() {
  console.log('--------------');  
  console.log("Level Two");
  console.log('--------------');  

  for (var i of questionBankLevelTwo) {
    checkRightOrWrong(i.question, i.answer, 2);
  }
  if (scoreLevelTwo === qualifyingRoundTwoScore) {
    successMessage();
    playLevelThree();
  } else {
    failureMessage();
  }
}
function playLevelThree() {
  console.log('--------------');  
  console.log('Round Three');
  console.log('--------------');  

  for (var i of questionBankLevelThree) {
    checkRightOrWrong(i.question, i.answer, 3);
  }
  if (scoreLevelThree === qualifyingRoundThreeScore) {
    finalMessage();
  } else {
    failureMessage();
  }
}
function finalMessage() {
  console.log("Yayyy! You have sucessfully cleared all three rounds.");
}
function successMessage() {
  console.log("You have sucessfully cleared this round.");
}
function failureMessage() {
  console.log("You did not clear this round. Better luck next time!");
}
playLevelOne();
