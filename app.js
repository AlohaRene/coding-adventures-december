document.addEventListener('DOMContentLoaded', function() {
  const countdownElement = document.getElementById('countdown');
  const startCountdownButton = document.getElementById('startCountdownButton');
  let count = 10;
  
  startCountdownButton.addEventListener('click', function() {
    const countdownInterval = setInterval(function() {
      countdownElement.textContent = count;
      
      // Change button color every second
      startCountdownButton.style.backgroundColor = getRandomColor();

      count--;
      if (count < 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = 'Countdown Complete!';
      }
    }, 1000);
  });

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
