<script lang="ts">
export default {
    data() {
        return {
            testArray: [1, 5, 7, 9, 13, 25, 46, 57, 79, 89, 100, 115, 160],
        };
    },
    methods: {
        // get current numbers height as a percentage
        getHeightAsPercentage(num: number) {
            const highestNum = Math.max(...this.testArray);
            const percentageOfMax = (num * 100) / highestNum;
            console.log("num:", num, highestNum, percentageOfMax);
            return percentageOfMax;
        },
    },
    computed: {
        barWidth() {
            return 100 / this.testArray.length;
        },
    },
};
</script>

<template>
    <div class="diagram">
        <div class="bars">
            <div
                class="bar"
                v-for="number in testArray"
                :style="{
                    height: getHeightAsPercentage(number) + '%',
                    width: barWidth + '%',
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
}

.bar {
    /* height: 25px; */
    width: 5px;
    background-color: red;
}
</style>
