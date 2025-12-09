<script setup>
const props = defineProps(["bgClass", "buttonText"]);
</script>

<template>
    <main :class="['container py-4', props.bgClass]">
        <button class="btn btn-primary">{{ props.buttonText }}</button>
    </main>
</template>
