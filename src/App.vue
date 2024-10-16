<template>
    <div id="app">
      <header class = "dark-header">
        <h1>My Vue.js Application</h1>
        <nav>
          <router-link to="/">Для бизнеса</router-link>
          <router-link to="/contact">Карьера</router-link>
          <router-link to="/about">Помощь</router-link>
          <router-link to="/contact">Каталог</router-link>
          <router-link to="/contact">Польза</router-link>
          <router-link to="/favourites">
            <img src="./assets/star1.png" alt="Избранное" class="image" />
          </router-link>
          
          <router-link to="/basket">
            <img src="./assets/Basket.png" alt="Корзина" class="image" />
          </router-link>
          
          <router-link to="/Message">
            <img src="./assets/message.png" alt="Сообщение" class="image" />
          </router-link>

          <router-link to="/tovar"> Разместить товар</router-link>

          <router-link to="/favourites">
            <img src="./assets/account-svgrepo-com.png" alt="Аккаунт" class="image" />
          </router-link>

        </nav>
      </header>
  
      <main>
        <router-view></router-view>
      </main>
  
      <footer class="dark-footer">       
          <router-link to="/"> Для бизнеса</router-link>

          <router-link to="/"> Карьера</router-link>

          <router-link to="/"> Помощь</router-link>

          <router-link to="/"> Каталоги</router-link>

          <router-link to="/"> Польза</router-link>

          <router-link to="/"> Избранное</router-link>

          <router-link to="/"> Корзина</router-link>

          <router-link to="/"> Диалоги</router-link>

          <router-link to="/"> Контакты</router-link>

          <router-link to="/"> Связь</router-link>

          <router-link to="/VK">
            <img src="./assets/vk-svgrepo-com.png" alt="Аккаунт" class="image" />
          </router-link>

          <router-link to="/TG">
            <img src="./assets/TG.png" alt="Сообщение" class="image" />
          </router-link>
      </footer>
    </div>
  </template>
  
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

.dark-footer {
  background-color: #333;
  color: white; 
  padding: 20px; 
}

.dark-footer nav {
  display: flex;
  gap: 20px; 
}

.dark-footer a {
  color: white;
  text-decoration: none; 
}

.dark-footer a:hover {
  text-decoration: underline; 
}
</style>
