<script lang="ts">
export default {
    data() {
        return {
            currentValue: "50",
        };
    },

    props: {
        label: {
            type: String,
        },
        amount: {
            type: Number,
        },
        callback: {
            type: Function,
        },
    },

    methods: {
        valueChanged() {
            console.log("value changes:", this.currentValue);
            this.callback(this.currentValue);
        },
    },
};
</script>

<template>
    <div class="slider-container">
        <span class="slider-label">{{ this.label }}: {{ this.amount }}</span>
        <input
            type="range"
            min="5"
            max="100"
            step="1"
            class="slider"
            id="slider"
            @change="valueChanged"
            v-model="currentValue"
        />
    </div>
</template>

<style scoped>
.slider-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.slider-label {
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    margin-top: -5px;
    margin-bottom: 12px;
}

.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: var(--grey);
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--text-light);
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--text-light);
    cursor: pointer;
}
</style>
