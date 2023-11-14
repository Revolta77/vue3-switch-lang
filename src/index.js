import SwitchLang from "./components/SwitchLang.vue";

export default {
    install: (app, options) => {
        app.component('SwitchLang', SwitchLang);
    },
};