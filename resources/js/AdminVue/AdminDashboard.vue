<template>
    <div class="container mt-4 mb-5">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h3>Products</h3>
            <router-link to="/admin/product/create" class="btn btn-primary">
                ➕ Add Product
            </router-link>
        </div>

        <table class="table table-bordered align-middle">
            <thead class="table-light">
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr v-if="products.length === 0">
                    <td colspan="5" class="text-center">No products found</td>
                </tr>

                <tr v-for="(product, index) in products" :key="product.id">
                    <td>{{ index + 1 }}</td>

                    <td>
                        <img
                            :src="
                                resolveImage(
                                    product.images && product.images.length > 0
                                        ? product.images[0]?.url ||
                                              product.images[0]?.path
                                        : null
                                )
                            "
                            alt="product"
                            width="60"
                            height="60"
                            class="rounded object-fit-cover"
                        />
                    </td>

                    <td>{{ product.name }}</td>
                    <td>{{ product.price }} ₾</td>

                    <td class="text-center">
                        <router-link
                            :to="{
                                name: 'AdminProductEdit',
                                params: { id: product.id },
                            }"
                            class="btn btn-sm btn-warning me-2"
                        >
                            Edit
                        </router-link>

                        <button
                            class="btn btn-sm btn-danger"
                            @click="deleteProduct(product.id)"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
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

const fetchProducts = async () => {
    const token = localStorage.getItem("adminToken");

    const res = await axios.get(`${API_URL}/api/admin/products`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    products.value = res.data;
    console.log("products value", products.value);
};

const deleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    const token = localStorage.getItem("adminToken");

    await axios.delete(`${API_URL}/api/admin/products/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    // refresh list
    products.value = products.value.filter((p) => p.id !== id);
};

onMounted(fetchProducts);
</script>
