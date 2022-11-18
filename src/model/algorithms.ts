import { quicksort } from "@/sorts/quicksort";
import type { IAlgorithmComplexity } from "./interfaces";

export const algorithms: IAlgorithmComplexity[] = [
    {
        name: "logarithmic",
        algoList: [
            {
                name: "Quicksort",
                description: "testDesc",
                runSort: quicksort,
            },
        ],
    },
    {
        name: "quadratic",
        algoList: [],
    },
];
