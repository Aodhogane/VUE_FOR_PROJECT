<template>
  <div>
    <div class="search-bar-container">
      <div class="location-container">
        <button class="menu-button" @click="toggleCategories">
          <div class="menu-icon-container">
            <img 
            :src="showCategoriesModal ? require('../assets/close.png') : require('../assets/burger-menu.png')" 
            :alt="showCategoriesModal ? 'Закрыть' : 'Категории'" 
            class="menu-icon" 
            />
          </div>
          {{ showCategoriesModal ? 'Закрыть' : 'Категории' }}
        </button>
      </div>

      <div class="search-input-container">
        <img src="../assets/discover.png" alt="Поиск" class="search-icon">
        <input type="text" placeholder="Поиск по объявлениям" class="search-input">
      </div>

      <div class="location-container">
        <span>г. Москва</span>
        <img src="../assets/map.png" alt="Локация" class="location-icon">
      </div>
    </div>

    <div v-if="showCategoriesModal" class="categories-modal">
      <div class="modal-content">
        <span class="close" @click="toggleCategories">&times;</span>
        <h2>Категории</h2>
        <p>Выберите одну из категорий ниже:</p>
        <div class="category-buttons-container">
          <button class="category-button">Камеры</button>
          <button class="category-button">Объективы</button>
          <button class="category-button">Провода</button>
          <button class="category-button">Наборы</button>
          <button class="category-button">Лампы</button>
          <button class="category-button">Батарейки</button>
          <button class="category-button">Фотобоксы</button>
        </div>
      </div>
    </div>

    <h1>Все товары:</h1>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showCategoriesModal: false,
    };
  },
  methods: {
    toggleCategories() {
      this.showCategoriesModal = !this.showCategoriesModal;
    },
  },
};
</script>

<style>
.card-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

/* Стили для панели поиска и категорий */
.search-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;
}

.menu-button {
  background: none; /* Убираем фон кнопки */
  border: none; /* Убираем рамку кнопки */
  cursor: pointer; /* Изменение курсора на pointer при наведении */
  display: flex;
  align-items: center;
  padding: 10px;
}

.menu-button:hover {
  background-color: #f0f0f0; /* Изменение фона при наведении */
}

.menu-icon-container {
  width: 20px; /* Одинаковая ширина контейнера */
  height: 20px; /* Одинаковая высота контейнера */
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-icon {
  width: 100%; /* Масштабируем изображение по ширине контейнера */
  height: 100%; /* Масштабируем изображение по высоте контейнера */
  object-fit: contain; /* Убедимся, что изображение сохраняет пропорции */
}

.search-input-container {
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px 10px;
}

.search-icon {
  width: 20px;
  margin-right: 8px;
}

.search-input {
  border: none;
  outline: none;
  font-size: 16px;
}

.location-container {
  display: flex;
  align-items: center;
}

.location-icon {
  width: 20px;
  margin-left: 8px;
}

.category-buttons-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

.category-button {
  background-color: #f8f8f8;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

/* Стили для модального окна */
.categories-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон */
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  max-width: 400px;
  position: relative; /* Для позиционирования кнопки закрытия */
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}
</style>