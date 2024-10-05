import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';//поменять путь к другой странице
import Contact from './components/Contact.vue';//поменять путь к другой странице

const routes = [
  { path: '/', component: Home }, //основная страница
  { path: '/about', component: About },//поменять на другую страницу
  { path: '/contact', component: Contact }//поменять на другую страницу
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
