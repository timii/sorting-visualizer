import { createArray, isArraySorted, pushStepIntoArray } from "@/utils/util";

export function bogosort(arr: number[]): number[][] {
    let algorithmSteps: number[][] = [];

    algorithmSteps = [];
    algorithmSteps = pushStepIntoArray(algorithmSteps, [...arr]);

    sorting(arr);

    function sorting(arr: number[]) {
        let i = 1;
        while (!isArraySorted(arr)) {
            arr = createArray(arr.length);
            algorithmSteps = pushStepIntoArray(algorithmSteps, [...arr]);
        }
    }

    return algorithmSteps;
}
