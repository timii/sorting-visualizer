<script setup lang="ts">
import { algorithms } from "../model/algorithms";
</script>

<template>
    <div
        v-for="complexity in algorithms"
        class="algo-container"
        :key="complexity.name"
    >
        <div class="algo-type">
            {{ complexity.name }}
        </div>
        <div class="algo-list">
            <div
                v-for="alg in complexity.algoList"
                class="algo"
                :key="alg.name"
            >
                <router-link
                    :to="'/' + alg.name.toLowerCase().split(' ').join('-')"
                >
                    {{ alg.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.algo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.algo-container:first-child {
    margin-bottom: 10px;
}

.algo-type {
    font-size: 32px;
    margin-bottom: 5px;
    text-transform: capitalize;
    color: var(--text-light);
    background-color: var(--black-soft);
    width: fit-content;
    padding: 5px 15px;
    border-radius: 15px;
}

.algo {
    /* margin-left: 30px; */
    margin-bottom: 2px;
    font-size: 26px;
    display: flex;
    width: fit-content;
}

.algo > a {
    text-decoration: underline transparent;
    transition: all 0.1s ease-in-out;
    display: inline-block;
    position: relative;
}

.algo > a:after {
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

.algo:hover > a:after {
    transform-origin: bottom left;
    transform: scaleX(1);
}

@media only screen and (max-width: 600px) {
    .algo-type {
        font-size: 30px;
    }

    .algo {
        font-size: 24px;
    }
}

@media only screen and (max-width: 400px) {
    .algo-type {
        font-size: 28px;
        padding: 5px 10px;
    }

    .algo {
        font-size: 22px;
    }
}
</style>
