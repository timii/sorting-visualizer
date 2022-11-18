<script lang="ts">
import { algorithms } from "../model/algorithms.ts";
import { capitalizeFirstLetter } from "../utils/util.ts";
console.log("algos:", algorithms);

export default {
    computed: {
        currentAlgorithm() {
            const name = capitalizeFirstLetter(this.$route.params.name);
            console.log("name:", name, algorithms);
            let currentAlgo;
            for (let i = 0; i < algorithms.length; i++) {
                const found = algorithms[i].algoList.find(
                    (a) => a.name === name
                );
                if (found) {
                    currentAlgo = found;
                    break;
                }
            }

            console.log("currentAlgo:", currentAlgo);
            return currentAlgo;
        },
    },
};
</script>

<template>
    <div>detail page for {{ currentAlgorithm.name }} works</div>
    <div>
        <!-- Testing out -> name: {{ name }}, desc: {{ desc }}, runFunc: -->
        <!-- {{ runFunc }} -->
    </div>
    <router-view></router-view>
</template>

<style scoped></style>
