<script setup lang="ts">
import { algorithms } from "../model/algorithms.ts";
</script>

<template>
    <div v-for="complexity in algorithms" class="algo-container">
        <div class="algo-type">
            {{ complexity.name }}
        </div>
        <div v-for="alg in complexity.algoList" class="algo">
            <span class="algo-arrow">arrow </span>
            <router-link :to="'/' + alg.name.toLowerCase()">
                {{ alg.name }} - {{ alg.description }}
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.algo-container:first-child {
    margin-bottom: 10px;
}

.algo-type {
    font-size: 24px;
    margin-bottom: 5px;
    text-transform: capitalize;
    /* text-decoration: underline var(--orange); */
    color: var(--text-light);
}

.algo {
    margin-left: 20px;
    margin-bottom: 2px;
    display: flex;
    width: fit-content;
    /* text-decoration: none; */
    /* transition: all 1s ease-in-out; */
}

.algo-arrow {
    color: transparent;
}

.algo > a {
    text-decoration: underline transparent;
    transition: all 0.1s ease-in-out;
}

.algo:hover > a {
    text-decoration: underline var(--text-light) 1.5px;
}

.algo:hover > .algo-arrow {
    color: white;
}
</style>
