import { bubblesort } from "@/sorts/bubblesort";
import { heapsort } from "@/sorts/heapsort";
import { mergesort } from "@/sorts/mergesort";
import { quicksort } from "@/sorts/quicksort";
import type { IAlgorithmComplexity } from "./interfaces";

export const algorithms: IAlgorithmComplexity[] = [
    {
        name: "logarithmic",
        algoList: [
            {
                name: "Quick Sort",
                description: "testDesc",
                runSort: quicksort,
            },
            {
                name: "Merge Sort",
                description: "testDesc2",
                runSort: mergesort,
            },
            {
                name: "Heap Sort",
                description: "testDesc3",
                runSort: heapsort,
            },
        ],
    },
    {
        name: "quadratic",
        algoList: [
            {
                name: "Bubble Sort",
                description: "testDesc4",
                runSort: bubblesort,
            },
            {
                name: "Selection Sort",
                description: "testDesc5",
            },
            {
                name: "Insertion Sort",
                description: "testDesc6",
            },
        ],
    },
];
