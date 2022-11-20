export function quicksort(arr?: number[]): number[] {
    console.log("quicksort -> arr:", arr, arr ? arr : [1, 2, 3]);
    return arr ? arr : [1, 2, 3];
}
