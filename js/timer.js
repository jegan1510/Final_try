const birthday = new Date("2003-07-07T00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - birthday;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor(diff / 1000);

  document.getElementById("years").innerText = years;
  document.getElementById("weeks").innerText = weeks;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();
