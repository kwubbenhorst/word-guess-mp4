var timeE1 = document.get

 
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = ("You have " + secondsLeft)

        if (secondsLeft === 0) {
            answer === "javascript"
        
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "  ";



}

setTime();