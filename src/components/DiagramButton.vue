<script lang="ts">
export default {
    props: {
        label: {
            type: String,
        },
        callback: {
            type: Function,
        },
    },
};
</script>

<template>
    <div class="btn-container">
        <img class="btn-icon" :src="'src/assets/' + this.label + '.png'" />
        <button class="btn start" @click="this.callback()">
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
    /* background-color: var(--grey-darker); */
}

.btn-icon {
    margin-bottom: -2px;
}

.btn {
    padding: 5px;
    font-size: 16px;
    background-color: var(--black);
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
