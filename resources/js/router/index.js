import { createRouter, createWebHistory } from 'vue-router';

// Pages 
import FrontLayout from '@/Layouts/FrontLayout.vue'
import Home from '../Pages/Home.vue';
import Products from '../Pages/Products.vue'
import ProductDetails from '@/Pages/ProductDetails.vue'
import AboutUs from '../Pages/AboutUs.vue';
import Contact from '../Pages/Contact.vue';

// Admin 

import AdminLayout from '@/Layouts/AdminLayout.vue';
import AdminDashboard from '../AdminVue/AdminDashboard.vue';
import AdminProductAdd from '@/AdminVue/AdminProductAdd.vue';
import AdminProductEdit from '@/AdminVue/AdminProductEdit.vue';
import AdminLogin from '@/AdminVue/AdminLogin.vue';


const routes = [
  {
    path: '/',
    component: FrontLayout,
    children: [
    { path: '/', name: 'Home', component: Home },
    { path: 'products', name: 'Products', component: Products },
    { path: 'products/:id', name: 'ProductDetails', component: ProductDetails },
    { path: 'about', name: 'AboutUs', component: AboutUs },
    { path: 'contact', name: 'Contact', component: Contact },
  ]
  },



  // ADmin Routs 
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAdmin: true },
    children: [
      { path: 'dashboard', name: 'AdminDashboard', component: AdminDashboard },
      { path: 'product/create', name: 'AdminProductAdd', component: AdminProductAdd },
      { path: 'product/:id/edit', name: 'AdminProductEdit', component: AdminProductEdit },
      {
        path: ':catchAll(.*)',
        beforeEnter: (to, from, next) => {
          const token = localStorage.getItem('adminToken');
          if (token) {
            next({ name: 'AdminDashboard' });
          } else {
            next({ name: 'AdminLogin' });
          }
        }
      }
    ]
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  }
  ]

// create router
const router = createRouter({
  history: createWebHistory(), // Browser History mode
  routes,
});




export default router;
