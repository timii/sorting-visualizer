export interface IAlgorithmComplexity {
    name: string;
    algoList: IAlgorithm[];
}

export interface IAlgorithm {
    name: string;
    description: string;
    runSort?: (arr: number[]) => number[][];
}
