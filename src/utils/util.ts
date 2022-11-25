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
