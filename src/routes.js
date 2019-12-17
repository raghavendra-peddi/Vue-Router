import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserDetails from './components/user/UserDetail.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/user', component: User },
  { path: '/user/:id/edit', component: UserEdit },
  { path: '/user/:id/details', component: UserDetails }
];