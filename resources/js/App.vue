<template>
    <main class="d-flex flex-column min-vh-100">
        <section class="container d-flex flex-column flex-fill">
            <router-view />
        </section>
    </main>
</template>

<script setup>
import Header from "./Components/Header.vue";
import Footer from "./Components/Footer.vue";
</script>

<style>
main {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.contact-icon {
    font-size: 22px;
    color: #ffffff;
}

.contact-text {
    color: #ffffff;
    font-size: 17px;
    font-weight: 500;
}

.contact-item {
    margin-bottom: 10px;
}
</style>
