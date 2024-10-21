<template>
    <div class="product-detail">
      <img :src="product.image" alt="Product Image" class="product-detail-image" />
      <h1>{{ product.name }}</h1>
      <p>Цена: {{ product.price }}₽</p>
      <p>{{ product.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {}, // Объект товара
      };
    },
    mounted() {
      const productId = this.$route.params.id; // Получаем id товара из параметра маршрута
      this.getProductById(productId); // Вызываем метод для получения данных товара
    },
    methods: {
      getProductById(id) {
        // Пример поиска товара по ID (в реальном проекте это можно делать через API)
        const allProducts = [
          { id: 1, name: 'Камера 1', price: 5000, description: 'Описание камеры 1', image: require('../assets/camera1.png') },
          { id: 2, name: 'Камера 2', price: 7000, description: 'Описание камеры 2', image: require('../assets/camera1.png') },
          // Добавьте больше продуктов
        ];
        this.product = allProducts.find(product => product.id === parseInt(id));
      },
    },
  };
  </script>
  
  <style>
  .product-detail {
    text-align: center;
    padding: 20px;
  }
  
  .product-detail-image {
    width: 300px;
    height: auto;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 18px;
  }
  </style>
  