<template>
    <div id="app">
      <header>
        <h1>My Vue.js Application</h1>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </header>
  
      <main>
        <router-view></router-view>
      </main>
  
      <footer>
        <p>&copy; 2024 My Vue.js Application</p>
      </footer>
    </div>
  </template>
  