<script lang="ts">
export default {
    data() {
        return {
            isRunning: true,
        };
    },

    props: {
        label: {
            type: String,
        },
        secondaryLabel: {
            type: String,
        },
        callback: {
            type: Function,
        },
        secondaryCallback: {
            type: Function,
        },
        isRunningProp: {
            type: Boolean,
        },
    },

    // watch prop to call function when it gets changed
    watch: {
        isRunningProp: function (newValue, oldValue) {
            this.isRunning = newValue;
        },
    },

    methods: {
        buttonWithSecondaryLabelClicked() {
            this.isRunning ? this.secondaryCallback() : this.callback();
            this.isRunning = !this.isRunning;
        },

        currentLabel() {
            return this.isRunning ? this.secondaryLabel : this.label;
        },
    },

    mounted() {
        this.isRunning = this.isRunningProp;
    },
};
</script>

<template>
    <!-- button label and callback change on click -->
    <div
        v-if="this.secondaryLabel && this.secondaryCallback"
        class="btn-container"
        @click="buttonWithSecondaryLabelClicked"
    >
        <img
            class="btn-icon"
            :src="'src/assets/' + this.currentLabel() + '.png'"
            :alt="this.currentLabel()"
        />
        <button class="btn start">
            {{ this.currentLabel() }}
        </button>
    </div>

    <!-- normal button with static label and callback -->
    <div v-else class="btn-container" @click="this.callback()">
        <img
            class="btn-icon"
            :src="'src/assets/' + this.label + '.png'"
            :alt="this.label"
        />
        <button class="btn start">
            {{ this.label }}
        </button>
    </div>
</template>

<style scroped>
.btn-container {
    display: flex;
    align-items: center;
    transition: all 0.1s ease-in-out;
    position: relative;
}

.btn-icon {
    margin-bottom: -2px;
}

.btn {
    padding: 5px;
    font-size: 16px;
    background-color: inherit;
    color: var(--white-mute);
    border: none;
    font-size: 18px;
    font-weight: 500;
}

.btn-container:hover,
.btn:hover {
    cursor: pointer;
}

.btn-container:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--text-light);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
}

.btn-container:hover:after {
    transform-origin: bottom left;
    transform: scaleX(1);
}
</style>
