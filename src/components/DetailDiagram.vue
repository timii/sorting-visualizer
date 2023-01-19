<script lang="ts">
import {
    createArray,
    swapRandomElements,
    getRandomNumber,
} from "../utils/util.ts";
export default {
    data() {
        return {
            startArray: createArray(5),
            algorithmSteps: [],
            currentStep: [],
            currentStepIndex: 0,
            intervall: null,
            randomEl1: 2,
            randomEl2: 4,
            highestNum: 0,
        };
    },

    props: {
        algorithmFunction: {
            type: Function
        }
    },

    // ----
    // Component Methods
    // ----

    methods: {
        // get current numbers height as a percentage
        getHeightAsPercentage(num: number) {
            return (num * 100) / this.highestNum;
        },

        // return calculated rgb string to element
        getBarColor(value: number) {
            return (
                "rgba(" +
                this.getRGBValue(value, 221) +
                "," +
                this.getRGBValue(value, 103) +
                "," +
                this.getRGBValue(value, 24) +
                ", 1)"
            );
        },

        // calculate correct bar color using its index
        getRGBValue(num: number, minValue: number) {
            return (
                minValue +
                ((this.highestNum - num) * (255 - minValue)) / this.highestNum
            );
        },

        // calculate width of each bar
        barWidth() {
            return 100 / this.startArray.length;
        },

        // set next step in algorithm step array
        setNextAlgorithmStep() {
            this.currentStep = this.algorithmSteps[this.currentStepIndex]
            this.currentStepIndex += 1;
        },

        // handle start button click
        startClicked() {
            console.log("start clicked")
            const hasAnotherStep = this.algorithmSteps[this.currentStepIndex];

            // immediately show first step and then after each intervall
            if (hasAnotherStep) {
                this.setNextAlgorithmStep()
            }

            // set intervall to continuously go through each algorithm step
            this.intervall = setInterval(() => {
                if (hasAnotherStep) {
                    this.setNextAlgorithmStep()
                } else {
                    clearInterval(this.intervall)
                }
            }, 2000);
        },

        // handle stop button click
        stopClicked() {
            console.log("stop clicked")
            clearInterval(this.intervall)
        }
    },

    // ----
    // Lifecycle Methods
    // ----

    mounted() {
        console.log("currentAlgo:", this.algorithmFunction)
        this.algorithmSteps = this.algorithmFunction(this.startArray)
        this.currentStep = this.algorithmSteps[0];
        this.currentStepIndex += 1;
        console.log("algorithmSteps:",this.algorithmSteps, "currentStep:", this.currentStep)
        this.highestNum = Math.max(...this.startArray);
    },

    unmounted() {
        console.log("unmounted");
        clearInterval(this.intervall);
    },
};
</script>

<template>
    <div class="diagram-buttons-container">
        <div class="diagram">
            <div class="bars">
                <div
                    class="bar"
                    v-for="(number, i) in currentStep"
                    :style="{
                        height: getHeightAsPercentage(number) + '%',
                        width: barWidth() + '%',
                        backgroundColor: getBarColor(number),
                    }"
                ></div>
            </div>
        </div>
        <div class="diagram-buttons">
            <button class="btn start" @click="startClicked()">start</button>
            <button class="btn stop" @click="stopClicked()">stop</button>
        </div>
    </div>
</template>

<style scoped>
.diagram-buttons-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.diagram {
    width: 100%;
    height: 100%;
    background-color: var(--grey-darker);
    border-radius: 5px;
    padding: 25px;
}

.bars {
    display: flex;
    gap: 1px;
    height: 100%;
    align-items: flex-end;
    position: relative;
}

.diagram-buttons {
    display: flex;
    gap: 10px;
}

.btn {
    padding: 5px;
    font-size: 16px;
}

.btn:hover {
    cursor: pointer;
}
</style>
