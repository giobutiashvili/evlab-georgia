<template>
    <main class="d-flex flex-column">
        <Header />

        <section class="container my-4 d-flex flex-column flex-fill">
            <router-view />
        </section>

        <Footer />
    </main>
</template>

<script setup>
import Header from "@/Components/Front/Header.vue";
import Footer from "@/Components/Front/Footer.vue";
</script>
