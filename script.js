const visualizer = document.querySelector(".visualizer");
const generateBtn = document.getElementById("generate");

let array = [];
const ARRAY_SIZE = 25;
const MIN_VALUE = 10;
const MAX_VALUE = 300;

// Utility: generate random integer
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Clear existing bars
function clearVisualizer() {
  visualizer.innerHTML = "";
}

// Create bars from array
function renderArray(arr) {
  clearVisualizer();

  arr.forEach((value) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
    visualizer.appendChild(bar);
  });
}

// Generate new array
function generateArray() {
  array = [];
  for (let i = 0; i < ARRAY_SIZE; i++) {
    array.push(randomInt(MIN_VALUE, MAX_VALUE));
  }
  renderArray(array);
}

// Event listener
generateBtn.addEventListener("click", generateArray);

// Initial load
generateArray();
