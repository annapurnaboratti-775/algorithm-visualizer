import { bubbleSort } from "./algorithms/bubbleSort.js";

const visualizer = document.querySelector(".visualizer");
const generateBtn = document.getElementById("generate");
const bubbleBtn = document.getElementById("bubble");

let array = [];
const ARRAY_SIZE = 25;
const MIN_VALUE = 10;
const MAX_VALUE = 300;
const SPEED = 80;

// Utility
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms = SPEED) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Rendering
function renderArray(arr, i = null, j = null, state = "", sortedIndex = -1) {
  visualizer.innerHTML = "";

  arr.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;

    if (index === i || index === j) bar.classList.add(state);
    if (index >= sortedIndex && sortedIndex !== -1)
      bar.classList.add("sorted");

    visualizer.appendChild(bar);
  });
}

// Generate
function generateArray() {
  array = [];
  for (let i = 0; i < ARRAY_SIZE; i++) {
    array.push(randomInt(MIN_VALUE, MAX_VALUE));
  }
  renderArray(array);
}

// Control locking
function disableControls(disabled) {
  generateBtn.disabled = disabled;
  bubbleBtn.disabled = disabled;
}

// Events
generateBtn.addEventListener("click", generateArray);

bubbleBtn.addEventListener("click", async () => {
  disableControls(true);
  await bubbleSort(array, renderArray, sleep);
  disableControls(false);
});

// Initial
generateArray();
