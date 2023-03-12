import { pushStepIntoArray } from "@/utils/util";

export function heapsort(arr: number[]): number[][] {
    let algorithmSteps: number[][] = [];
    let firstRun = true;
    traverseArray(arr);

    function heapify(array: number[], length: number, i: number) {
        let largest = i;
        const left = i * 2 + 1;
        const right = left + 1;

        if (left < length && array[left] > array[largest]) {
            largest = left;
        }

        if (right < length && array[right] > array[largest]) {
            largest = right;
        }

        if (largest !== i) {
            swap(array, i, largest);
            algorithmSteps = pushStepIntoArray(algorithmSteps, [...array]);
            heapify(array, length, largest);
        }

        return array;
    }

    function traverseArray(array: number[]) {
        if (firstRun) {
            algorithmSteps = [];
            algorithmSteps = pushStepIntoArray(algorithmSteps, [...array]);
            firstRun = false;
        }

        const length = array.length;
        let i = Math.floor(length / 2 - 1);
        let k = length - 1;

        // Heapify first half of array
        while (i >= 0) {
            heapify(array, length, i);
            i--;
        }

        // Sort and heapify whole array
        while (k >= 0) {
            swap(array, 0, k);
            algorithmSteps = pushStepIntoArray(algorithmSteps, [...array]);
            heapify(array, k, 0);
            k--;
        }
    }

    function swap(array: number[], first: number, second: number) {
        let temp = array[first];
        array[first] = array[second];
        array[second] = temp;
    }

    return algorithmSteps;
}
