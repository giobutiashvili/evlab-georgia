<template>
    <section class="hero-section">
        <div class="hero-container">
            <div class="hero-left">
                <img :src="homeimg" alt="EV Logo" />
            </div>

            <div class="hero-right">
                <h1>Power the Future with Smart EV Charging</h1>
                <p>
                    Explore high-performance EV charging solutions built for
                    homes, businesses, and public locations. Fast, reliable and
                    future-ready.
                </p>
                <button class="cta-btn">Browse Catalog</button>
            </div>
        </div>
    </section>
</template>
<script setup>
import homeimg from "../../images/homelogo.png";
</script>
<style scoped>
.hero-section {
    padding: 3rem 1rem;
}

.hero-container {
    max-width: 1300px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
}

/* LEFT IMAGE */
.hero-left {
    flex: 1;
    display: flex;
    justify-content: center;
}

.hero-left img {
    width: 100%;
    max-width: 880px;
    border-radius: 20px;
    object-fit: contain;
}

/* RIGHT TEXT */
.hero-right {
    flex: 1;
}

.hero-right h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.2;
    color: #06d6a0; /* base color */
    animation: glowPulse 1s infinite alternate; /* 1 წამიანი ციკლი */
    transition: color 0.3s ease;
}

/* Keyframes for glowing text color */
@keyframes glowPulse {
    0% {
        color: #06d6a0; /* normal color */
        text-shadow: 0 0 0 rgba(6, 214, 160, 0);
    }
    50% {
        color: #1effc2; /* brighter glow */
        text-shadow: 0 0 8px rgba(6, 214, 160, 0.7),
            0 0 15px rgba(6, 214, 160, 0.5);
    }
    100% {
        color: #06d6a0; /* back to normal */
        text-shadow: 0 0 0 rgba(6, 214, 160, 0);
    }
}

.hero-right p {
    font-size: 1.2rem;
    color: #fff;
    margin: 1.2rem 0 2rem;
    max-width: 500px;
}

.cta-btn {
    padding: 0.9rem 2.2rem;
    font-size: 1.15rem;
    font-weight: 700;
    color: #fff;
    border: none;
    border-radius: 50px;
    background: linear-gradient(135deg, #06d6a0, #1b9aaa); /* gradient */
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 0 6px 15px rgba(6, 214, 160, 0.4);
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.4); /* subtle glow */
}

/* Hover Effect */
.cta-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 20px rgba(6, 214, 160, 0.5);
    background: linear-gradient(135deg, #05c895, #1599b0);
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6); /* glow slightly stronger */
}

/* TABLET */
@media (max-width: 992px) {
    .hero-right h1 {
        font-size: 2.5rem;
    }
    .hero-left img {
        max-width: 480px;
    }
}

/* MOBILE */
@media (max-width: 768px) {
    .hero-container {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }

    .hero-right h1 {
        font-size: 2.2rem;
    }

    .hero-right p {
        font-size: 1rem;
        margin: 1rem auto;
        max-width: 90%;
    }

    .hero-left img {
        max-width: 320px;
    }
}

/* SMALL MOBILE (<450px) */
@media (max-width: 450px) {
    .hero-right h1 {
        font-size: 1.9rem;
    }
    .cta-btn {
        width: 50%;
        padding: 0.9rem 0;
        font-size: 1rem;
        border-radius: 35px;
    }
}
</style>
