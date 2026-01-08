export async function insertionSort(array, render, delay) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;

    // Highlight key
    render(array, i, null, "swap", i);
    await delay();

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      render(array, j, j + 1, "compare", i);
      await delay();
      j--;
    }

    array[j + 1] = key;
    render(array, null, null, "sorted", i + 1);
    await delay();
  }

  render(array, null, null, "sorted");
}
