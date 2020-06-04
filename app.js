`use strict`;
// =================Variable Declaration==============//
var myName = "yes";
var myState = "no";
var myCollege = "yes";
var myColor = "no";
var myFood = "no";
var myNumber = '12';
var userScore = 0;
// ========================Array=========================//
var answersArray = ["platypus", "snow leopard", "hummingbird", "mongoose"];
// ========================Functions===================== // *Prompts
// userTypeFunction();

// function userTypeFunction() {
//   var userType = prompt("Are you a User or a Client");
//   console.log('userType :', userType);
//   var typeOfUser = userType.toLowerCase();
//   if (typeOfUser === "user")
//   {
//     userPromptFunction();
//   }
//   else if (typeOfUser === "client")
//   {
//     return;
//   }
//   else
//   {
//     userTypeFunction();
//   }
// }

// function userPromptFunction() {

nameOfUser();
userNameGuess();
userStateGuess();
userCollegeGuess();
userColorGuess();
userFoodGuess();

function userNameGuess()
{
  var userGuessMyName = prompt("Is my name Blake?");
  console.log('userGuessMyName :', userGuessMyName);
  var nameGuess = userGuessMyName.toLowerCase();
  if (nameGuess === myName || nameGuess === 'y')
  {
    alert("You were correct. Nice to meet you!");
    userScore += 100;
  }
  else
  {
    alert("Actually, my name is Blake. Nice to meet you!");
  }
}

function userStateGuess()
{
  var userGuessMyState = prompt("Was I born in Washington State?");
  console.log('userGuessMyState :', userGuessMyState);
  var stateGuess = userGuessMyState.toLowerCase();
  if (stateGuess === myState || stateGuess === 'n')
  {
    alert("Good Job! I was actually born in California.");
    userScore += 100;
  }
  else
  {
    alert("You were incorrect, I was born in California.");
  }
}

function userCollegeGuess()
{
  var userGuessMyCollege = prompt("Did I attend college?");
  console.log('userGuessMyCollege :', userGuessMyCollege);
  var collegeGuess = userGuessMyCollege.toLowerCase();
  if (collegeGuess === myCollege || collegeGuess === 'y')
  {
    alert("Correct! I attended a community college.");
    userScore += 100;
  }
  else
  {
    alert("Actually, I attended a community college.");
  }
}

function userColorGuess()
{
  var userGuessMyColor = prompt("Is my favorite color green?");
  console.log('userGuessMyColor :', userGuessMyColor);
  var colorGuess = userGuessMyColor.toLowerCase();
  if (colorGuess === myColor || colorGuess === 'n')
  {
    alert("Nice work, my favorite color is blue!");
    userScore += 100;
  }
  else
  {
    alert("You were incorrect, my favorite color is blue.");
  }
}

function userFoodGuess()
{
  var userGuessMyFood = prompt("Is my favorite food pizza?");
  console.log('userGuessMyFood :', userGuessMyFood);
  var foodGuess = userGuessMyFood.toLowerCase();
  if (foodGuess === myFood || foodGuess === 'n')
  {
    alert("Good Job! My favorite food is chicky nuggies.");
    userScore += 100;
  }
  else
  {
    alert("Actually, my favorite food is chicky nuggies.");
  }
}

function nameOfUser()
{
  var userName = prompt("What is your name?");
  console.log('userName :', userName);
  alert("Welcome " + userName + ". Please enjoy the site and have a lovely day.");
}

function userNumberGuess()
{
  var userGuessNumber = prompt("Let's guess a number! Pick a number from 1-100.");
  console.log('userGuessNumber :', userGuessNumber);
  for (var i = 1; i < 5; i++)
  {
    if (userGuessNumber < myNumber)
    {
      userGuessNumber = prompt("Try a little higher. Attempt: " + i + "/4");
    }
    else if (userGuessNumber > myNumber)
    {
      userGuessNumber = prompt("Try a lower number. Attempt: " + i + "/4");
    }
    else if (userGuessNumber === myNumber)
    {
      alert("Winner! Good work.");
      userScore += 100;
      break;
    }
    else
    {
      console.log("break");
      break;
    }
  }
}

function userAnimalGuess()
{
  var userGuessAnimal = prompt("Now try to guess an animal. There are 4 possible answers. Hint: One has wings, one is quick, one is amphibious, and one is cold.");
  console.log("userGuessAnimal :", userGuessAnimal);
  for (var a = 1; a < 7; a++)
  {
    // console.log(a);
    var n = answersArray.includes(userGuessAnimal);
    // console.log(n);
    if (n == true)
    {
      userScore += 100;
      alert("Wow! You guessed it! Your total score was: " + userScore);
      break;
    }
    else
    {
      userGuessAnimal = prompt("No match! Try again. Attempt: " + a + "/6");
      if (a == 6)
      {
        alert("Sorry, you ran out of guesses...Maybe next time .The correct answers were Platypus, Snow Leopard, Hummingbird, and Mongoose! Your total score was: " + userScore + "Great work!");
      }
      else
        console.log("Incorrect");
    }
  }
}
// }