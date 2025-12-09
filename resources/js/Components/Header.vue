<template>
    <!-- Global Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="/">სდადადსა</a>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products"
                            >Products</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about"
                            >About</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact"
                            >Contact</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
// No props or state needed for now; this is a presentational header
</script>

<style scoped></style>
