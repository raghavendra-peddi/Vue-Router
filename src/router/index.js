import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../components/user/User.vue';
import Home from '../components/Home.vue';

Vue.use(VueRouter)

const lazyLoad = (view) => {
  return () => import(`@/components/user/${view}.vue`)
};

const routes = [
  { path: '', component: Home },
  { path: '/user', component: User },
  { path: '/user/:id/edit', component: lazyLoad("UserEdit") },
  { path: '/user/:id/details', component: lazyLoad("UserDetail") }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
