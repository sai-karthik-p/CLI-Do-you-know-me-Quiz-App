var readlineSync = require('readline-sync');
var chalk = require('chalk');

var questionIndex = 0;
var score = 0;

const questionArray = [
  {
    question:`Where do I live?
    a. Bangalore
    b. Hyderabad
    c. Chennai
    d. Mumbai\n`,
    answer: "b",
  },
  {
    question:`What are my hobbies?
    a. Singing
    b. Playing Piano
    c. Making  Music
    d. All of the above\n`,
    answer: "d",
  },
  {
    question:`What am I currently learning? 
    a. Java
    b. Full Stack Web Development
    c. Data Science\n`,
    answer: "b",
  },
  {
    question:`Who is my favorite superhero?
    a. Ironman
    b. Batman
    c. Superman
    d. Spiderman\n`,
    answer: "b",
  },
  {
    question:`Do I believe in Ghosts?
    a. Yes
    b. No\n`,
    answer: "b",
  },
  {
    question:`Have I ever seen a UFO??
    a. No
    b. Yes\n`,
    answer: "a",
  },
  {
    question:`What part of my daily routine do I enjoy the most?
    a. Morning Coffee
    b. Meditation
    c. Workout
    d. Evening Walk\n`,
    answer: "a",
  },
  {
    question:`What’s my favorite music genre?
    a. Pop
    b. Blues
    c. Rock
    d. EDM\n`,
    answer: "a",
  },
  {
    question:`Do I like Pineapple pizza?
    a. Yes
    b. No\n`,
    answer: "b",
  },
  {
    question:` Am I a Cat person or a Dog person?
    a. Cat Person
    b. Dog Person
    c. Both\n`,
    answer: "c",
  },
];

const leaderBoard = [
  {
    name: "Satya",
    highscore: 9
  },
  {
    name: "Sanju",
    highscore: 8
  },
  {
    name: "Rajan",
    highscore: 6
  }
];

function validateAnswer(currentQuestionIndex, answer) {
  if(answer == questionArray[currentQuestionIndex].answer) {
    console.log(chalk.bgGreen.black("\n Correct Answer! \n"));
    score++;
  }
  else {
    console.log(chalk.bgRed("\n Wrong Answer! \n"));
  }
  console.log(chalk.blueBright("Your score is: ") + chalk.white.bgBlue.bold(" ") + chalk.white.bgBlue.bold(score) + chalk.white.bgBlue.bold(" "));
  console.log("\n-----\n");

}

function playQuiz() {
  username = readlineSync.question("Please enter your name: \n")
  console.log("\n" + chalk.blueBright("Hello ") + chalk.white.bgBlue.bold(username) + chalk.blueBright("! Welcome to the DO YOU KNOW ME Quiz! \n"));
  for(questionIndex=0; questionIndex<questionArray.length; questionIndex++) {
    // console.log(questionArray[questionIndex].question);
    var userAnswer = readlineSync.question(questionArray[questionIndex].question);
    validateAnswer(questionIndex, userAnswer.toLowerCase())
  }
}

function displayLeaderboard() {
  console.log("\n" + chalk.white.bgBlue.bold("HIGH SCORE LEADERBOARD:"));
  console.log(chalk.black.bgGreen.bold("Rank |    Name    | Highscore"));
  for(let i=0; i<leaderBoard.length; i++) {
    console.log((i+1) + ".       " + leaderBoard[i].name + "         " + leaderBoard[i].highscore);
  }
  if(score>6) {
    console.log("\n-----\n\n" + chalk.white.bgBlue.bold("Congrats! You've beaten the highscore!! \n\n") + chalk.black.bgGreen.bold("Feel free to send me the screenshot of your score to get featured on the Leaderboard!") + "\n\n-----\n");
  }
}

playQuiz();

displayLeaderboard()
    
if(questionIndex==questionArray.length) {
  console.log("\nThanks for playing!");
}