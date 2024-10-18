<template>
  <div class="card" @click="goToProductPage">
    <img :src="starImage" alt="Звезда" class="star-icon" />
    <h2>{{ title }}</h2>
    <p>{{ price }}₽</p>
    <p>{{ location }}</p>
    <button class="rent-button" @click="goToProductPage">Арендовать</button>
  </div>
</template>

<script>
import starImage from '../assets/Star_1.png';

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
  },
  data() {
    return {
      starImage,
    };
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
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  text-align: center;
  position: relative;
}

.star-icon {
  width: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  animation: bounce 1s infinite; /* Пример анимации */
}

.rent-button {
  background-color: #ff4747; /* Цвет кнопки */
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.rent-button:hover {
  background-color: #e04040; /* Цвет при наведении */
}
</style>
