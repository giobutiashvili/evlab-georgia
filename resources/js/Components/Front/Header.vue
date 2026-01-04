<template>
    <nav
        class="navbar navbarheader navbar-expand-lg navbar-light bg-light shadow-sm"
    >
        <div class="container d-flex align-items-center">
            <a class="navbar-brand d-flex align-items-center" href="/home">
                <img
                    fetchpriority="high"
                    sizes="162px"
                    srcset="
                        https://static.wixstatic.com/media/187e49_a58c998bd04d42a09bae63b05c3dbd76~mv2.png/v1/crop/x_0,y_0,w_382,h_305/fill/w_162,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ac.png 1x,
                        https://static.wixstatic.com/media/187e49_a58c998bd04d42a09bae63b05c3dbd76~mv2.png/v1/crop/x_0,y_0,w_382,h_305/fill/w_324,h_258,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ac.png 2x
                    "
                    id="img_comp-jvuhvl932"
                    src="https://static.wixstatic.com/media/187e49_a58c998bd04d42a09bae63b05c3dbd76~mv2.png/v1/crop/x_0,y_0,w_382,h_305/fill/w_162,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ac.png"
                    alt="ac.png"
                    class="BI8PVQ Tj01hh"
                    width="162"
                    height="129"
                    style="object-fit: cover"
                />
            </a>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
                aria-controls="mainNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mainNavbar">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/home"
                            >Home</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products"
                            >Products</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about"
                            >About</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact"
                            >Contact</router-link
                        >
                    </li>
                </ul>

                <div
                    class="d-flex gap-3 align-items-center ms-lg-3 language-switcher"
                >
                    <button
                        class="btn btn-link p-0"
                        aria-label="Georgian"
                        @click="changeLang('ge')"
                    >
                        <span class="fi fi-ge" style="font-size: 20px"></span>
                    </button>
                    <button
                        class="btn btn-link p-0"
                        aria-label="English"
                        @click="changeLang('en')"
                    >
                        <span class="fi fi-us" style="font-size: 20px"></span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const changeLang = (lang) => {
    locale.value = lang;
    localStorage.setItem("lang", lang);
};
</script>

<style scoped>
.navbarheader {
    background: linear-gradient(135deg, #6a5acd 0%, #8a2be2 100%);
    backdrop-filter: blur(8px);
}

.navbar-nav {
    display: flex;
    gap: 0.9rem;
    align-items: center;
}

.nav-item .nav-link {
    width: 90px;
    text-align: center;
    color: #f5f4fa;
    padding: 0.45rem 0.85rem;
    border-radius: 0.7rem;
    transition: all 0.25s ease;
    display: inline-block;
    font-weight: 500;
}

/* --- Hover Effect: Soft Glow + Lift --- */
.nav-item .nav-link:hover {
    background: rgba(255, 255, 255, 0.18);
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(255, 255, 255, 0.18);
}

/* --- Active Route: Neon Border + Stronger Glow --- */
.nav-item .nav-link.router-link-active,
.nav-item .nav-link.router-link-exact-active {
    background: rgba(255, 255, 255, 0.25);
    color: #ffffff;

    box-shadow: 0 0 26px rgba(6, 214, 160, 0.7);
    transform: translateY(-2px);
}

.language-switcher span {
    width: 40px;
    height: 40px;
    transition: transform 0.2s ease, filter 0.2s ease;
}

/* Flags hover */
.language-switcher span:hover {
    transform: scale(1.2);
    filter: brightness(1.2);
}
#img_comp-jvuhvl932 {
    animation: logoGlow 2.5s infinite alternate;
    transition: all 0.3s ease;
}

@keyframes logoGlow {
    0% {
        filter: drop-shadow(0 0 0 rgba(6, 214, 160, 0));
        transform: scale(1);
    }
    50% {
        filter: drop-shadow(0 0 10px rgba(6, 214, 160, 0.7))
            drop-shadow(0 0 20px rgba(6, 214, 160, 0.4));
        transform: scale(1.03);
    }
    100% {
        filter: drop-shadow(0 0 0 rgba(6, 214, 160, 0));
        transform: scale(1);
    }
}
</style>
