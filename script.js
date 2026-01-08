import { bubbleSort } from "./algorithms/bubbleSort.js";
import { selectionSort } from "./algorithms/selectionSort.js";
import { insertionSort } from "./algorithms/insertionSort.js";

// DOM elements
const visualizer = document.querySelector(".visualizer");
const generateBtn = document.getElementById("generate");
const bubbleBtn = document.getElementById("bubble");
const selectionBtn = document.getElementById("selection");
const insertionBtn = document.getElementById("insertion");

// Data
let array = [];
const ARRAY_SIZE = 25;
const MIN_VALUE = 10;
const MAX_VALUE = 300;
const SPEED = 80;

// Utilities
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

    if (index === i || index === j) {
      bar.classList.add(state);
    }

    if (sortedIndex !== -1 && index >= sortedIndex) {
      bar.classList.add("sorted");
    }

    visualizer.appendChild(bar);
  });
}

// Generate array
function generateArray() {
  array = [];
  for (let i = 0; i < ARRAY_SIZE; i++) {
    array.push(randomInt(MIN_VALUE, MAX_VALUE));
  }
  renderArray(array);
}

// Disable / enable buttons (ONLY ONCE)
function disableControls(disabled) {
  generateBtn.disabled = disabled;
  bubbleBtn.disabled = disabled;
  selectionBtn.disabled = disabled;
  insertionBtn.disabled = disabled;
}

// Event listeners
generateBtn.addEventListener("click", generateArray);

bubbleBtn.addEventListener("click", async () => {
  disableControls(true);
  await bubbleSort(array, renderArray, sleep);
  disableControls(false);
});

selectionBtn.addEventListener("click", async () => {
  disableControls(true);
  await selectionSort(array, renderArray, sleep);
  disableControls(false);
});

insertionBtn.addEventListener("click", async () => {
  disableControls(true);
  await insertionSort(array, renderArray, sleep);
  disableControls(false);
});

// Initial render
generateArray();
