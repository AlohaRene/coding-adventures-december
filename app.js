// script.js
document.addEventListener('DOMContentLoaded', function() {
  // This code will execute after the DOM (HTML) has been fully loaded
  
  // Example: Changing text when a button is clicked
  const changeTextButton = document.getElementById('changeTextButton');
  const textToChange = document.getElementById('textToChange');

  changeTextButton.addEventListener('click', function() {
    textToChange.textContent = 'Text Changed!';
  });
});