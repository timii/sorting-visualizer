import { pushStepIntoArray } from "@/utils/util";

export function quicksort(arr: number[]): number[][] {
    let algorithmSteps: number[][] = [];
    let firstRun = true;
    sorting(arr);

    function sorting(array: number[], left = 0, right = arr.length - 1) {
        if (left >= right) {
            return;
        }

        if (firstRun) {
            algorithmSteps = [];
            algorithmSteps = pushStepIntoArray(algorithmSteps, [...array]);
            firstRun = false;
        }

        let pivotIndex = partition(array, left, right);
        sorting(array, left, pivotIndex - 1);
        sorting(array, pivotIndex + 1, right);
    }

    function partition(arr: number[], left: number, right: number) {
        let pivotValue = arr[right];
        let partitionIndex = left;

        for (let i = left; i < right; i++) {
            if (arr[i] < pivotValue) {
                swap(arr, i, partitionIndex);
                algorithmSteps = pushStepIntoArray(algorithmSteps, [...arr]);
                partitionIndex++;
            }
        }

        swap(arr, right, partitionIndex);
        algorithmSteps = pushStepIntoArray(algorithmSteps, [...arr]);
        return partitionIndex;
    }

    function swap(arr: number[], first: number, second: number) {
        let temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }

    return algorithmSteps;
}
