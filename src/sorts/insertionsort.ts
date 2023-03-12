import { pushStepIntoArray } from "@/utils/util";

export function insertionsort(arr: number[]): number[][] {
    let algorithmSteps: number[][] = [];
    algorithmSteps = pushStepIntoArray(algorithmSteps, [...arr]);

    // Loop through array starting from the second element because the first element counts as sorted
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        // Reverse through the already sorted part of the array and get index for the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Move current element into correct position in sorted array
        arr[j + 1] = current;
        algorithmSteps = pushStepIntoArray(algorithmSteps, [...arr]);
    }

    return algorithmSteps;
}
