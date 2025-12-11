import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Flag Icons
import 'flag-icons/css/flag-icons.min.css';
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Bootstrap Icon
import '@fortawesome/fontawesome-free/css/all.min.css';


createApp(App).use(router).mount('#app');
