function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let interval;
document.querySelector("#start").addEventListener("click", changeColor);
function changeColor() {
  if (!interval) {
    interval = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
}

document.querySelector("#stop").addEventListener("click", stopColor);
function stopColor() {
  clearInterval(interval);
  interval = null;
}
