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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {

      bars[j].classList.add("compare");
      bars[j + 1].classList.add("compare");

      await sleep(200);

      const height1 = parseInt(bars[j].style.height);
      const height2 = parseInt(bars[j + 1].style.height);

      if (height1 > height2) {
        bars[j].classList.add("swap");
        bars[j + 1].classList.add("swap");

        await sleep(200);

        bars[j].style.height = `${height2}px`;
        bars[j + 1].style.height = `${height1}px`;
      }

      bars[j].classList.remove("compare", "swap");
      bars[j + 1].classList.remove("compare", "swap");
    }

    bars[bars.length - i - 1].classList.add("sorted");
  }
}

const bubbleBtn = document.getElementById("bubble");

bubbleBtn.addEventListener("click", () => {
  bubbleSort();
});
