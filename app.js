console.log("Loaded");

const form = document.querySelector("#guess-form"); // form contains the submit
const responseInput = document.querySelector("#response");

/*
Runs whenever the form is submitted, however it happens:
pressing Enter in the text box, or clicking the submit button.
(A button inside a form with no type attribute also defaults to submit.)
*/
form.addEventListener("submit", function (event) {
    // 1. stop the page from reloading
    event.preventDefault();
    // 2. log "submitted" to the console
    console.log("submitted");

    const userGuess = responseInput.value;

    console.log(userGuess)
});

