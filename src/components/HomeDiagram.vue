<script lang="ts">
import {
    createArray,
    swapRandomElements,
    getRandomNumber,
} from "../utils/util.ts";
export default {
    data() {
        return {
            testArray: createArray(10),
            intervall: null,
            randomEl1: 2,
            randomEl2: 4,
            highestNum: 0,
        };
    },
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
        setTwoRandomElements() {
            this.randomEl1 = getRandomNumber(0, this.testArray.length);
            this.randomEl2 = getRandomNumber(0, this.testArray.length);
            while (this.randomEl2 === this.randomEl1) {
                this.randomEl2 = getRandomNumber(0, this.testArray.length);
            }
        },

        // calculate width of each bar
        barWidth() {
            return 100 / this.testArray.length;
        },
    },

    // ----
    // Lifecycle Methods
    // ----
    mounted() {
        this.highestNum = Math.max(...this.testArray);
        this.setTwoRandomElements();
        // set intervall to continuously swap two random elements
        this.intervall = setInterval(() => {
            this.testArray = swapRandomElements(
                this.testArray,
                this.randomEl1,
                this.randomEl2
            );
            this.setTwoRandomElements();
        }, 2000);
    },
    unmounted() {
        console.log("unmounted");
        clearInterval(this.intervall);
    },
};
</script>

<template>
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
</template>

<style scoped>
.diagram {
    width: 25vw;
    max-width: 400px;
    height: 20vh;
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
</style>
