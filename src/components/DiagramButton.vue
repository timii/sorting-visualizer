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
            required: true,
        },
        secondaryLabel: {
            type: String,
        },
        callback: {
            type: Function,
            required: true,
        },
        secondaryCallback: {
            type: Function,
        },
        isRunningProp: {
            type: Boolean,
        },
        disabled: {
            type: Boolean,
        },
    },

    // watch prop to call function when it gets changed
    watch: {
        isRunningProp: function (newValue) {
            this.isRunning = newValue;
        },
    },

    methods: {
        buttonWithSecondaryLabelClicked() {
            if (!this.disabled) {
                // avoid error by checking again if secondaryCallback is defined
                this.isRunning
                    ? this.secondaryCallback
                        ? this.secondaryCallback()
                        : this.callback()
                    : this.callback();
                this.isRunning = !this.isRunning;
            }
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
        v-if="secondaryLabel && secondaryCallback"
        class="btn-container"
        :class="{ disabled: disabled }"
        @click="buttonWithSecondaryLabelClicked"
    >
        <img
            class="btn-icon"
            :src="`${currentLabel()}.png`"
            :alt="currentLabel()"
        />
        <button class="btn start" :disabled="disabled">
            {{ currentLabel() }}
        </button>
    </div>

    <!-- normal button with static label and callback -->
    <div
        v-else
        class="btn-container"
        @click="callback()"
        :class="{ disabled: disabled }"
    >
        <img class="btn-icon" :src="`${label}.png`" :alt="label" />
        <button class="btn start">
            {{ label }}
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

.btn-container.disabled {
    opacity: 0.5;
}

.btn-container.disabled:hover,
.btn-container.disabled .btn:hover {
    cursor: unset;
}

.btn-container.disabled:after {
    content: unset;
    transition: all 0s;
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
