import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'Connexion',
    component: () => import('../views/connexion.vue'),
  },
  {
    path: '/',
    name: 'Connexion',
    component: () => import('../views/connexion.vue'),
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
