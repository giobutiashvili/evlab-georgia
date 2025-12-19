<template>
    <main class="d-flex flex-column min-vh-100">
        <Header />

        <section class="container my-4 flex-grow-1 d-flex flex-column">
            <router-view />
        </section>

        <Footer />
    </main>
</template>

<script setup>
import Header from "@/Components/Front/Header.vue";
import Footer from "@/Components/Front/Footer.vue";
</script>
