<template>
    <Header />

    <main class="container my-4">
        <router-view />
    </main>

    <Footer />
</template>

<script setup>
import Header from "@/components/front/Header.vue";
import Footer from "@/components/front/Footer.vue";
</script>
