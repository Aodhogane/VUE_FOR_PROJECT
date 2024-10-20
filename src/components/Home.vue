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
        <span class="city-name">{{ truncatedCity }}</span>
        <img src="../assets/map.png" alt="Локация" class="location-icon" />
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

    <!-- Контейнер для карточек товаров -->
    <div class="card-container">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Продукт" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>Цена: {{ product.price }}₽</p>
        <button class="add-to-cart-button">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCategoriesModal: false,
      selectedCity: 'Ваш город', // Начальный город
      products: [ // Пример списка продуктов
        { id: 1, name: 'Камера 1', price: 5000, image: require('../assets/camera1.png') },
        { id: 2, name: 'Камера 2', price: 7000, image: require('../assets/camera1.png') },
        { id: 3, name: 'Камера 3', price: 8000, image: require('../assets/camera1.png') },
        { id: 4, name: 'Камера 4', price: 6000, image: require('../assets/camera1.png') },
        { id: 5, name: 'Камера 5', price: 4500, image: require('../assets/camera1.png') },
        { id: 6, name: 'Камера 6', price: 5500, image: require('../assets/camera1.png') },
        // Добавьте больше продуктов по мере необходимости
      ],
    };
  },
  mounted() {
    this.autoSelectLocation();
  },
  computed: {
    truncatedCity() {
      return this.selectedCity.length > 20 
        ? this.selectedCity.substring(0, 20) + '...' 
        : this.selectedCity;
    },
  },
  methods: {
    toggleCategories() {
      this.showCategoriesModal = !this.showCategoriesModal;
    },
    autoSelectLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.getLocationName(latitude, longitude);
        }, () => {
          this.selectedCity = 'Ваш город'; 
        });
      } else {
        this.selectedCity = 'Ваш город'; 
      }
    },
    getLocationName(latitude, longitude) {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data && data.address) {
            this.selectedCity = data.address.city || data.address.town || data.address.village || 'Неизвестный город';
          } else {
            this.selectedCity = 'Ваш город';
          }
        })
        .catch(error => {
          console.error('Ошибка при получении данных:', error);
          this.selectedCity = 'Ваш город';
        });
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

.city-name {
  white-space: nowrap; /* Запрет переноса текста */
  overflow: hidden; /* Скрытие переполнения */
  text-overflow: ellipsis; /* Добавление "..." в конце текста */
  max-width: 100px; /* Ограничение ширины */
}

.card-container {
  display: flex;
  flex-wrap: wrap; /* Позволяет карточкам переноситься на новую строку */
  justify-content: space-between; /* Распределяет карточки по строке */
  margin-top: 20px;
}

.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: calc(30% - 20px); /* Устанавливает ширину карточки */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-image {
  width: 100%; /* Масштабируем изображение по ширине карточки */
  height: auto; /* Сохраняем пропорции изображения */
}

</style>