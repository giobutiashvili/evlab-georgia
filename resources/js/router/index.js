import { createRouter, createWebHistory } from 'vue-router';

// აქ შემოიტანე Pages ფაილები
import Home from '../Pages/Home.vue';
import Products from '../Pages/Products.vue'
import AboutUs from '../Pages/AboutUs.vue';
import Contact from '../Pages/Contact.vue';
import AdminDashboard from '../AdminVue/AdminDashboard.vue';
import AdminproductsAdd from '@/AdminVue/AdminproductsAdd.vue';

// define routes
const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: Contact },
  { path: '/admin', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/admin/products', name: 'AdminProductsAdd', component: AdminproductsAdd,
  meta: { requiresAdmin: true } }

  
];

// create router
const router = createRouter({
  history: createWebHistory(), // Browser History mode
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('adminToken');
  
  
  if (to.meta.requiresAdmin && !token) {
    next({ name: 'AdminDashboard' });
  } else {
    next();
  }
});


export default router;
