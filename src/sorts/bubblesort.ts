import { pushStepIntoArray } from "@/utils/util";

export function bubblesort(arr: number[]): number[][] {
    console.log("bubblesort -> arr:", arr.toString());
    let arrayOfSteps = [];
    if (arr && arr.length > 2) {
        arrayOfSteps.push([...arr]);
        for (let i = 1; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    arrayOfSteps = pushStepIntoArray(arrayOfSteps, [...arr]);
                }
            }
        }
    } else {
        return [arr];
    }
    return arrayOfSteps;
}
