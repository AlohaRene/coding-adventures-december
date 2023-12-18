document.addEventListener('DOMContentLoaded', function() {
  const countdownElementOne = document.getElementById('countdownOne');
  const startCountdownButtonOne = document.getElementById('startCountdownButtonOne');
  let countOne = 21;

  startCountdownButtonOne.addEventListener('click', function() {
    const countdownIntervalOne = setInterval(function() {
      countdownElementOne.textContent = countOne;

      // Change button color every second
      startCountdownButtonOne.style.backgroundColor = getRandomColor();

      countOne--;
      if (countOne < 0) {
        clearInterval(countdownIntervalOne);
        countdownElementOne.textContent = 'Countdown Complete!';
      }
    }, 1000);
  });

  const countdownElementTwo = document.getElementById('countdownTwo');
  const startCountdownButtonTwo = document.getElementById('startCountdownButtonTwo');
  let countTwo = 20;

  startCountdownButtonTwo.addEventListener('click', function() {
    const countdownIntervalTwo = setInterval(function() {
      countdownElementTwo.textContent = countTwo;

      // Change button color every second
      startCountdownButtonTwo.style.backgroundColor = getRandomColor();

      countTwo--;
      if (countTwo < 0) {
        clearInterval(countdownIntervalTwo);
        countdownElementTwo.textContent = 'Countdown Complete!';
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
