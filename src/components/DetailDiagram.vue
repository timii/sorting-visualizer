<script lang="ts">
import { createArray } from "../utils/util";
import DiagramButton from "../components/DiagramButton.vue";
import DiagramSlider from "../components/DiagramSlider.vue";

export default {
    data() {
        return {
            startArray: createArray(50),
            algorithmSteps: [],
            currentStep: [],
            currentStepIndex: 0,
            intervall: undefined as number | undefined,
            randomEl1: 2,
            randomEl2: 4,
            highestNum: 0,
            isRunning: false,
            amountOfElements: 50,
            sortingSpeed: 50,
            isDoneSorting: false,
        };
    },

    props: {
        algorithmFunction: {
            type: Function,
        },
    },

    // ----
    // Component Methods
    // ----

    components: {
        DiagramButton,
        DiagramSlider,
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

        // calculate width of each bar
        barWidth() {
            return 100 / this.startArray.length;
        },

        // set next step in algorithm step array
        setNextAlgorithmStep() {
            this.currentStep = this.algorithmSteps[this.currentStepIndex];
            this.currentStepIndex += 1;
            if (this.currentStepIndex === this.algorithmSteps.length) {
                this.isRunning = false;
            }
        },

        // check if the solution array has another step
        hasAnotherStep() {
            return (
                this.currentStepIndex > this.algorithmSteps.length ||
                this.algorithmSteps[this.currentStepIndex]
            );
        },

        // handle start button click
        startClicked() {
            this.isRunning = true;

            // immediately show first step and then after each intervall
            if (this.hasAnotherStep()) {
                this.setNextAlgorithmStep();
            }

            // set intervall to continuously go through each algorithm step
            this.intervall = setInterval(() => {
                if (this.hasAnotherStep()) {
                    this.setNextAlgorithmStep();
                } else {
                    clearInterval(this.intervall);
                    this.isRunning = false;
                    this.isDoneSorting = true;
                }
            }, 10 * (100 - this.sortingSpeed));
        },

        // handle pause button click
        pauseClicked() {
            this.isRunning = false;
            clearInterval(this.intervall);
        },

        // handle shuffle button click
        shuffleClicked() {
            this.isRunning = false;
            this.isDoneSorting = false;

            clearInterval(this.intervall);
            this.startArray = createArray(this.amountOfElements);
            if (this.algorithmFunction) {
                this.algorithmSteps = this.algorithmFunction(this.startArray);
            }
            this.currentStep = this.algorithmSteps[0];
            this.currentStepIndex = 1;
        },

        // handle value change for element amount slider
        elementsAmountChanged(value: number) {
            this.amountOfElements = value;
            this.isRunning = false;
            this.isDoneSorting = false;

            clearInterval(this.intervall);
            this.startArray = createArray(this.amountOfElements);
            if (this.algorithmFunction) {
                this.algorithmSteps = this.algorithmFunction(this.startArray);
            }
            this.currentStep = this.algorithmSteps[0];
            this.currentStepIndex = 1;

            this.highestNum = Math.max(...this.startArray);
        },

        // handle value change for speed slider
        sortSpeedChanged(value: number) {
            console.log("value:", value, typeof value);
            this.sortingSpeed = value;

            clearInterval(this.intervall);

            // create new intervall with the new speed and run keep running if its already sorting
            if (this.isRunning) {
                this.intervall = setInterval(() => {
                    if (this.hasAnotherStep()) {
                        this.setNextAlgorithmStep();
                        this.isRunning = true;
                    } else {
                        clearInterval(this.intervall);
                        this.isRunning = false;
                        this.isDoneSorting = true;
                    }
                }, 10 * (100 - this.sortingSpeed));
            }
        },
    },

    // ----
    // Lifecycle Methods
    // ----

    mounted() {
        if (this.algorithmFunction) {
            this.algorithmSteps = this.algorithmFunction(this.startArray);
        }
        this.currentStep = this.algorithmSteps[0];
        this.currentStepIndex = 1;
        this.amountOfElements = this.startArray.length;
        this.highestNum = Math.max(...this.startArray);
    },

    unmounted() {
        if (this.intervall) {
            clearInterval(this.intervall);
        }
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
                    :key="i"
                    :style="{
                        height: getHeightAsPercentage(number) + '%',
                        width: barWidth() + '%',
                        backgroundColor: getBarColor(number),
                    }"
                ></div>
            </div>
        </div>
        <div class="diagram-buttons">
            <div class="button-row">
                <DiagramButton
                    :label="'start'"
                    :secondaryLabel="'pause'"
                    :callback="startClicked"
                    :secondaryCallback="pauseClicked"
                    :isRunningProp="isRunning"
                    :disabled="isDoneSorting"
                ></DiagramButton>
                <DiagramButton
                    :label="'shuffle'"
                    :callback="shuffleClicked"
                ></DiagramButton>
            </div>
            <div class="button-row sliders">
                <DiagramSlider
                    :label="'Elements'"
                    :amount="amountOfElements"
                    :callback="elementsAmountChanged"
                    :min="5"
                    :max="100"
                    :step="1"
                ></DiagramSlider>
                <DiagramSlider
                    :label="'Speed'"
                    :amount="sortingSpeed"
                    :callback="sortSpeedChanged"
                    :min="1"
                    :max="100"
                    :step="1"
                    :amountUnit="'%'"
                ></DiagramSlider>
            </div>
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
    margin-top: 5px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.button-row {
    background-color: var(--grey-darker);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    gap: 20px;
    padding: 0 20px;
    height: 36px;
}

.sliders {
    height: 60px;
}

@media only screen and (max-width: 600px) {
    .diagram {
        padding: 25px 10px;
    }
}
</style>
