import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../components/user/User.vue';
import Home from '../components/Home.vue';
import UserEdit from '../components/user/UserEdit.vue';
import UserDetails from '../components/user/UserDetail.vue';

Vue.use(VueRouter)

const routes = [
  { path: '', component: Home },
  { path: '/user', component: User },
  { path: '/user/:id/edit', component: UserEdit },
  { path: '/user/:id/details', component: UserDetails }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
