<template>
    <div id="app">
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/contact">Контакты</router-link>
      </nav>
      <router-view></router-view> <!-- Здесь будут отображаться компоненты -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  };
  </script>
  
  <style>
  nav {
    padding: 10px;
    background-color: #f4f4f4;
  }
  nav a {
    margin-right: 10px;
  }
  </style>
  