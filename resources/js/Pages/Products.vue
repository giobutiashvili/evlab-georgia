<template>
    <div class="container my-4 justify-content-center flex-column d-flex">
        <div v-if="products.length > 0" class="row g-4">
            <div class="col-md-4" v-for="product in products" :key="product.id">
                <div class="card h-100 shadow-sm product-card">
                    <router-link
                        :to="`/products/${product.id}`"
                        class="text-decoration-none text-dark"
                    >
                        <img
                            class="card-img-top"
                            :src="
                                resolveImage(
                                    product.images && product.images.length > 0
                                        ? product.images[0]?.url ||
                                              product.images[0]?.path
                                        : null
                                )
                            "
                        />
                        <div class="card-body d-flex flex-column">
                            <div
                                class="d-flex justify-content-between align-items-center mb-2"
                            >
                                <h5 class="card-title mb-0">
                                    {{ product.name }}
                                </h5>
                            </div>
                            <p class="card-text text-truncate mb-3">
                                {{ product.description }}
                            </p>
                            <div
                                class="mt-auto d-flex justify-content-between align-items-center"
                            >
                                <span class="fw-bold text-primary"
                                    >{{ product.price }} ₾</span
                                >
                                <button
                                    class="btn btn-primary btn-sm"
                                    @click="viewDetails(product.id)"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div>
            <h1 v-if="products.length === 0" class="text-center">
                No products available.
            </h1>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const resolveImage = (path) => {
    if (!path) return "/placeholder.png";
    try {
        new URL(path);
        return path;
    } catch (e) {
        const clean = String(path).replace(/^\/+/, "");
        if (clean.startsWith("storage/")) return `${API_URL}/${clean}`;
        return `${API_URL}/storage/${clean}`;
    }
};

const products = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get(`${API_URL}/api/products`);

        products.value = response.data;
        console.log("products:", products.value);
        if (products.value && products.value.length > 0) {
            products.value.forEach((p) => {
                const imgPath =
                    p.images && p.images.length > 0
                        ? p.images[0].url || p.images[0].path
                        : null;
                console.log(
                    `product ${p.id} image raw:`,
                    imgPath,
                    "resolved:",
                    resolveImage(imgPath)
                );
            });
        }
    } catch (error) {
        console.error("Error fetching products:", error);
    }
});

const viewDetails = (id) => {
    console.log("View details for product ID:", id);
};
</script>

<style scoped>
.product-card {
    border-radius: 12px;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.card-img-top {
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    transition: transform 0.3s;
}

.card-text {
    display: -webkit-box;
    -webkit-line-clamp: 2; /* truncate 2 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.btn-primary {
    transition: all 0.3s;
}

.btn-primary:hover {
    background-color: #0b5ed7;
    color: #fff;
}
</style>
