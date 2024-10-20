<template>
    <div class="product-card">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <h3 class="product-title">{{ product.title }}</h3>
      <p class="product-price">{{ product.price }} ₽</p>
      <button class="add-to-cart-button" @click="addToCart">Добавить в корзину</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      addToCart() {
        // Логика добавления товара в корзину
        console.log(`Товар ${this.product.title} добавлен в корзину.`);
      },
    },
  };
  </script>
  
  <style>
  .product-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    width: 200px; /* Ширина карточки */
    margin: 10px; /* Отступ между карточками */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    width: 100%; /* Масштабирование изображения по ширине карточки */
    height: auto; /* Автоматическая высота */
    border-radius: 5px;
  }
  
  .product-title {
    font-size: 18px;
    margin: 10px 0;
  }
  
  .product-price {
    font-size: 16px;
    color: #f39c12; /* Цвет цены */
  }
  
  .add-to-cart-button {
    background-color: #27ae60; /* Цвет кнопки */
    color: white; /* Цвет текста кнопки */
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }
  
  .add-to-cart-button:hover {
    background-color: #219150; /* Цвет кнопки при наведении */
  }
  </style>
  