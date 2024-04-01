import { createRouter, createWebHashHistory } from 'vue-router';
import index from './components/index.vue';
import about from './components/about.vue';
import information from './components/information.vue';

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    { path: '/home', component: index, alias: '/' },
    { path: '/about', component: about },
    { path: '/information', component: information },
  ],
});
