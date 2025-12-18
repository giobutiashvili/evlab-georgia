import { createRouter, createWebHistory } from 'vue-router';

// Pages 
import FrontLayout from '@/Layouts/FrontLayout.vue';
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
   { path: '/', redirect: '/home' },
  { 
    
    path: '/',
    component: FrontLayout,
    children: [
      { path: 'home', name: 'Home', component: Home, meta: { title: 'Home Page' } },
      { path: 'products', name: 'Products', component: Products, meta: { title: 'Our Products' } },
      { path: 'products/:id', name: 'ProductDetails', component: ProductDetails, meta: { title: 'Product Details' } },
      { path: 'about', name: 'AboutUs', component: AboutUs ,meta: { title: 'About Us' } },
      { path: 'contact', name: 'Contact', component: Contact ,  meta: { title: 'Contact Us' }}

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

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title || 'EvLab' // fallback title
  next()
})


export default router;
