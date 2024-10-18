<template>
    <div class="card">
      <img :src="imageUrl" alt="Изображение товара" class="card-image" />
      <h2>{{ title }}</h2>
      <p>{{ price }}₽</p>
      <p>{{ location }}</p>
      <button class="rent-button" @click="goToProductPage">Арендовать</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
    },
    methods: {
      goToProductPage() {
        this.$router.push({ name: 'ProductDetail', params: { id: this.id } });
      },
    },
  };
  </script>
  
  <style>
  .card {
    /* Добавьте ваш стиль */
  }
  .card-image {
    width: 100%; /* Пример, измените по необходимости */
  }
  .rent-button {
    /* Добавьте стиль для кнопки */
  }
  </style>
  