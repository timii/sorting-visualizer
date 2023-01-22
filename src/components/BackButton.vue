<script lang="ts"></script>

<template>
    <div class="button-container">
        <router-link :to="'/'">
            <img :src="'src/assets/back.png'" />
        </router-link>
    </div>
</template>

<style scoped>
.button-container {
    position: relative;
    transition: all 0.1s ease-in-out;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transform: rotate3d(0, 0, 1, 0.001deg); /* clear artifacts*/
}

a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
}

.button-container:hover {
    box-shadow: 0 0 0 2px var(--text-light);
}

img {
    height: 36px;
}
</style>
