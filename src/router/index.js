import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import ProductDetail from '@/components/ProductDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product/:id', // Динамический маршрут для товаров
    name: 'ProductDetail',
    component: ProductDetail,
    props: true, // Позволяет передавать параметры как свойства
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
