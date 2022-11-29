// Function that capitalizes first letter of a given string
export function capitalizeFirstLetter(s: string): string {
    console.log("capitalizeFirstLetter -> s:", s);
    return s.charAt(0).toUpperCase() + s.slice(1);
}

// Function that creates an array of unique numbers up to n
export function createArray(n: number): number[] {
    console.log("createArrayOfUniqueNumbers -> n:", n);
    const arr: number[] = [];
    while (arr.length < n) {
        const num = Math.floor(Math.random() * n) + 1;
        if (!arr.includes(num)) arr.push(num);
    }
    console.log("arr:", arr);
    return arr;
}

// Function to swap two random elements in given array
export function swapRandomElements(
    arr: number[],
    pos1: number,
    pos2: number
): number[] {
    console.log(
        "moveToRandomPosition -> arr:",
        arr,
        arr.length,
        "pos1:",
        pos1,
        "pos2:",
        pos2
    );
    // const newArr = [...arr];

    // swap elements at the two positions
    const el = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = el;

    console.log("moveToRandomPosition arr after:", arr);
    return arr;
}

export function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
}
