<template>
    <div class="product-detail-container">
      <div class="product-image-section">
        <h2>Набор для фотосессии</h2>
        <div class="main-image"></div>
        <div class="thumbnail-images">
          <div class="thumbnail"></div>
          <div class="thumbnail"></div>
          <div class="thumbnail"></div>
        </div>
      </div>
  
      <div class="product-info-section">
        <h2>10 000₽</h2>
        <div class="product-small-image"></div>
        <button class="call-button">Позвонить</button>
        <button class="message-button">Написать</button>
  
        <div class="product-details">
          <p><strong>Адрес</strong></p>
          <p>г. Москва<br>ул. Пушкина<br>м. Пушкинская, 100м</p>
  
          <p><strong>Описание товара</strong></p>
          <p>Детальное описание товара будет здесь.</p>
  
          <p><strong>Характеристики</strong></p>
          <p>Подробные характеристики товара будут здесь.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetail',
    computed: {
      productId() {
        return this.$route.params.id;
      },
    },
  };
  </script>
  
  <style scoped>
  .product-detail-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f4f4f4; /* Light background color */
    border-radius: 8px;
  }
  
  .product-image-section {
    width: 60%;
  }
  
  h2 {
    font-weight: bold;
    color: #4a4a4a;
  }
  
  .main-image {
    width: 100%;
    height: 300px;
    background-color: #dcdcdc; /* Placeholder color for main image */
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  .thumbnail-images {
    display: flex;
    justify-content: space-between;
  }
  
  .thumbnail {
    width: 80px;
    height: 80px;
    background-color: #dcdcdc; /* Placeholder color for thumbnails */
    border-radius: 8px;
  }
  
  .product-info-section {
    width: 35%;
    background-color: #ffffff; /* White background for details section */
    border-radius: 8px;
    padding: 20px;
  }
  
  .product-small-image {
    width: 100%;
    height: 150px;
    background-color: #dcdcdc; /* Placeholder color for small image */
    border-radius: 8px;
    margin: 10px 0;
  }
  
  .call-button,
  .message-button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .call-button {
    background-color: #f0f0f0; /* Light background for call button */
  }
  
  .message-button {
    background-color: #e74c3c; /* Red background for message button */
    color: #ffffff;
  }
  
  .product-details p {
    margin: 10px 0;
    line-height: 1.5;
  }
  </style>
  