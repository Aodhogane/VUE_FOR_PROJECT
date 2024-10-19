<template>
  <div id="app">
    <header class="dark-header">
      <nav>
        <router-link to="/">Для бизнеса</router-link>
        <router-link to="/contact">Карьера</router-link>
        <router-link to="/about">Помощь</router-link>
        <router-link to="/catalog">Каталог</router-link>
        <router-link to="/benefits">Польза</router-link>
        <router-link to="/favourites">
          <img src="./assets/Star_1.png" alt="Избранное" class="image" />
        </router-link>
        <router-link to="/basket">
          <img src="./assets/Basket.png" alt="Корзина" class="image" />
        </router-link>
        <router-link to="/message">
          <img src="./assets/message.png" alt="Сообщение" class="image" />
        </router-link>
        <router-link to="/tovar">Разместить товар</router-link>
        <router-link to="/account">
          <img src="./assets/account-svgrepo-com.png" alt="Аккаунт" class="image" />
        </router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="footer">
      <div class="footer-links">
        <div class="column">
          <p>Для бизнеса</p>
          <p>Карьера</p>
          <p>Помощь</p>
          <p>Каталоги</p>
          <p>Польза</p>
        </div>
        <div class="column">
          <p>Избранное</p>
          <p>Корзина</p>
          <p>Диалоги</p>
        </div>
        <div class="column">
          <p>Контакты</p>
          <p>Связь</p>
        </div>
      </div>
      <div class="footer-icons">
        <img src="./assets/vk-svgrepo-com.png" alt="VK">
        <img src="./assets/TG.png" alt="Telegram">
        <img src="./assets/TG.png" alt="WhatsApp">
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.dark-header {
  background-color: #333;
  color: white; 
  padding: 20px; 
}

.dark-header nav {
  display: flex;
  gap: 20px; 
}

.dark-header a {
  color: white;
  text-decoration: none; 
}

.dark-header a:hover {
  text-decoration: underline; 
}

.footer {
  display: flex;
  justify-content: space-between;
  background-color: #404040; /* Dark gray background color */
  padding: 20px;
  color: #f0f0f0; /* Light gray text color */
}

.footer-links {
  display: flex;
  gap: 50px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-icons {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-icons img {
  width: 32px; /* Adjust the size of the icons as needed */
  height: 32px;
}
</style>
