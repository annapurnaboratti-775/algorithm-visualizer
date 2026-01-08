export async function bubbleSort(array, render, delay) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      render(array, j, j + 1, "compare");
      await delay();

      if (array[j] > array[j + 1]) {
        render(array, j, j + 1, "swap");
        await delay();

        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        render(array);
        await delay();
      }
    }
    render(array, null, null, "sorted", n - i - 1);
  }

  render(array, null, null, "sorted");
}
