<template>
    <section class="about-section">
        <!-- BLUR GLASS CARD -->
        <div class="glass-card">
            <h1 class="logo-title">EV-Lab Georgia</h1>

            <p>
                EV-Lab Georgia was founded in 2016 with a clear mission — to
                design and manufacture reliable EV charging systems for both
                local and international markets.
            </p>

            <p>
                Our production facility delivers high-quality, durable and
                customizable solutions that meet modern electric mobility
                standards. We continue to expand our expertise to support the
                rapidly growing EV industry.
            </p>
        </div>
    </section>
</template>

<script setup>
import aboutimg from "../../images/evlabimage.png"; // background image
</script>

<style scoped>
/* SECTION WITH BACKGROUND */
.about-section {
    min-height: 100vh;
    padding: 100px 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url("../../images/evlabimage.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* slight dark overlay */
    position: relative;
}

.about-section::before {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(4px); /* BLUR FULL BACKGROUND */
    background: rgba(0, 0, 0, 0.25); /* dark overlay */
}

/* GLASS CARD */
.glass-card {
    position: relative;
    z-index: 5;

    max-width: 700px;
    padding: 40px 35px;

    border-radius: 18px;
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.12);

    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
    color: white;
    text-align: center;

    animation: fadeIn 1s ease forwards;
    opacity: 0;
}

/* LOGO TITLE (CRISP, NO BLUR!!) */
.logo-title {
    font-size: 45px;
    font-weight: 700;
    margin-bottom: 25px;

    text-shadow: 0 0 12px rgba(255, 255, 255, 0.7),
        0 0 25px rgba(0, 255, 200, 0.6);
}

/* TEXT */
.glass-card p {
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 18px;
    color: #f1f1f1;
}

/* ANIMATION */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* RESPONSIVE */
@media (max-width: 760px) {
    .logo-title {
        font-size: 34px;
    }

    .glass-card {
        padding: 30px 20px;
    }

    .glass-card p {
        font-size: 16px;
    }
}
</style>
