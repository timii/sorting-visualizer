import { pushStepIntoArray } from "@/utils/util";

export function selectionsort(arr: number[]): number[][] {
    let algorithmSteps: number[][] = [];
    algorithmSteps = pushStepIntoArray(algorithmSteps, [...arr]);

    for (let i = 0; i < arr.length; i++) {
        let min = i;

        // Loop through sub slice of array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // Swap smallest element from current array slice with the first element from the slice
        if (min !== i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;

            algorithmSteps = pushStepIntoArray(algorithmSteps, [...arr]);
        }
    }

    return algorithmSteps;
}
