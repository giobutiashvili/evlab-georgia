<template>
    <div
        class="admin-dashboard d-flex justify-content-center align-items-center mt-4 pt-4 bg-gradient"
    >
        <form
            class="admin-login-form-container p-4 rounded shadow text-center"
            @submit.prevent="login"
        >
            <h2 class="admin-login-title mb-4">Admin Login</h2>
            <input
                v-model="username"
                type="text"
                placeholder="Username"
                class="form-control mb-3"
            />
            <input
                v-model="email"
                type="email"
                placeholder="Email"
                class="form-control mb-3"
            />
            <input
                v-model="password"
                type="password"
                placeholder="Password"
                class="form-control mb-3"
            />
            <button type="submit" class="btn btn-gradient w-100">Login</button>
        </form>
        <p v-if="errorMessage" class="error-message mt-3">{{ errorMessage }}</p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const email = ref("");
const errorMessage = ref("");

const login = async () => {
    errorMessage.value = "";
    try {
        const resp = await axios.post(`${API_URL}/api/admin/login`, {
            username: username.value,
            email: email.value,
            password: password.value,
        });
        localStorage.setItem("adminToken", resp.data.token);
        router.push({ name: "AdminDashboard" });
    } catch (error) {
        if (
            error.response &&
            error.response.data &&
            error.response.data.message
        ) {
            errorMessage.value = error.response.data.message;
        } else {
            errorMessage.value = "Login failed. Please try again.";
        }
    }
};
</script>

<style scoped>
.admin-login-form-container {
    width: 320px;
    background-color: rgba(255, 255, 255, 0.95);
}

.admin-login-title {
    font-size: 24px;
    font-weight: 700;
    color: #333;
}

/* Gradient button */
.btn-gradient {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: #fff;
    font-weight: 600;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
}

.btn-gradient:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(102, 126, 234, 0.5);
}
.error-message {
    color: #ff6b6b;
    font-weight: 500;
    animation: fadeInShake 0.7s ease;
}

/* ანიმაცია: ნელ-ნელა ჩნდება და მსუბუქად აქანავებს */
@keyframes fadeInShake {
    0% {
        opacity: 0;
        transform: translateX(0);
    }
    20% {
        opacity: 1;
        transform: translateX(-5px);
    }
    40% {
        transform: translateX(5px);
    }
    60% {
        transform: translateX(-5px);
    }
    80% {
        transform: translateX(5px);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
