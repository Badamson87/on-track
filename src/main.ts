import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

console.log(store)
createApp(App).use(store).use(ElementPlus).use(router, ElementPlus).mount("#app");

