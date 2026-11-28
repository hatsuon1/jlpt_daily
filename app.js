//functions:
// form.addEventListener();
// TODO
// design the game
// randmize output based on date
//
"use strict"; // "modern way" of javascript
console.log("Loaded");

// Where we get the answers from
const form = document.querySelector("#guess-form"); // form contains the submit
const responseInput = document.querySelector("#response");

//variables
let todaysWord = null; // holds today's word of the day based on time
let count = 0; // how many times the user got it wrong

// a way to get data from .json files
fetch("/jlpt_daily/data/json/words/n5.json") // fetch resolves with res
  .then(res => res.json()) // returns res.json()
  .then(words => {
    todaysWord = words[0]; // later: pick by date
    console.log(words[0]); // <<< FOR DEBUGGING PURPOSES >>>
    document.getElementById("change-text").textContent = todaysWord.FIELD;
  });

//expermentation
const form2 = document.querySelector("#guess-form");

/*
Runs whenever the form is submitted, however it happens:
pressing Enter in the text box, or clicking the submit button.
(A button inside a form with no type attribute also defaults to submit.)
*/
form.addEventListener("submit", function (event) {
    //variables
    let counter = 0;

    // 1. stop the page from reloading
    event.preventDefault();
    // 2. log "submitted" to the console
    console.log("submitted");
    // 3. get the value from the page that is printed out todays
    //making a json file so it can be edited by app.js
    
    // 4. get user input
    const userGuess = responseInput.value;
    const cleaned = userGuess.trim();

    // 5. compare what is on the page with what is in user input

    if(cleaned === "今日"){
      console.log("correct");
    }
    else{
      console.log("incorrect");
    }

    // 6. if not correct then we tell them incorrect
    
        // 6.1 if they input the same answer then don't count it and tell them "already guessed" with shaking text
    
});

