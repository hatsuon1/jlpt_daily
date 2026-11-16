console.log("Loaded");

const form = document.querySelector("#guess-form");
const responseInput = document.querySelector("#response");

form.addEventListener("submit", function (event) {
    // 1. stop the page from reloading
    event.preventDefault();
    // 2. log "submitted" to the console
    console.log("submitted");

    const userGuess = responseInput.value;

    console.log(userGuess)
});

