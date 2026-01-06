<template>
    <div class="container mt-4">
        <h3 class="mb-4">Edit Product</h3>

        <form @submit.prevent="updateProduct" class="card p-4 shadow-sm">
            <!-- Name -->
            <div class="mb-3">
                <label class="form-label">Product Name</label>
                <input
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    required
                />
            </div>

            <!-- Price -->
            <div class="mb-3">
                <label class="form-label">Price</label>
                <input
                    v-model="form.price"
                    type="number"
                    class="form-control"
                    required
                />
            </div>

            <!-- Description -->
            <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea
                    v-model="form.description"
                    class="form-control"
                    rows="4"
                    required
                ></textarea>
            </div>

            <!-- Current Image -->
            <div class="mb-3" v-if="form.image">
                <label class="form-label">Current Image</label><br />
                <img :src="form.image" width="120" class="rounded mb-2" />
            </div>
            <!-- New Image -->
            <div class="mb-3">
                <label class="form-label">Change Image (optional)</label>
                <input
                    type="file"
                    class="form-control"
                    accept="image/*"
                    @change="handleImage"
                />
            </div>
            <button class="btn btn-success">Update Product</button>
            <router-link to="/admin/dashboard" class="btn btn-secondary ms-2">
                Cancel
            </router-link>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const productId = route.params.id;

const form = ref({
    name: "",
    price: "",
    description: "",
    image: "",
});

const newImage = ref(null);
const handleImage = (e) => {
    newImage.value = e.target.files[0];
};
const API_URL = import.meta.env.VITE_API_URL;

const fetchProduct = async () => {
    try {
        const token = localStorage.getItem("adminToken");
        const res = await axios.get(
            `${API_URL}/api/admin/products/${productId}`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        const data = res.data;

        const mainImage = data.images?.find((img) => img.is_main);

        form.value = {
            name: data.name,
            price: data.price,
            description: data.description,
            image: mainImage ? `${API_URL}/storage/${mainImage.path}` : "",
        };

        console.log("Fetched product:", form.value);
    } catch (err) {
        console.error(err.response?.data || err);
    }
};

const updateProduct = async () => {
    console.log("Updating product with data:", form.value);
    const token = localStorage.getItem("adminToken");
    const formData = new FormData();
    formData.append("name", form.value.name);
    formData.append("price", form.value.price);
    formData.append("description", form.value.description);

    // Append the new image if it exists
    if (newImage.value) {
        formData.append("image", newImage.value);
    }

    try {
        await axios.post(
            `${API_URL}/api/admin/products/${productId}`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        router.push({ name: "AdminDashboard" });
    } catch (err) {
        console.error("Error updating product:", err.response?.data || err);
    }
};

onMounted(fetchProduct);
</script>
