<template>
    <footer class="site-footer text-white pt-5 pb-4">
        <div class="container">
            <div class="row">
                <!-- LOGO -->
                <div class="col-md-4 mb-4 text-center text-md-start">
                    <img
                        :src="evlabLogo"
                        alt="EvLab"
                        class="footer-logo mb-3"
                    />
                </div>

                <!-- LINKS -->
                <div class="col-md-4 mb-4">
                    <div class="row">
                        <div class="col-6">
                            <h6 class="footer-title">Products</h6>
                            <ul class="list-unstyled footer-list">
                                <li>
                                    <a href="#" class="footer-link"
                                        >Home Chargers</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="footer-link"
                                        >Fast Chargers</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="footer-link"
                                        >Smart Chargers</a
                                    >
                                </li>
                            </ul>
                        </div>

                        <div class="col-6">
                            <h6 class="footer-title">Support</h6>
                            <ul class="list-unstyled footer-list">
                                <li>
                                    <a href="#" class="footer-link"
                                        >Installation Guide</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="footer-link"
                                        >User Manual</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="footer-link">Warranty</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- CONTACT INFO -->
                <div class="col-md-4 mb-4">
                    <h6 class="footer-title">Contact</h6>
                    <p class="footer-contact">+995 599 75 09 86</p>
                    <p class="footer-contact">gioushu@mail.ru</p>
                    <p class="footer-contact">Tbilisi, Georgia</p>
                </div>
            </div>

            <hr class="footer-divider" />

            <div class="text-center small footer-bottom">
                © 2025 EvLab — All rights reserved.
            </div>
        </div>
    </footer>
</template>

<script setup>
import evlabLogo from "@/../images/ac.avif";
</script>

<style scoped>
/* MAIN BACKGROUND */
.site-footer {
    background: linear-gradient(180deg, #1f1f27, #0f1115);
    backdrop-filter: blur(8px);
    box-shadow: 0 -4px 20px rgba(6, 214, 160, 0.2);
}

/* TITLES */
.footer-title {
    text-transform: uppercase;
    font-weight: 700;
    color: #06d6a0;
    margin-bottom: 12px;
}

/* LOGO EFFECT */
.footer-logo {
    max-width: 140px;
    transition: 0.3s ease;
    animation: footerLogoGlow 3s infinite alternate;
}
@keyframes footerLogoGlow {
    0% {
        filter: drop-shadow(0 0 0 rgba(6, 214, 160, 0));
        transform: scale(1);
    }
    100% {
        filter: drop-shadow(0 0 12px rgba(6, 214, 160, 0.8))
            drop-shadow(0 0 20px rgba(6, 214, 160, 0.4));
        transform: scale(1.04);
    }
}

/* LINKS */
.footer-link {
    color: #9ca3af;
    text-decoration: none;
    transition: 0.25s ease;
    display: inline-block;
    padding: 2px 0;
}

/* NEON HOVER */
.footer-link:hover {
    color: #06d6a0;
    transform: translateX(4px);
    text-shadow: 0 0 6px rgba(6, 214, 160, 0.7);
}

/* CONTACT TEXT EFFECTS */
.footer-contact {
    color: #c7c7c7;
    transition: 0.3s ease;
}
.footer-contact:hover {
    color: #06d6a0;
    transform: translateX(4px);
    text-shadow: 0 0 8px rgba(6, 214, 160, 0.6);
}

/* DIVIDER */
.footer-divider {
    border-color: rgba(255, 255, 255, 0.2);
}

/* BOTTOM TEXT */
.footer-bottom {
    color: #9ca3af;
}

/* RESPONSIVE LOGO */
@media (max-width: 767px) {
    .footer-logo {
        max-width: 120px;
        margin: 0 auto;
    }
}
</style>
