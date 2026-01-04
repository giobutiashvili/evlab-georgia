import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ka from "./locales/ka.json";

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("lang") || "ka",
    fallbackLocale: "en",
    messages: {
        ka,
        en,
    },
});

export default i18n;
