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
        <input 
          type="text" 
          placeholder="Поиск по объявлениям" 
          class="search-input" 
          v-model="searchQuery"
        />
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

    <div class="filter-container">
      <h2>Фильтрация</h2>
      <label for="category">Категория:</label>
      <select id="category" v-model="selectedCategory">
        <option value="">Все</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>

      <label for="min-price">Цена от:</label>
      <input id="min-price" type="number" v-model.number="priceRange.min" />

      <label for="max-price">до:</label>
      <input id="max-price" type="number" v-model.number="priceRange.max" />
    </div>
    <h1>Все товары:</h1>

    <add-product @add-product="addProduct"></add-product>

    <!-- Контейнер для карточек товаров -->
    <div class="card-container">
      <product-card
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import AddProduct from './AddProduct.vue';

export default {
  components: {
    ProductCard,
    AddProduct,
  },
  data() {
    return {
      showCategoriesModal: false, // Статус отображения модального окна категорий
      searchQuery: '', // Поле для строки поиска
      selectedCity: 'Ваш город', // Поле для хранения выбранного города
      products: [ // Пример списка продуктов
        { id: 1, name: 'Камера 1', price: 5000, category: 'Камеры', image: require('../assets/camera1.png') },
        { id: 2, name: 'Объектив', price: 7000, category: 'Объективы', image: require('../assets/camera1.png') },
        { id: 3, name: 'Провода', price: 8000, category: 'Провода', image: require('../assets/camera1.png') },
        { id: 4, name: 'Наборы', price: 6000, category: 'Наборы', image: require('../assets/camera1.png') },
        { id: 5, name: 'Лампы', price: 4500, category: 'Лампы', image: require('../assets/camera1.png') },
        { id: 6, name: 'Батарейки', price: 5500, category: 'Батарейки', image: require('../assets/camera1.png') },
        { id: 7, name: 'Фотобоксы', price: 5500, category: 'Фотобоксы', image: require('../assets/camera1.png') },
        { id: 8, name: 'Камера 8', price: 5500, category: 'Камеры', image: require('../assets/camera1.png') },
        // Добавьте больше продуктов по мере необходимости
      ],
      selectedCategory: null, // Выбранная категория для фильтрации
      priceRange: { min: 0, max: 10000 }, // Начальный диапазон цен для фильтрации
      categories: ['Камеры', 'Объективы', 'Провода', 'Наборы', 'Лампы', 'Батарейки', 'Фотобоксы'], // Список доступных категорий
    };
  },
  mounted() {
    this.autoSelectLocation(); // Автоматический выбор местоположения при загрузке компонента
  },
  computed: {
    truncatedCity() {
      // Возвращает обрезанное название города, если оно длиннее 6 символов
      return this.selectedCity.length > 6 
        ? this.selectedCity.substring(0, 6) + '...' 
        : this.selectedCity;
    },
    filteredProducts() {
      // Фильтрация продуктов по выбранной категории, диапазону цен и строке поиска
      return this.products
        .filter(product => 
          (!this.selectedCategory || product.category === this.selectedCategory) &&
          product.price >= this.priceRange.min && 
          product.price <= this.priceRange.max &&
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    },
  },
  methods: {
    toggleCategories() {
      // Переключение отображения модального окна категорий
      this.showCategoriesModal = !this.showCategoriesModal;
    },
    autoSelectLocation() {
      // Определяет геолокацию пользователя для автозаполнения города
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.getLocationName(latitude, longitude);
        }, () => {
          this.selectedCity = 'Ваш город'; // Устанавливает стандартный город при ошибке
        });
      } else {
        this.selectedCity = 'Ваш город'; // Устанавливает стандартный город, если геолокация недоступна
      }
    },
    getLocationName(latitude, longitude) {
      // Получает название города по координатам
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
    addProduct(newProduct){
      this.products.push(newProduct);
    }
  },
};
</script>


<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 16px;
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