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
    <div class="description-container">
        {{ this.name }} - {{ this.description }}
    </div>
</template>

<style scroped></style>
