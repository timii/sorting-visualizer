<script lang="ts">
import { algorithms } from "../model/algorithms.ts";
import { capitalizeAllFirstLetters } from "../utils/util.ts";
import DetailDiagram from "../components/DetailDiagram.vue";
import BackButton from "../components/BackButton.vue";

export default {
    components: {
        DetailDiagram,
        BackButton,
    },
    computed: {
        // find current algorithm using its name
        currentAlgorithm() {
            const pathVariable = this.$route.params.name.split("-").join(" ");
            const name = capitalizeAllFirstLetters(pathVariable);
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
        <section class="diagram-section">
            <div class="back-container">
                <BackButton></BackButton>
            </div>
            <div class="detail-title">{{ currentAlgorithm.name }}</div>
            <div class="diagram-container">
                <DetailDiagram
                    :algorithmFunction="currentAlgorithm.runSort"
                ></DetailDiagram>
            </div>
            <div class="arrows-down-container">
                <img
                    class="arrows-down"
                    :src="'src/assets/arrows-down.png'"
                    :alt="'arrows down'"
                />
            </div>
        </section>
        <section class="description-section">
            <div class="description-container">
                description text
                <div>detail page for {{ currentAlgorithm.name }} works</div>
                <div>
                    call function test:
                    {{ currentAlgorithm.runSort([4, 2, 1, 5, 3]) }}
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.diagram-section {
    height: 100vh;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.detail-title {
    font-size: 40px;
    color: var(--text-light);
    font-weight: 500;
    margin: 16px 0 30px 0;
    cursor: default;
}

.diagram-container {
    width: 70vw;
    height: 80vh;
}

.arrows-down-container {
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 1%;
}

.arrows-down {
    width: 38px;
}

.back-container {
    position: absolute;
    left: 80px;
    top: 20px;
}
</style>
