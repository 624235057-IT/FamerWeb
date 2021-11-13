import Vue from 'vue'
import VueRouter from 'vue-router'
import Farmers from '../components/Farmers.vue'
import FarmerAddNew from '../components/FarmerAddNew.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/addfarmer',
    name: 'addfarmer',
    component: FarmerAddNew
  },
  {
    path: '/farmer',
    name: 'farmer',
    component: Farmers
  },
  {
    path: '/',
    name: 'Home',
    component: FarmerAddNew,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router