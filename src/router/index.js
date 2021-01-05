import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Main from '../components/Main.vue';

const routes = [
  { path: '/view/login', name: 'Login', component: Login },
  { path: '/view/main', name: 'Main', component: Main },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
