// Select the button and message element
const button = document.getElementById("myBtn");
const message = document.getElementById("message");

// Add a click event listener to the button
button.addEventListener("click", function() {
  message.innerText = "You clicked the button!";
});