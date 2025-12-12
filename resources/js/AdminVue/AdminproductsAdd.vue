<template>
    <div
        class="admin-products-add d-flex justify-content-center align-items-center mt-4 pt-4 bg-gradient"
    >
        <form
            class="admin-products-add-form-container p-4 rounded shadow text-center"
        >
            <h2 class="admin-products-add-title mb-4">Add New Product</h2>
            <div class="mb-3 text-start">
                <label for="productName" class="form-label">Product Name</label>
                <input
                    type="text"
                    id="productName"
                    class="form-control"
                    placeholder="Enter product name"
                />
            </div>
            <div class="mb-3 text-start">
                <label for="productPrice" class="form-label"
                    >Product Price</label
                >
                <input
                    type="number"
                    id="productPrice"
                    class="form-control"
                    placeholder="Enter product price"
                />
            </div>
            <div class="mb-3 text-start">
                <label for="productDescription" class="form-label"
                    >Product Description</label
                >
                <textarea
                    id="productDescription"
                    class="form-control"
                    rows="4"
                    placeholder="Enter product description"
                ></textarea>
            </div>
            <button type="submit" class="btn btn-gradient w-100">
                Add Product
            </button>
        </form>
    </div>
</template>
