import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Main from '../components/Main.vue';
import Home from '../components/views/Home.vue';
import Icon from '../components/views/Icon.vue';

const childrenRoutes = [
  { path: '/view/main/home', name: 'Home', component: Home },
  { path: '/view/main/icon', name: 'Icon', component: Icon },
];

const routes = [
  { path: '/view/login', name: 'Login', component: Login },
  { path: '/view/main', name: 'Main', component: Main, children: childrenRoutes },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
