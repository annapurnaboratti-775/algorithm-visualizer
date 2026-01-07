const arrayContainer = document.querySelector(".array-container");
const generateBtn = document.getElementById("generate");

let array = [];

function generateArray(size = 30) {
  array = [];
  arrayContainer.innerHTML = "";

  for (let i = 0; i < size; i++) {
    const value = Math.floor(Math.random() * 100) + 10;
    array.push(value);

    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 2}px`;

    arrayContainer.appendChild(bar);
  }
}

generateBtn.addEventListener("click", () => {
  generateArray();
});
