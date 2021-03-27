// Movie Mania
// Importing Packages

var input = require('readline-sync')
var chalk = require('chalk')

// declaring variable

var score = 0;
var output = console.log;

// welcoming

var uName = input.question(chalk.blue("Enter Your Name to Play the Game : "));
output("\n");

output(chalk.magentaBright("Welcome ")+uName+chalk.magentaBright(" to ")+ chalk.bgYellow("Movie ")+ chalk.bgRed("Mania\n"));

// function

function play(question,answer){
  var uAnswer = input.question(chalk.yellow(question));
  if(uAnswer.toUpperCase() === answer.toUpperCase()){
    score = score + 1;
  }else{
    score = score
  }
}

// Level one questions

var levelOneList = [
  {
    question : "In Which MCU movie Iron man had died: ",
    answer : "avengers endgame" 
  },
  {
    question : "Who Directed Inception: ",
    answer : "christopher nolan" 
  },
  {
    question : "Who is the Lead Actress in Titanic: ",
    answer : "kate winslet" 
  }
]

//  level two questions

var levelTwoList = [
  {
    question : "Which South Korean movie got Oscar in 2020: ",
    answer : "parasite" 
  },
  {
    question : "Which movie is the indian adaptation of 'fault in our star': ",
    answer : "dil bechara" 
  },
  {
    question : "Which Indian actress got featured in movie BAYWATCH: ",
    answer : "priyanka chopra" 
  }
]

// level three questions

var levelThreeList = [
  {
    question : "Jennifer Lawrence won Best Actress Academy awards for what 2012 romantic movie: ",
    answer : "silver linings playbook" 
  },
  {
    question : "Which is the highest grossing War movie of all the time: ",
    answer : "american sniper" 
  },
  {
    question : "In Which Marvel Movie Elon Musk has Cameo appearance: ",
    answer : "iron man 2" 
  }
]

// iterating over three levels questions

output(chalk.green.bold("You are in Level one now\n"))

for(i=0;i<levelOneList.length;i++){
  var currentQuestion = levelOneList[i];
  play(currentQuestion.question,currentQuestion.answer)
  output("\n");
}

output(chalk.cyanBright("Your Score after Level one is: ")+score);


if(score === 3){
  output(chalk.green.bold("\nYou are in Level two now\n"))
  for(j=0;j<levelTwoList.length;j++){
    var currentQuestion = levelTwoList[j];
    play(currentQuestion.question,currentQuestion.answer)
    output("\n");
  }
  output(chalk.cyanBright("Your Score after Level two is: "+score))
}

if(score === 6){
  output(chalk.green.bold("\nYou are in Level three now\n"))
  for(k=0;k<levelThreeList.length;k++){
    var currentQuestion = levelThreeList[k];
    play(currentQuestion.question,currentQuestion.answer)
    output("\n");
  }
output(chalk.cyanBright("Your Score after Level three is: "+score+"\n"))

}
else{
  output(chalk.bgRed("\nYou don't qualify to play next level😐\n"))
}

if(score === 9){
  output(chalk.bgYellow.bold("\nHurray😀 , You Won!!! You had succesfully completed all the levels"))
}else{
  output(chalk.bgRed.bold("You lost😕 !!!You were not able to complete all the level,Better Luck next time\n"))
}

// thank you message.
output(chalk.bgYellow("\nthanks For Playing😊"))