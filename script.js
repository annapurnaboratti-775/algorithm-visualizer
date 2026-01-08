// ===== DOM ELEMENTS =====
const arrayContainer = document.querySelector(".array-container");
const generateBtn = document.getElementById("generate");

// ===== GLOBAL ARRAY =====
let array = [];

// ===== UTILITY =====
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ===== ARRAY GENERATOR =====
function generateArray(size = 30) {
  console.log("Generate clicked"); // DEBUG LINE

  arrayContainer.innerHTML = "";
  array = [];

  for (let i = 0; i < size; i++) {
    const value = Math.floor(Math.random() * 100) + 10;
    array.push(value);

    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 2}px`;

    arrayContainer.appendChild(bar);
  }
}

// ===== EVENT LISTENER =====
generateBtn.addEventListener("click", generateArray);
