<script lang="ts">
export default {
    data() {
        return {
            currentValue: "5",
        };
    },

    props: {
        label: {
            type: String,
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
        <span class="slider-label">{{ this.label }}</span>
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
    <span></span>
</template>

<style scoped></style>
