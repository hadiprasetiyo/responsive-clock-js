function updateClock() {
  const waktu = new Date();
  const jamElement = document.getElementById('jam');
  let hours = waktu.getHours().toString().padStart(2, '0');
  let minutes = waktu.getMinutes().toString().padStart(2, '0');
  let seconds = waktu.getSeconds().toString().padStart(2, '0');

  jamElement.innerHTML = `<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span>`;
}

function startClock() {
  setInterval(updateClock, 1000);
}

startClock();