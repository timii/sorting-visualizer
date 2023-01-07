// Function that capitalizes first letter of a given string
export function capitalizeFirstLetter(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

// Function that capitalizes all first letters of a string
export function capitalizeAllFirstLetters(s: string): string {
    const words = s.split(" ");
    let returnString = "";
    words.forEach(
        (w, i) =>
            (returnString += (i === 0 ? "" : " ") + capitalizeFirstLetter(w))
    );
    return returnString;
}

// Function that creates an array of unique numbers up to n
export function createArray(n: number): number[] {
    const arr: number[] = [];
    while (arr.length < n) {
        const num = Math.floor(Math.random() * n) + 1;
        if (!arr.includes(num)) arr.push(num);
    }
    return arr;
}

// Function to swap two random elements in given array
export function swapRandomElements(
    arr: number[],
    pos1: number,
    pos2: number
): number[] {
    // swap elements at the two passed in positions
    const el = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = el;

    return arr;
}

export function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
}
