`use strict`;
// =================Variable Declaration==============//
var myName = "yes";
var myState = "no";
var myCollege = "yes";
var myColor = "no";
var myFood = "no";
// ========================Functions===================== //
userTypeFunction();

function userTypeFunction() {
  var userType = prompt("Are you a User or a Client");
  console.log('userType :', userType);
  var typeOfUser = userType.toLowerCase();
  if (typeOfUser === "user")
  {
    userPromptFunction();
  }
  else if (typeOfUser === "client")
  {
    return;
  }
  else
  {
    userTypeFunction();
  }
}

function userPromptFunction() {
  var userGuessMyName = prompt("Is my name Blake?");
  console.log('userGuessMyName :', userGuessMyName);
  var nameGuess = userGuessMyName.toLowerCase();
  if (nameGuess == myName)
  {
    alert("You were correct. Nice to meet you!");
  }
  else
  {
    alert("Actually my name is Blake. Nice to meet you!");
  }

  var userGuessMyState = prompt("Was I born in Washington State?");
  console.log('userGuessMyState :', userGuessMyState);
  var stateGuess = userGuessMyState.toLowerCase();
  if (stateGuess == myState)
  {
    alert("Good Job! I was actually born in California.");
  }
  else
  {
    alert("You were incorrect, I was born in California.");
  }

  var userGuessMyCollege = prompt("Did I attend college?");
  console.log('userGuessMyCollege :', userGuessMyCollege);
  var collegeGuess = userGuessMyCollege.toLowerCase();
  if (collegeGuess == myCollege)
  {
    alert("Correct! I attended a community college.");
  }
  else
  {
    alert("Actually, I attended a community college.");
  }

  var userGuessMyColor = prompt("Is my favorite color green?");
  console.log('userGuessMyColor :', userGuessMyColor);
  var colorGuess = userGuessMyColor.toLowerCase();
  if (colorGuess == myColor)
  {
    alert("Nice work, my favorite color is blue!");
  }
  else
  {
    alert("You were incorrect, my favorite color is blue.");
  }

  var userGuessMyFood = prompt("Is my favorite food pizza?");
  console.log('userGuessMyFood :', userGuessMyFood);
  var foodGuess = userGuessMyFood.toLowerCase();
  if (foodGuess == myFood)
  {
    alert("Good Job! My favorite food is chicky nuggies.");
  }
  else
  {
    alert("Actually, my favorite food is chicky nuggies.");
  }

  var userName = prompt("What is your name?");
  console.log('userName :', userName);
  alert("Welcome " + userName + ". Please enjoy the site and have a lovely day.");
}