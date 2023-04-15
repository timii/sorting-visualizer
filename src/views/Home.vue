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
            <div class="divider"></div>
        </div>
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
    overflow: hidden;
}

.divider {
    width: 500px;
    background: var(--divider-gradient);
    flex-shrink: 0;
    height: 2px;
    margin: 25px 0;
}

.introduction,
.sort-overview {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sort-overview {
    flex-direction: row;
    gap: 30px;
}

.introduction {
    margin-top: 5vh;
    align-items: center;
}

.welcome-text {
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
    text-align: center;
}

.welcome-text-subtitle {
    font-size: 22px;
    color: var(--grey);
}

@media only screen and (max-width: 600px) {
    .introduction {
        margin-top: 4vh;
    }

    .welcome-text-title {
        font-size: 46px;
    }

    .divider {
        width: 400px;
        margin: 15px 0;
    }

    .sort-overview {
        flex-direction: column;
        gap: 15px;
    }

    .diagram-container {
        margin-bottom: 30px;
    }
}

@media only screen and (max-width: 400px) {
    .welcome-text-title {
        font-size: 40px;
    }

    .divider {
        width: 300px;
    }

    .welcome-text-subtitle {
        font-size: 20px;
    }
}
</style>
