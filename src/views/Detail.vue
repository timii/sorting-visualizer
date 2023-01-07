<script lang="ts">
import { algorithms } from "../model/algorithms.ts";
import { capitalizeAllFirstLetters } from "../utils/util.ts";
// console.log("algos:", algorithms);

export default {
    computed: {
        // find current algorithm using its name
        currentAlgorithm() {
            const name = capitalizeAllFirstLetters(this.$route.params.name);
            console.log("name:", `'${name}'`, algorithms);
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
    <main>
        <div class="detail-title">{{ currentAlgorithm.name }}</div>
        <div class="diagram-container">diagram container</div>
        <div class="description-container">
            description text
            <div>detail page for {{ currentAlgorithm.name }} works</div>
            <div>
                call function test:
                {{ currentAlgorithm.runSort([4, 2, 1, 5, 3]) }}
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    pading: 16px;
}

.detail-title {
    font-size: 40px;
    color: var(--text-light);
    font-weight: 500;
    margin: 16px 0 30px 0;
}

.diagram-container {
    border: solid 1px red;
    width: 70vw;
    height: 80vh;
}
</style>
