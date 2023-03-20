import { pushStepIntoArray } from "@/utils/util";

// Author: https://learnersbucket.com/tutorials/algorithms/heap-sort-algorithm-in-javascript/
export function heapsort(arr: number[]): number[][] {
  let algorithmSteps: number[][] = [];
  traverseArray(arr);

  function heapify(array: number[], length: number, i: number) {
    let largest = i;
    const left = i * 2 + 1; // Left child index
    const right = left + 1; // Right child index

    // If left child is smaller than root
    if (left < length && array[left] > array[largest]) {
      largest = left;
    }

    // If right child is smaller than smallest so far
    if (right < length && array[right] > array[largest]) {
      largest = right;
    }

    // If smallest is not the root element
    if (largest !== i) {
      swap(array, i, largest);
      algorithmSteps = pushStepIntoArray(algorithmSteps, [...array]);

      // Recursively heapify the sub-tree
      heapify(array, length, largest);
    }

    return array;
  }

  function traverseArray(array: number[]) {
    algorithmSteps = [];
    algorithmSteps = pushStepIntoArray(algorithmSteps, [...array]);
    const n = array.length;

    // Build heap (rearrange array)
    for (let i = Math.round(n / 2 - 1); i >= 0; i--) {
      heapify(array, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i >= 0; i--) {
      // Move current root to end
      swap(array, 0, i);
      algorithmSteps = pushStepIntoArray(algorithmSteps, [...array]);

      // Call max heapify on the reduced heap
      heapify(array, i, 0);
    }
  }

  function swap(array: number[], first: number, second: number) {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  }

  return algorithmSteps;
}
