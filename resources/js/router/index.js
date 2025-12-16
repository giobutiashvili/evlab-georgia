import { createRouter, createWebHistory } from 'vue-router';

// აქ შემოიტანე Pages ფაილები
import Home from '../Pages/Home.vue';
import Products from '../Pages/Products.vue'
import AboutUs from '../Pages/AboutUs.vue';
import Contact from '../Pages/Contact.vue';
import AdminDashboard from '../AdminVue/AdminDashboard.vue';
import AdminProductAdd from '@/AdminVue/AdminProductAdd.vue';
import AdminProductEdit from '@/AdminVue/AdminProductEdit.vue';
import AdminLogin from '@/AdminVue/AdminLogin.vue';

// define routes
const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: Contact },
  { path: '/admin', redirect:'/admin/login'},
  { path: '/admin/login', name:'AdminLogin',  component: AdminLogin},
  { path: '/admin/dashboard', name: 'AdminDashboard', component: AdminDashboard,
    meta: { requiresAdmin: true }
   },
  { path: '/admin/product/create', name: 'AdminProductAdd', component: AdminProductAdd,
    meta: { requiresAdmin: true } },
  { path: '/admin/product/:id/edit', name: 'AdminProductEdit', component: AdminProductEdit,
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
    next({ name: 'AdminLogin' });
  } 
  
   if (to.path === 'AdminLogin' && token) {
    return next('AdminDashboard'); 
  }
    next();
  
});


export default router;
