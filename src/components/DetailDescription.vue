<script lang="ts">
export default {
    props: {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
    },
};
</script>

<template>
    <div class="description-container">{{ name }} - {{ description }}</div>
</template>

<style scroped></style>
