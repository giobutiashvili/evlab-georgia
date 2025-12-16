import { createRouter, createWebHistory } from 'vue-router';

// Pages 
import Home from '../Pages/Home.vue';
import Products from '../Pages/Products.vue'
import AboutUs from '../Pages/AboutUs.vue';
import Contact from '../Pages/Contact.vue';
import AdminDashboard from '../AdminVue/AdminDashboard.vue';
import AdminProductAdd from '@/AdminVue/AdminProductAdd.vue';
import AdminProductEdit from '@/AdminVue/AdminProductEdit.vue';
import AdminLogin from '@/AdminVue/AdminLogin.vue';


//  routes
const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: Contact },

// admin
  { path: '/admin', redirect:'/admin/login', },
  { path: '/admin/login', name:'AdminLogin',  component: AdminLogin},
  { path: '/admin/dashboard', name: 'AdminDashboard', component: AdminDashboard,
    meta: { requiresAdmin: true }
   },
  { path: '/admin/product/create', name: 'AdminProductAdd', component: AdminProductAdd,
    meta: { requiresAdmin: true } },
  { path: '/admin/product/:id/edit', name: 'AdminProductEdit', component: AdminProductEdit,
    meta: { requiresAdmin: true } },
  {
    path: '/admin/:catchAll(.*)',
    name: 'AdminNotFound',
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('adminToken');

      if (token) {
        // თუ token არის → dashboard
        next({ name: 'AdminDashboard' });
      } else {
        // თუ არა → login
        next({ name: 'AdminLogin' });
      }
    }
  }
];

// create router
const router = createRouter({
  history: createWebHistory(), // Browser History mode
  routes,
});




export default router;
