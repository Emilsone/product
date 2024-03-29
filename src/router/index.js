import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Farmers from '../views/Farmers.vue'
import Blog from '../views/Blog.vue'
import Faq from '../views/Faq.vue'
import Contact from '../views/Contact.vue'
import WishListPage from '../views/WishListPage.vue'
import CartPage from '../views/CartPage.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/farmers',
    name: 'Farmers',
    component: Farmers
  },

  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
   {
    path: '/wishlist',
    name: 'WishListPage',
    component: WishListPage
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
