<script setup lang="ts">
import AlgorithmList from "../components/AlgorithmList.vue";
import HomeDiagram from "../components/HomeDiagram.vue";
</script>

<template>
    <main>
        <div class="introduction">
            <div>
                <div class="welcome-text">
                    <div class="welcome-text-title">Sorting Visualizer</div>
                    <div class="welcome-text-subtitle">
                        Visually learn different sorting algorithms and how they
                        work
                    </div>
                </div>
                <div class="diagram-container">
                    <HomeDiagram></HomeDiagram>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="sort-overview">
            <AlgorithmList></AlgorithmList>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 25px;
}

main > div {
    height: 60vh;
    width: 45vw;
}

.divider {
    width: 1px;
    /* background-color: var(--white-mute); */
    background: var(--divider-gradient);
}

.introduction,
.sort-overview {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.introduction {
    margin-top: 200px;
}

.welcome-text {
    margin-bottom: 25px;
}

.welcome-text,
.diagram-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.welcome-text-title {
    font-size: 2.6rem;
    font-weight: 500;
    color: var(--text-light);
    /* text-decoration-color: #dd6718; */
    /* text-decoration-line: underline; */
}

.welcome-text-subtitle {
    font-size: 1.2rem;
    color: var(--grey);
}
</style>
