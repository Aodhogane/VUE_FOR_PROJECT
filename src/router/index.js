import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ProductDetail from '../components/ProductDetail.vue'; // Импортируем новый компонент

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetail } // Новый маршрут для страницы товара
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
