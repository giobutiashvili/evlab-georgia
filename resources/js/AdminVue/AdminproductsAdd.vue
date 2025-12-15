<template>
    <div
        class="admin-products-add d-flex justify-content-center align-items-center mt-4 pt-4 bg-gradient"
    >
        <form
            class="admin-products-add-form-container p-4 rounded shadow text-center"
            @submit.prevent="products()"
        >
            <h2 class="admin-products-add-title mb-4">Add New Product</h2>
            <div>
                <label for="productImage" class="form-label"
                    >Product Image</label
                >
                <input
                    type="file"
                    id="productImage"
                    class="form-control mb-3"
                    accept="image/*"
                    @change="productImage"
                    required
                    ref="imgeInput"
                />
            </div>
            <div class="mb-3 text-start">
                <label for="productName" class="form-label">Product Name</label>
                <input
                    v-model="name"
                    type="text"
                    id="productName"
                    class="form-control"
                    placeholder="Enter product name"
                    required
                />
            </div>
            <div class="mb-3 text-start">
                <label for="productPrice" class="form-label"
                    >Product Price</label
                >
                <input
                    v-model="price"
                    type="number"
                    id="productPrice"
                    class="form-control"
                    placeholder="Enter product price"
                    required
                />
            </div>
            <div class="mb-3 text-start">
                <label for="productDescription" class="form-label"
                    >Product Description</label
                >
                <textarea
                    v-model="description"
                    id="productDescription"
                    class="form-control"
                    rows="4"
                    placeholder="Enter product description"
                    required
                ></textarea>
            </div>
            <button type="submit" class="btn btn-gradient w-100">
                Add Product
            </button>
        </form>
    </div>
</template>

<script setup="">
import { ref } from "vue";
import axios from "axios";

const image = ref(null);
const imgeInput = ref(null);
const name = ref("");
const price = ref("");
const description = ref("");

const productImage = (event) => {
    image.value = event.target.files[0];
};

const products = async () => {
    const formData = new FormData();
    formData.append("image", image.value);
    formData.append("name", name.value);
    formData.append("price", price.value);
    formData.append("description", description.value);
    try {
        const token = localStorage.getItem("adminToken");
        const response = await axios.post(
            "http://127.0.0.1:8000/api/admin/products",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        image.value = null;
        name.value = "";
        price.value = "";
        description.value = "";

        console.log("Product added successfully:", response.data);
    } catch (error) {
        console.error("Error adding product:", error);
    }
};
</script>
