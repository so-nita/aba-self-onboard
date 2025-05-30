import { createApp } from 'vue';
import './assets/base.css';
import App from './App.vue';
import router from './routers/Routers';
import { createPinia } from 'pinia';



const pinia = createPinia()
const app = createApp(App)

// const app = createApp(App);
// const pinia = createPinia();

// Register Pinia and Router before mounting the app
app.use(pinia);
app.use(router);
// createThemeProvider(); // Enable global dark mode
app.mount('#app');
