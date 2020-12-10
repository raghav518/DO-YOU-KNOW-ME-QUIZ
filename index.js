var readlineSync = require('readline-sync');
var userName = readlineSync.question("what's your name? ")
console.log("Hello, " + userName + ", welcome to DO YOU KNOW RAGHAV?")

var score = 0
var highscore = [{
  name: "raghav",
  score: 6

}, {
  name: "aayush",
  score: 5
}]

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("you are right!")
    score = score + 1

  } else {
    console.log("you are wrong!")
  }
  console.log("current score:" + score)
  console.log("-----------")


}

var questions = [{
  question: "where do i study? ",
  answer: "MIT"
}, {
  question: "which is my favourite movie series? ",
  answer: "breaking bad"

}, {
  question: "what am i most passionate for? ",
  answer: "football"
}, {
  question: "which football team do i support? ",
  answer: "Barcelona"



}, {
  question: "where do i stay? ",
  answer: "ahmedabad"
}, {
  question: "which language am i currently learning? ",
  answer: "javascript"
}, {
  question: "who is my mentor? ",
  answer: "tanay pratap"
}]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("yay! you scored: " + score)



