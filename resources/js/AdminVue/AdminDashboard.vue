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
                                product.images
                                    ? `/storage/${product.images[0].path}`
                                    : '/placeholder.png'
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

const products = ref([]);

const fetchProducts = async () => {
    const token = localStorage.getItem("adminToken");

    const res = await axios.get("http://127.0.0.1:8000/api/admin/products", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    products.value = res.data;
    console.log("helloo", products.value);
};

const deleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    const token = localStorage.getItem("adminToken");

    await axios.delete(`http://127.0.0.1:8000/api/admin/products/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    // refresh list
    products.value = products.value.filter((p) => p.id !== id);
};

onMounted(fetchProducts);
</script>
