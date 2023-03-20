<script lang="ts">
export default {
    data() {
        return {
            currentValue: 0,
        };
    },

    props: {
        label: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        callback: {
            type: Function,
            required: true,
        },
        min: {
            type: Number,
            required: true,
        },
        max: {
            type: Number,
            required: true,
        },
        step: {
            type: Number,
            required: true,
        },
        amountUnit: {
            type: String,
        },
    },

    methods: {
        valueChanged() {
            // Parse string into number to return
            this.callback(Number(this.currentValue));
        },
    },

    mounted() {
        this.currentValue = this.amount;
    },
};
</script>

<template>
    <div class="slider-container">
        <span class="slider-label"
            >{{ label }}: {{ amount }}{{ amountUnit }}</span
        >
        <input
            type="range"
            :min="min"
            :max="max"
            :step="step"
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
    opacity: 0.8;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
}

.slider:hover {
    opacity: 1;
    cursor: pointer;
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
