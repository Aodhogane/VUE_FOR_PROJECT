<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <h3 class="product-title">{{ product.name }}</h3>
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
      this.$emit('add-to-cart', this.product);
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  text-align: center;
  background-color: #fff;
  transition: transform 0.2s, box-shadow 0.2s;
  max-width: 250px;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}

.product-title {
  font-size: 18px;
  margin: 8px 0;
  color: #333;
}

.product-price {
  font-size: 16px;
  font-weight: bold;
  color: #2e7d32;
  margin: 8px 0;
}

.add-to-cart-button {
  background-color: #1976d2;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart-button:hover {
  background-color: #1565c0;
}
</style>
