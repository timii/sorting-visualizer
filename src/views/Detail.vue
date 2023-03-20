<script lang="ts">
import { algorithms } from "../model/algorithms";
import { capitalizeAllFirstLetters } from "../utils/util";
import type { IAlgorithm } from "../model/interfaces";
import DetailDiagram from "../components/DetailDiagram.vue";
import BackButton from "../components/BackButton.vue";
import DetailDescription from "../components/DetailDescription.vue";

export default {
    components: {
        DetailDiagram,
        BackButton,
        // DetailDescription,
    },
    computed: {
        // find current algorithm using its name
        currentAlgorithm(): IAlgorithm {
            const pathVariable = this.$route.params.name as string;
            const pathSortName = pathVariable.split("-").join(" ");
            const name = capitalizeAllFirstLetters(pathSortName);
            console.log("name:", `'${name}'`, algorithms);
            let currentAlgo;
            for (let i = 0; i < algorithms.length; i++) {
                const found = algorithms[i].algoList.find(
                    (a: IAlgorithm) => a.name === name
                );
                if (found) {
                    currentAlgo = found;
                    break;
                }
            }

            // return first algorithm if it couldn't find any algorithm that matches
            if (!currentAlgo) currentAlgo = algorithms[1].algoList[1];

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
            <!-- <div class="arrows-down-container"> -->
            <!--     <img -->
            <!--         class="arrows-down" -->
            <!--         :src="'src/assets/arrows-down.png'" -->
            <!--         :alt="'arrows down'" -->
            <!--     /> -->
            <!-- </div> -->
        </section>
        <!-- <section class="description-section"> -->
        <!--     <DetailDescription -->
        <!--         :name="currentAlgorithm.name" -->
        <!--         :description="currentAlgorithm.description" -->
        <!--     ></DetailDescription> -->
        <!-- </section> -->
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
    color: var(--white-mute);
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

@media only screen and (max-width: 1000px) {
    .diagram-container {
        width: 95vw;
    }

    .back-container {
        left: 40px;
        top: 15px;
    }

    .detail-title {
        font-size: 34px;
    }
}

@media only screen and (max-width: 600px) {
    .back-container {
        left: 15px;
    }
}
</style>
