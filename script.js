console.log("lol");

var countAnswers = 0;

function startQuiz() {
  firstQuestion();  
  secondQuestion();
  thirdQuestion();
  fourthQuestion();
  fifthQuestion();
  console.log(countAnswers);
  
  var resColor;
  if (countAnswers > 3) {
    resColor = "#00FF00";
  } else {
    resColor = "#FF6347";
  }

  var empty = "";
  var htmlString = "";
  var resultContainer = document.getElementById("results");
  resultContainer.style.color = resColor;
  htmlString = "<h2>" + "Score" + "</h2>" + "<h2>" + countAnswers + "/5" + "</h2>" + "</br>" + "<img src='img/nat-7.jpg' style='height: 220px;'>";
  resultContainer.innerHTML = empty;
  resultContainer.insertAdjacentHTML('beforeend', htmlString);
}

function firstQuestion() {
  var answerOne = prompt("What is the capital of Italy?");

  if (answerOne.toUpperCase() == "ROME") {
    console.log("correct");
    document.getElementById("btn-first").style.background = "#00FF00";
    countAnswers++;
  } else {
    console.log("wrong");
    document.getElementById("btn-first").style.background = "#FF6347";
  }
}

function secondQuestion() {
  var answerOne = prompt("Does Mexico have bigger population than Poland? (yes or no)!");

  if (answerOne.toUpperCase() == "YES") {
    console.log("correct");
    document.getElementById("btn-second").style.background = "#00FF00";
    countAnswers++;
  } else {
    console.log("wrong");
    document.getElementById("btn-second").style.background = "#FF6347";
  }
}

function thirdQuestion() {
  var answerOne = prompt("Which country has the biggest land mass?");

  if (answerOne.toUpperCase() == "RUSSIA") {
    console.log("correct");
    document.getElementById("btn-third").style.background = "#00FF00";
    countAnswers++;
  } else {
    console.log("wrong");
    document.getElementById("btn-third").style.background = "#FF6347";
  }
}

function fourthQuestion() {
  var answerOne = prompt("Who is the fastest human on the Earth?");

  var answerBolt = ["USAIN", "BOLT", "USAIN BOLT"];
  if (answerOne.toUpperCase() == answerBolt[0] || answerOne.toUpperCase() == answerBolt[1] || answerOne.toUpperCase() == answerBolt[2]) {
    console.log("correct");
    document.getElementById("btn-fourth").style.background = "#00FF00";
    countAnswers++;
  } else {
    console.log("wrong");
    document.getElementById("btn-fourth").style.background = "#FF6347";
  }
}

function fifthQuestion() {
  var answerOne = prompt("Who won the Champions League 2018");

  if (answerOne.toUpperCase() == "REAL MADRID") {
    console.log("correct");
    document.getElementById("btn-fifth").style.background = "#00FF00";
    countAnswers++;
  } else {
    console.log("wrong");
    document.getElementById("btn-fifth").style.background = "#FF6347";
  }
}

console.log(countAnswers);