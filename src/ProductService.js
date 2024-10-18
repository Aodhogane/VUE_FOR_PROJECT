
import axios from 'axios';

const API_URL = 'http://your-api-url.com/api/products'; //Заменить на наш API

export default {
  async fetchProducts() {
    try {
      const response = await axios.get(API_URL);
      return response.data; // Предполагается, что данные возвращаются в формате массива
    } catch (error) {
      console.error('Ошибка при получении продуктов:', error);
      throw error;
    }
  },
};
