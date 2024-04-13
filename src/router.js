import { createRouter, createWebHashHistory } from 'vue-router';
import index from './components/index.vue';
import about from './components/about.vue';
import actions from './components/actions.vue';
import information from './components/information.vue';
import vacancy from './components/vacancy.vue';

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    { path: '/home', component: index, alias: '/' },
    { path: '/about', component: about },
    { path: '/actions', component: actions },
    { path: '/information', component: information },
    { path: '/vacancy', component: vacancy },
  ],
});
