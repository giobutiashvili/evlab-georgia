<template>
    <div class="container my-5">
        <div v-if="product" class="product-card">
            <button class="back-btn" @click="$router.back()">← Back</button>
            <div class="row h-100 align-items-center">
                <!-- IMAGE -->
                <div class="col-md-6 image-wrapper">
                    <img
                        :src="
                            product.image
                                ? `/storage/${product.image}`
                                : '/placeholder.png'
                        "
                        :alt="product.name"
                    />
                </div>

                <div class="col-md-6 info-wrapper">
                    <h2 class="product-title">{{ product.name }}</h2>

                    <p class="product-description">
                        {{ product.description }}
                    </p>

                    <div class="product-price">{{ product.price }} ₾</div>
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
import { ref, onMounted } from "vue";
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
</script>
<style scoped>
/* CARD */
.product-card {
    min-height: 80vh;
    background: linear-gradient(135deg, #ffffff, #f9fafb);
    border-radius: 24px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
    padding: 50px;
    display: flex;
    align-items: center;
    animation: fadeUp 0.6s ease;
}

/* IMAGE WRAPPER */
.image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

/* IMAGE */
.image-wrapper img {
    width: 100%;
    max-height: 600px;
    object-fit: contain;
    background: radial-gradient(circle, #f1f3f5, #e9ecef);
    padding: 40px;
    border-radius: 24px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* IMAGE HOVER */
.image-wrapper img:hover {
    transform: scale(1.08);
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.18);
}

/* INFO */
.info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-left: 30px;
}

/* TITLE */
.product-title {
    font-size: 2.4rem;
    font-weight: 800;
    margin-bottom: 25px;
    letter-spacing: -0.5px;
}

/* DESCRIPTION */
.product-description {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #6c757d;
    max-height: 220px;
    overflow: hidden;
}

/* PRICE */
.product-price {
    margin-top: 30px;
    font-size: 1.8rem;
    font-weight: 700;
    color: #0d6efd;
}

/* LOADING */
.loading-wrapper {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
