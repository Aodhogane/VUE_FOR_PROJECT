<template>
  <div class="product-list">
    <Card
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :price="product.price"
      :location="product.location"
      :imageUrl="product.imageUrl"
    />
  </div>
</template>

<script>
import ProductService from '../services/ProductService';
import Card from './Card.vue';

export default {
  name: 'ProductList',
  components: {
    Card,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      this.products = await ProductService.fetchProducts();
    } catch (error) {
      console.error('Ошибка при загрузке продуктов:', error);
    }
  },
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* Расстояние между карточками */
}
</style>
