<script setup lang="ts">
import { algorithms } from "../model/algorithms.ts";
</script>

<template>
    <div v-for="complexity in algorithms">
        {{ complexity.name }}
        <div v-for="alg in complexity.algoList">
            <router-link :to="'/' + alg.name.toLowerCase()">
                {{ alg.name }} - {{ alg.description }}
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>
