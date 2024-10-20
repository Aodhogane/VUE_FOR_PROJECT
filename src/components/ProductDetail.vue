<template>
    <div class="product-detail">
      <h1>{{ product.name }}</h1>
      <img :src="product.image" alt="Продукт" class="product-image" />
      <p>Цена: {{ product.price }}₽</p>
      <p>{{ product.description }}</p> <!-- Предположим, что у вас есть описание товара -->
      <button @click="addToCart">Добавить в корзину</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {} // Будем заполнять данными при монтировании
      };
    },
    mounted() {
      // Получаем ID товара из маршрута и загружаем его данные
      const productId = this.$route.params.id;
      this.loadProduct(productId);
    },
    methods: {
      loadProduct(id) {
        // Здесь вы можете заменить данные на реальные API запросы
        const allProducts = [
          { id: 1, name: 'Камера 1', price: 5000, image: require('../assets/camera1.png'), description: 'Описание камеры 1' },
          { id: 2, name: 'Камера 2', price: 7000, image: require('../assets/camera1.png'), description: 'Описание камеры 2' },
          // Добавьте остальные товары
        ];
        
        this.product = allProducts.find(product => product.id === parseInt(id));
      },
      addToCart() {
        // Логика добавления товара в корзину
        console.log(`Товар ${this.product.name} добавлен в корзину`);
      }
    }
  };
  </script>
  
  <style>
  .product-detail {
    text-align: center;
  }
  
  .product-image {
    width: 50%;
    height: auto;
  }
  </style>
  