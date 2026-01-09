# Algorithm Visualizer

A web-based Algorithm Visualizer built with **HTML, CSS, and JavaScript** to demonstrate how classic sorting algorithms work step by step through animations.

This project focuses on **understanding algorithms visually**, not just implementing them.

---

##  Features

- Dynamic array generation
- Animated visualization of sorting algorithms
- Color-coded states for better clarity
- Clean separation of algorithm logic and UI
- Responsive, minimal UI

---

##  Algorithms Implemented

### 1. Bubble Sort
- Repeatedly compares adjacent elements
- Swaps if they are in the wrong order
- Largest elements move to the end

**Time Complexity**
- Best: O(n)
- Average: O(n²)
- Worst: O(n²)

**Space Complexity**
- O(1)

---

### 2. Selection Sort
- Selects the minimum element from the unsorted part
- Places it at the beginning
- One swap per iteration

**Time Complexity**
- Best / Average / Worst: O(n²)

**Space Complexity**
- O(1)

---

### 3. Insertion Sort
- Builds the sorted array one element at a time
- Shifts elements instead of swapping
- Efficient for small or nearly sorted arrays

**Time Complexity**
- Best: O(n)
- Average: O(n²)
- Worst: O(n²)

**Space Complexity**
- O(1)

---

##  Color Legend

- **Blue** → Comparing elements  
- **Red** → Swapping / shifting key  
- **Green** → Sorted portion  

---

##  Project Structure
algorithm-visualizer/

│

├── index.html

├── style.css

├── script.js

├── algorithms/

│   ├── bubbleSort.js

│   ├── selectionSort.js

│   └── insertionSort.js

└── README.md

