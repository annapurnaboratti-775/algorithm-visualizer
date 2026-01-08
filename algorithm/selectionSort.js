export async function selectionSort(array, render, delay) {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      render(array, minIndex, j, "compare", i);
      await delay();

      if (array[j] < array[minIndex]) {
        minIndex = j;
        render(array, minIndex, j, "swap", i);
        await delay();
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      render(array, i, minIndex, "swap", i + 1);
      await delay();
    }
  }

  render(array, null, null, "sorted");
}
