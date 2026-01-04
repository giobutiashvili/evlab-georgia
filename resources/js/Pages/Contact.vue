<template>
    <section class="contact-page">
        <div class="container">
            <div class="top-row">
                <!-- Contact Form -->
                <div class="contact-form">
                    <h2>{{ $t("send_us_message") }}</h2>
                    <form>
                        <div class="form-group">
                            <input
                                type="text"
                                :placeholder="$t('your_name')"
                                id="name"
                                required
                                maxlength="20"
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="email"
                                :placeholder="$t('your_email')"
                                id="email"
                                required
                                maxlength="30"
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="phone"
                                :placeholder="$t('your_phone')"
                                id="phone"
                                required
                                maxlength="30"
                            />
                        </div>
                        <div class="form-group">
                            <textarea
                                :placeholder="$t('your_message')"
                                id="message"
                                required
                                maxlength="500"
                            ></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit">
                                {{ $t("send_message") }}
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Contact Info -->
                <div class="contact-info">
                    <h2>{{ $t("contact") }}</h2>
                    <p @click="openmap" class="map-link">
                        <i class="fas fa-map-marker-alt"></i> EV-Lab Georgia
                    </p>
                    <p><i class="fas fa-phone"></i> +995 599 75 09 86</p>
                    <p><i class="fas fa-envelope"></i> evlabge@gmail.com</p>
                    <div>
                        <img style="width: 100%" :src="contactimg" alt="" />
                    </div>
                </div>
            </div>

            <!-- Map -->
            <div class="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.123456!2d44.8260866!3d41.7750494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d62556da19d%3A0xa82b9ec0f7949790!2sEV-Lab+Georgia!5e0!3m2!1sen!2sge!4v1234567890!5m2!1sen!2sge"
                    width="100%"
                    height="400"
                    style="border: 0"
                    allowfullscreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    </section>
</template>
<script setup>
import contactimg from "../../images/Schn.png";
let location = "EV-Lab Georgia, Tbilisi, Georgia";
const openmap = () => {
    const query = encodeURIComponent(location);
    const url = `https://www.google.com/maps/dir//EV-Lab+Georgia+25a+Tbilisi/@41.7750291,44.8260938,58m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x40446d62556da19d:0xa82b9ec0f7949790!2m2!1d44.8260866!2d41.7750494?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D`;
    window.open(url, "_blank");
};
</script>

<style scoped>
.contact-page {
    background-image: url("../../images/images2.webp"); /* გზა შენი სურათის */
    background-size: cover;
    background-position: center; /* შუაში გამოდის */
    background-repeat: no-repeat;
    object-fit: cover;
}

/* Container */
.container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

/* Top row: Form + Info */
.top-row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
}

/* Form & Info columns */
.contact-form,
.contact-info {
    flex: 1 1 48%; /* desktop: roughly 50%-50% */
    min-width: 280px;
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Form Styling */
.contact-form h2 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #333;
}

.form-group {
    margin-bottom: 15px;
}
textarea {
    resize: none !important;
}
.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #667eea;
    box-shadow: 0 0 8px rgba(102, 126, 234, 0.3);
}

.form-group textarea {
    min-height: 120px;
    resize: vertical;
}

.form-group button {
    width: 50%;
    padding: 14px;
    border: none;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: #fff;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

.form-group button:hover {
    opacity: 0.9;
}

/* Contact Info Styling */
.contact-info h2 {
    font-size: 28px;
    margin-bottom: 15px;
    color: #333;
}

.contact-info p {
    font-size: 17px;
    margin: 8px 0;
    color: #555;
    line-height: 1.6;
}

/* Map Styling */
.map-link {
    cursor: pointer;
    color: #06d6a0;
    transition: color 0.3s, text-shadow 0.3s;
    text-shadow: 0 0 5px rgba(6, 214, 160, 0.7);
}
.map-link:hover {
    color: #1b9aaa;
    text-shadow: 0 0 5px rgba(6, 214, 160, 0.7);
}
.map iframe {
    border-radius: 12px;
    width: 100%;
    height: 400px;
}

/* Mobile */
@media (max-width: 768px) {
    .top-row {
        flex-direction: column;
    }

    .contact-form,
    .contact-info {
        flex: 1 1 100%;
    }

    .contact-form h2,
    .contact-info h2 {
        font-size: 24px;
        text-align: center;
    }

    .form-group input,
    .form-group textarea {
        font-size: 15px;
        padding: 10px 12px;
    }

    .form-group button {
        font-size: 16px;
        padding: 12px;
    }
}
</style>
