import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ka from "./locales/ka.json";

export const i18n = createI18n({
    legacy: false,
    locale: "ka",
    fallbackLocale: "en",
    messages: {
        ka,
        en,
    },
    locale: localStorage.getItem("lang") || "ka",
});
