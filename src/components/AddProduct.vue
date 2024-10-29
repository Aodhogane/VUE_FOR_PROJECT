<template>
    <div>
      <h2>Добавить новый товар</h2>
      <form @submit.prevent="addProduct">
        <div>
          <label for="name">Название:</label>
          <input id="name" v-model="newProduct.name" required />
        </div>
  
        <div>
          <label for="price">Цена:</label>
          <input id="price" v-model.number="newProduct.price" type="number" required />
        </div>
  
        <div>
          <label for="category">Категория:</label>
          <select id="category" v-model="newProduct.category" required>
            <option value="Камеры">Камеры</option>
            <option value="Объективы">Объективы</option>
            <option value="Провода">Провода</option>
            <option value="Наборы">Наборы</option>
            <option value="Лампы">Лампы</option>
            <option value="Батарейки">Батарейки</option>
            <option value="Фотобоксы">Фотобоксы</option>
          </select>
        </div>
  
        <div>
          <label for="image">Фотография товара:</label>
          <input id="image" type="file" @change="onFileChange" accept="image/*" />
        </div>
  
        <div v-if="imagePreview">
          <h4>Предварительный просмотр:</h4>
          <img :src="imagePreview" alt="Предварительный просмотр" class="preview-image" />
        </div>
  
        <button type="submit">Добавить товар</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          price: 0,
          category: '',
          image: null, // Поле для хранения изображения
        },
        imagePreview: null, // Предварительный просмотр изображения
      };
    },
    methods: {
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.newProduct.image = file;
          this.imagePreview = URL.createObjectURL(file);
        }
      },
      addProduct() {
        // Логика добавления нового продукта, например, отправка данных в родительский компонент
        this.$emit('add-product', this.newProduct);
  
        // Очистка формы после добавления продукта
        this.newProduct = {
          name: '',
          price: 0,
          category: '',
          image: null,
        };
        this.imagePreview = null;
      },
    },
  };
  </script>
  
  <style>
  .preview-image {
    max-width: 200px;
    margin-top: 10px;
  }
  </style>
  