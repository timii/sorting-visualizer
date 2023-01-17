export function bubblesort(arr: number[]): number[][] {
    console.log("bubblesort -> arr:", arr);
    let arrayOfSteps = [];
    if (arr && arr.length > 2) {
        arrayOfSteps.push([...arr]);
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 1; j < arr.length; j++) {
                console.log("arr[i]:", arr[i], "arr[j]:", arr[j]);
                if (arr[j] > arr[i]) {
                    let temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    console.log("bigger -> arr:", arr);
                    arrayOfSteps.push([...arr]);
                }
            }
        }
    } else {
        return [arr];
    }
    return arrayOfSteps;
    // return [2, 21, 2, 4, 2, 4, 6, 4, 7, 4, 3];
}
