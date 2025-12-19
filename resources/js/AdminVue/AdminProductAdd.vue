<template>
    <div
        class="admin-products-add d-flex justify-content-center align-items-center pt-4 bg-gradient"
    >
        <form
            class="admin-products-add-form-container mt-4 pt-4 mb-4 rounded shadow text-center"
            @submit.prevent="products()"
        >
            <h2 class="admin-products-add-title mb-4">Add New Product</h2>
            <div>
                <label for="productImage" class="form-label"
                    >Product Image</label
                >
                <div v-if="previews.length">
                    <div
                        v-for="(src, index) in previews"
                        :key="index"
                        class="d-flex gap-3 align-items-center"
                    >
                        <img :src="src" width="50" />
                        <button
                            class="btn btn-danger btn-small"
                            @click="removeFile(index)"
                        >
                            X
                        </button>
                    </div>
                </div>
                <input
                    type="file"
                    id="productImage"
                    class="form-control mb-3"
                    accept="image/*"
                    multiple
                    @change="handleFiles"
                    required
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
            <button type="submit" class="btn btn-success w-50 mb-3">
                Add Product
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const files = ref([]); // ყველა სურათი array-ში (single ან multiple)
const previews = ref([]); // preview URLs
const name = ref(""); // product name
const price = ref(""); // product price
const description = ref(""); // product description

const handleFiles = (event) => {
    const selectedFiles = Array.from(event.target.files); // single ან multiple
    files.value = selectedFiles;

    // Previews generate
    previews.value = selectedFiles.map((file) => URL.createObjectURL(file));
};
const removeFile = (index) => {
    files.value.splice(index, 1);
    previews.value.splice(index, 1);
};

const products = async () => {
    const formData = new FormData();

    // Attach files
    files.value.forEach((file) => {
        formData.append("images[]", file); // backend understands first file = main_image
    });

    // Attach product data
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

        console.log("Product added successfully:", response.data);

        // Reset form
        files.value = [];
        previews.value = [];
        name.value = "";
        price.value = "";
        description.value = "";
    } catch (error) {
        console.error("Error adding product:", error);
    }
};
</script>
