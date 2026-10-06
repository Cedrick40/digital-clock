// Get the clock element from the page
const clock = document.getElementById("clock");

// Add a leading zero to numbers below 10 (7 becomes "07")
function addZero(number) {
  return String(number).padStart(2, "0");
}

// Read the current time and show it on the page
function updateClock() {
  const now = new Date();

  const hours = addZero(now.getHours());
  const minutes = addZero(now.getMinutes());
  const seconds = addZero(now.getSeconds());

  clock.textContent = hours + ":" + minutes + ":" + seconds;
}

// Show the time straight away, then update every 1000 ms (1 second)
updateClock();
setInterval(updateClock, 1000);