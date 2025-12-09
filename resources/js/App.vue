<template>
    <div class="d-flex flex-column min-vh-100">
        <Header />

        <main class="flex-fill">
            <router-view />
        </main>

        <Footer />
    </div>
</template>

<script setup>
import Header from "./Components/Header.vue";
import Footer from "./Components/Footer.vue";
</script>
