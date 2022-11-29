<script lang="ts">
import { createArray, swapRandomElements, getRandomNumber } from "../utils/util.ts";
export default {
    data() {
        return {
            testArray: createArray(10),
            intervall: null,
            randomEl1: 2,
            randomEl2: 4,
        }
    },
    methods: {
        // get current numbers height as a percentage
        getHeightAsPercentage(num: number) {
            const highestNum = Math.max(...this.testArray);
            return (num * 100) / highestNum;
        },
        getBarColor(index: number) {
            console.log("index:", index, this.randomEl1, this.randomEl2,
                index === this.randomEl1 && this.randomEl2 )
            if (index === this.randomEl1) return 'green'
            else if (index === this.randomEl2) return 'green'
            else return 'red'
        },
        setTwoRandomElements() {
            // console.log("setTwoRandomElements")
            this.randomEl1 = getRandomNumber(0, this.testArray.length)
            this.randomEl2 = getRandomNumber(0, this.testArray.length)
            while (this.randomEl2 === this.randomEl1) {
                this.randomEl2 = getRandomNumber(0, this.testArray.length)
            }
        }
    },
    computed: {
        barWidth() {
            return 100 / this.testArray.length;
        },
    },
    mounted() {
        console.log("mounted")
        this.setTwoRandomElements()
        this.intervall = setInterval(() => {
            this.testArray = swapRandomElements(this.testArray, this.randomEl1, this.randomEl2);
            this.setTwoRandomElements()
        }, 2000);
    },
    unmounted() {
        console.log("unmounted")
        clearIntervall(this.intervall)
    }
};
</script>

<template>
    <div class="diagram" :style="{
        // width: 'calc(25vw + ' + testArray.length + 'px)'
    }">
        <div class="bars">
            <div
                class="bar"
                v-for="(number, i) in testArray"
                :style="{
                    height: getHeightAsPercentage(number) + '%',
                    // width: 'calc(' + barWidth + '% - ' + testArray.length + 'px)',
                    width: barWidth + '%',
                    backgroundColor: getBarColor(i),
                    // left: i * barWidth + '%',
                    // marginLeft: i * 1 + 'px'
                }"
            ></div>
        </div>
    </div>
</template>

<style scoped>
.diagram {
    border: 1px solid green;
    width: 25vw;
    height: 20vh;
}

.bars {
    display: flex;
    gap: 1px;
    height: 100%;
    align-items: flex-end;
    position: relative;
}

.bar {
    /* height: 25px; */
    /* width: 5px; */
    background-color: red;
    /* transition: all 2s; */
    /* position: absolute; */
}
</style>
