import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ProductDetail from '../components/ProductCard.vue';
import AddProduct from '../components/AddProduct.vue';

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
  {
    path: '/tovar', // Динамический маршрут для товаров
    name: 'AddProduct',
    component: AddProduct,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
