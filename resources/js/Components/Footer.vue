<template>
    <footer class="site-footer bg-dark text-white pt-5 pb-4">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <img
                        :src="evlabLogo"
                        alt="EvLab"
                        class="footer-logo mb-3"
                    />
                    <p class="text-muted small">
                        Leading the electric revolution with innovative charging
                        solutions.
                    </p>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="row">
                        <div class="col-6">
                            <h6 class="text-uppercase fw-bold">Products</h6>
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
                            <h6 class="text-uppercase fw-bold">Support</h6>
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

                <div class="col-md-4 mb-4">
                    <h6 class="text-uppercase fw-bold">Contact</h6>
                    <p class="d-flex align-items-center mb-2">
                        +995 599 75 09 86
                    </p>
                    <p class="d-flex align-items-center mb-2">
                        gioushu@mail.ru
                    </p>
                    <p class="d-flex align-items-center mb-3">
                        Tbilisi, Georgia
                    </p>
                </div>
            </div>

            <hr class="border-secondary" />

            <div class="text-center small">
                © 2025 EvLab — All rights reserved.
            </div>
        </div>
    </footer>
</template>

<script setup>
import evlabLogo from "../../images/ac.avif";
</script>

<style scoped>
.site-footer {
    background: linear-gradient(180deg, #24252a, #1f2937);
}
.footer-logo {
    max-width: 140px;
    height: auto;
    display: block;
}
.footer-list {
    margin-top: 0.5rem;
}
.footer-link {
    color: #9ca3af;
    text-decoration: none;
}
.footer-link:hover {
    color: #9ca3af;
    text-decoration: underline;
}

@media (max-width: 767.98px) {
    .footer-logo {
        max-width: 120px;
        margin: 0 auto;
    }
}
</style>
