import { pushStepIntoArray } from "@/utils/util";

export function mergesort(arr: number[]) {
    let algorithmSteps: number[][] = [];
    let firstRun = true;
    split(arr);

    function split(array: number[]) {
        // Create copy of start array where we sort in
        let sorted = Array.from(array);
        let n = sorted.length;
        let buffer = new Array(n);

        if (array.length < 2) {
            return [array];
        }

        if (firstRun) {
            algorithmSteps = [];
            algorithmSteps = pushStepIntoArray(algorithmSteps, [...array]);
            firstRun = false;
        }

        for (let size = 1; size < n; size *= 2) {
            for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
                // Split array into two sub arrays
                let left = leftStart;
                let right = Math.min(left + size, n);
                let leftLimit = right;
                let rightLimit = Math.min(right + size, n);

                // Merge the sub arrays
                merge(left, right, leftLimit, rightLimit, sorted, buffer);
            }

            // Swap the sorted sub array and merge them
            let temp = sorted;
            sorted = buffer;
            buffer = temp;

            // Add sorted sub array to array of all sorting steps
            algorithmSteps = pushStepIntoArray(algorithmSteps, [...sorted]);
        }
        algorithmSteps = pushStepIntoArray(algorithmSteps, [...sorted]);
        return sorted;
    }

    function merge(
        left: number,
        right: number,
        leftLimit: number,
        rightLimit: number,
        sorted: number[],
        buffer: number[]
    ) {
        let i = left;
        // Compare the two sub arrays and merge them in the sorted order
        while (left < leftLimit && right < rightLimit) {
            if (sorted[left] <= sorted[right]) {
                buffer[i++] = sorted[left++];
            } else {
                buffer[i++] = sorted[right++];
            }
        }
        // If there are elements in the left sub arrray then add it to the result
        while (left < leftLimit) {
            buffer[i++] = sorted[left++];
        }
        // If there are elements in the right sub array then add it to the result
        while (right < rightLimit) {
            buffer[i++] = sorted[right++];
        }
    }

    return algorithmSteps;
}
