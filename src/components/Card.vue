<template>
    <div class="card">
      <img :src="starImage" alt="Звезда" class="star-icon" />
      <h2>{{ title }}</h2>
      <p>{{ price }}₽</p>
      <p>{{ location }}</p>
      <button class="rent-button">Арендовать</button>
    </div>
  </template>
  
  <script>
  import starImage from '../assets/Star_1.png'; // Путь к изображению
  
  export default {
    name: 'Card',
    props: {
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
    },
    data() {
      return {
        starImage, // Сохраняем изображение в data
      };
    },
  };
  </script>
  
  <style>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 200px;
    text-align: center;
    position: relative;
  }
  
  .star-icon {
    width: 24px; /* Измените размер по необходимости */
    position: absolute;
    top: 10px; /* Измените по необходимости для позиционирования */
    right: 10px; /* Измените по необходимости для позиционирования */
    animation: bounce 1s infinite; /* Пример анимации */
  }
</style>
  