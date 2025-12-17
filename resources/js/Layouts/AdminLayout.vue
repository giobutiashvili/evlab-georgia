<template>
    <AdminHeader />
    <main class="container my-4">
        <router-view />
    </main>
    <AdminFooter />
</template>

<script setup>
import AdminHeader from "@/Components/Admin/AdminHeader.vue";
import AdminFooter from "@/Components/Admin/AdminFooter.vue";
</script>
