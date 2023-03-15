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
                        Sorting algorithms visualized
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="sort-overview">
                <AlgorithmList></AlgorithmList>
            </div>
        </div>
        <div class="divider"></div>
        <div class="diagram-container">
            <HomeDiagram></HomeDiagram>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    gap: 25px;
}

main > div {
    /* height: 60vh; */
    /* width: 45vw; */
}

.divider {
    width: 500px;
    /* background-color: var(--white-mute); */
    background: var(--divider-gradient);
    flex-shrink: 0;
    height: 2px;
}

.introduction,
.sort-overview {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sort-overview {
    margin-top: 25px;
    flex-direction: row;
    gap: 30px;
}

.introduction {
    /* margin-bottom: 50px; */
    align-items: center;
}

.welcome-text {
    margin-bottom: 25px;
}

.welcome-text,
.diagram-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.welcome-text-title {
    font-size: 52px;
    font-weight: 500;
    color: var(--text-light);
    /* text-decoration-color: #dd6718; */
    /* text-decoration-line: underline; */
}

.welcome-text-subtitle {
    font-size: 22px;
    color: var(--grey);
}

@media only screen and (max-width: 600px) {
    .welcome-text-title {
        font-size: 40px;
    }

    .welcome-text-subtitle {
        font-size: 20px;
    }
}
</style>
