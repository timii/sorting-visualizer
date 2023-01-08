<script lang="ts">
import {
    createArray,
    swapRandomElements,
    getRandomNumber,
} from "../utils/util.ts";
export default {
    data() {
        return {
            testArray: createArray(50),
            intervall: null,
            randomEl1: 2,
            randomEl2: 4,
            highestNum: 0,
        };
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

        // set two random elements that will be swapped next
        // setTwoRandomElements() {
        //     this.randomEl1 = getRandomNumber(0, this.testArray.length);
        //     this.randomEl2 = getRandomNumber(0, this.testArray.length);
        //     while (this.randomEl2 === this.randomEl1) {
        //         this.randomEl2 = getRandomNumber(0, this.testArray.length);
        //     }
        // },

        // calculate width of each bar
        barWidth() {
            return 100 / this.testArray.length;
        },

        // handle start button click
        startClicked() {
            console.log("start clicked")
        },

        // handle stop button click
        stopClicked() {
            console.log("stop clicked")
        }
    },

    // ----
    // Lifecycle Methods
    // ----
    mounted() {
        this.highestNum = Math.max(...this.testArray);
        // this.setTwoRandomElements();
        // set intervall to continuously swap two random elements
        // this.intervall = setInterval(() => {
        //     this.testArray = swapRandomElements(
        //         this.testArray,
        //         this.randomEl1,
        //         this.randomEl2
        //     );
        //     this.setTwoRandomElements();
        // }, 2000);
    },
    unmounted() {
        console.log("unmounted");
        // clearInterval(this.intervall);
    },
};
</script>

<template>
    <div class="diagram-buttons-container">
        <div class="diagram">
            <div class="bars">
                <div
                    class="bar"
                    v-for="(number, i) in testArray"
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
