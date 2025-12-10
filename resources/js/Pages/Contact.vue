<template>
    <section class="contact-page">
        <div class="container flex-column">
            <div class="contact-info">
                <h2>Contact Us</h2>
                <p><strong>Address:</strong> EV-Lab Georgia</p>
                <p><strong>Phone:</strong> +995 XXX XXX XXX</p>
                <p><strong>Email:</strong> info@evlab.ge</p>
            </div>

            <div class="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.123456!2d44.8260866!3d41.7750494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d62556da19d%3A0xa82b9ec0f7949790!2sEV-Lab+Georgia!5e0!3m2!1sen!2sge!4v1234567890!5m2!1sen!2sge"
                    width="100%"
                    height="400"
                    style="border: 0"
                    loading="lazy"
                >
                </iframe>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-page .container {
    display: flex;
    flex-wrap: wrap; /* აუცილებელია mobile-ზე ჩამოსასხმელად */
    gap: 20px;
    padding: 50px 20px;
    justify-content: space-between;
}

.contact-info,
.map {
    flex: 1 1 48%; /* desktop-ზე დაახლოებით 50%-50% */
    min-width: 300px; /* mobile-ზე სწორი შეკუმშვისთვის */
}

.contact-info h2 {
    font-size: 32px;
    margin-bottom: 20px;
}

.contact-info p {
    font-size: 18px;
    margin-bottom: 10px;
}

/* Mobile-სთვის */
@media (max-width: 768px) {
    .contact-info,
    .map {
        flex: 1 1 100%; /* mobile-ზე 100% და ქვემოთ ჩადგება */
    }
}
</style>
