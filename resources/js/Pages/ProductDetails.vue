<template>
    <div class="container my-5">
        <div v-if="product" class="product-card">
            <button class="back-btn" @click="$router.back()">← Back</button>
            <div class="row h-100 align-items-center">
                <!-- IMAGE -->
                <div class="col-md-6 info-wrapper">
                    <div class="main-image">
                        <img
                            :src="`/storage/${activeImage}`"
                            alt="Product image"
                        />
                    </div>

                    <div class="thumbnails">
                        <img
                            v-for="image in product.images"
                            :key="image.id"
                            :src="`/storage/${image.path}`"
                            @mouseover="activeImage = image.path"
                            :class="{ active: activeImage === image.path }"
                        />
                    </div>

                    <h2 class="product-title">{{ product.name }}</h2>

                    <p class="product-description">
                        {{ product.description }}
                    </p>

                    <div class="product-price">{{ product.price }} ₾</div>

                    <!-- THUMBNAILS -->
                </div>
            </div>
        </div>

        <div v-else class="loading-wrapper">
            <div class="spinner-border text-primary mb-3"></div>
            <p class="text-muted">Loading product details...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

import axios from "axios";

const route = useRoute();
const id = route.params.id;

const product = ref(null);

onMounted(async () => {
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
        product.value = res.data;
        console.log("PRODUCT:", product.value);
    } catch (err) {
        console.error("AXIOS ERROR:", err.response || err);
    }
});

const activeImage = ref(null);

// როცა product ჩაიტვირთება → main image ავტომატურად
watch(
    () => product.images,
    (images) => {
        if (!images || images.length === 0) return;

        const main = images.find((img) => img.is_main);
        activeImage.value = main ? main.path : images[0].path;
    },
    { immediate: true }
);
</script>
<style scoped>
.info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* MAIN IMAGE */
.main-image img {
    width: 100%;
    height: 380px;
    object-fit: cover;
    border-radius: 16px;
    background: #f3f3f3;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
    transition: opacity 0.25s ease;
}

/* THUMBNAILS */
.thumbnails {
    display: flex;
    gap: 10px;
}

.thumbnails img {
    width: 72px;
    height: 72px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0.5;
    border: 2px solid transparent;
    transition: all 0.2s ease;
}

.thumbnails img:hover,
.thumbnails img.active {
    opacity: 1;
    border-color: #fdfdfd;
    transform: scale(1.05);
}

/* TEXT */
.product-title {
    font-size: 28px;
    font-weight: 700;
}

.product-description {
    color: #eeebeb;
    line-height: 1.6;
}

.product-price {
    font-size: 26px;
    font-weight: 700;
    color: #061429;
}

.product-card {
    position: relative;
}

/* BACK BUTTON */
.back-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 18px;
    border-radius: 999px;
    border: none;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);

    color: #111;
    font-weight: 500;
    font-size: 14px;

    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    transition: all 0.25s ease;
}

/* HOVER */
.back-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.18);
}

/* ACTIVE */
.back-btn:active {
    transform: translateY(0);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

/* MOBILE */
@media (max-width: 768px) {
    .back-btn {
        top: 12px;
        right: 12px;
        padding: 8px 14px;
        font-size: 13px;
    }
}

/* ENTRY ANIMATION */
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
