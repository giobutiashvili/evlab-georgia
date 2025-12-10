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

<style>
.contact-icon {
    font-size: 22px;
    color: #ffffff; /* ან შენი ფერი */
}

.contact-text {
    color: #ffffff; /* ან შენი ფერი */
    font-size: 17px;
    font-weight: 500;
}

.contact-item {
    margin-bottom: 10px;
}
</style>
