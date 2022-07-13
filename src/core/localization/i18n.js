import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

import en from "./en/Translation.json";
import fa from "./fa/Translation.json";


const apiKey = "vXVhDMc4dq_ci-GbuYIRiQ";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;
const fallbackLng = ["fa"];
const availableLanguages = ["fa", "en"];


// the translations
const resources = {
    en: {
        translation: en,
    },

    fa: {
        translation: fa,
    },
};
i18next
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",

        ns: ["default"],
        defaultNS: "default",

        supportedLngs: ["en", "fa"],
        detection: {
            order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
            caches: ["cookie"],
        },
        resources,
        backend: {
            loadPath: "../localization/{{lng}}/Translation.json",
        },
        react: {
            useSuspense: false
        }
    })