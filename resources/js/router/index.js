import { createRouter, createWebHistory } from 'vue-router';

// აქ შემოიტანე Pages ფაილები
import Home from '../Pages/Home.vue';
import Products from '../Pages/Products.vue'
import AboutUs from '../Pages/AboutUs.vue';
import Contact from '../Pages/Contact.vue';

// define routes
const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: Contact },
];

// create router
const router = createRouter({
  history: createWebHistory(), // Browser History mode
  routes,
});

export default router;
