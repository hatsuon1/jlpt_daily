//functions:
// form.addEventListener();
//
"use strict"; // "modern way" of javascript
console.log("Loaded");

// Where we get the answers from
const form = document.querySelector("#guess-form"); // form contains the submit
const responseInput = document.querySelector("#response");

//variables
let todaysWord = null; // holds today's word of the day based on time
let count = 0; // how many times the user got it wrong

fetch(...)
  .then(res => res.json())
  .then(words => {
    todaysWord = words[0]; // later: pick by date
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
    // 5. compare what is on the page with what is in user input

        //5.1 if true then return a popup box

    // 6. if not correct then we tell them incorrect
    
        // 6.1 if they input the same answer then don't count it and tell them "already guessed" with shaking text
    
});

