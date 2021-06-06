import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AppFarmers from '../views/AppFarmers.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'
import WishListPage from '../views/WishListPage.vue'
import CartPage from '../views/CartPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/appfarmers',
    name: 'AppFarmers',
    component: AppFarmers
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
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
   {
    path: '/wishlistpage',
    name: 'WishListPage',
    component: WishListPage
  },
  {
    path: '/cartpage',
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
