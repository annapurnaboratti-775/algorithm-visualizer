export async function selectionSort(arr, renderArray, sleep) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;

    // Highlight current position
    renderArray(arr, i, minIndex, "comparing", i);
    await sleep();

    for (let j = i + 1; j < n; j++) {
      // Show scanning comparison
      renderArray(arr, j, minIndex, "comparing", i);
      await sleep();

      if (arr[j] < arr[minIndex]) {
        minIndex = j;

        // New minimum found
        renderArray(arr, j, minIndex, "swapping", i);
        await sleep();
      }
    }

    // Swap only ONCE per pass
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

      renderArray(arr, i, minIndex, "swapping", i);
      await sleep();
    }
  }

  // Final render (fully sorted)
  renderArray(arr, null, null, "", 0);
}
