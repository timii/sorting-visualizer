let running = false;
let sortArray: number[] = [];

export function setArray(arr: number[]) {
    console.log("arr:", arr, "sortArray before:", sortArray);
    sortArray = arr;
    console.log("sortArray after:", sortArray);
}

export function setRunning(value: boolean) {
    console.log("setRunning -> value:", value);
    running = value;
    console.log("running after:", running);
}

export function quicksort(arr?: number[]): number[] {
    console.log("quicksort -> arr:", arr, arr ? arr : [1, 2, 3]);
    return arr ? arr : [1, 2, 3];
}
