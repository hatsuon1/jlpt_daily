console.log("Loaded");

const form = document.querySelector("#guess-form"); // form contains the submit
const responseInput = document.querySelector("#response");

/*
Runs whenever the form is submitted, however it happens:
pressing Enter in the text box, or clicking the submit button.
(A button inside a form with no type attribute also defaults to submit.)
*/
form.addEventListener("submit", function (event) {
    //variables
    counter = 0

    // 1. stop the page from reloading
    event.preventDefault();
    // 2. log "submitted" to the console
    console.log("submitted");
    // 3. get the value from the page that is printed out todays

    // 4. get user input
    const userGuess = responseInput.value;
    // 5. compare what is on the page with what is in user input

        //5.1 if true then return a popup box

    // 6. if not correct then we tell them incorrect

        // 6.1 if they input the same answer then don't count it and tell them "already guessed" with shaking text
    
});

