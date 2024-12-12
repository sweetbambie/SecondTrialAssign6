<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="header">
    <nav>
      <ul class="navlist">
        <li class="logo">Feminine Flix</li>
        <div class="buttons">
          <li v-if="$route.path === '/'">
            <RouterLink to="/login" class="button login">Login</RouterLink>
          </li>
          <li v-if="$route.path === '/'">
            <RouterLink to="/register" class="button register">Register</RouterLink>
          </li>
          <li v-if="$route.path === '/movies'">
            <RouterLink to="/cart" class="button cart">Cart</RouterLink>
          </li>
          <li v-if="$route.path === '/movies'">
            <RouterLink to="/setting" class="button setting">Setting</RouterLink>
          </li>
          <li v-if="$route.path === '/movies'">
            <RouterLink to="/" class="button setting">Logout</RouterLink>
          </li>
          <li v-if="$route.path === '/setting'">
            <RouterLink to="/movies" class="button setting">Movies</RouterLink>
          </li>
          <li v-if="$route.path === '/login' || $route.path === '/register'">
            <RouterLink to="/" class="button setting">Home</RouterLink>
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.navlist {
  list-style-type: none;
  margin: 8px 8px;
  padding: 0;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navlist li {
  float: right;
}

.navlist li a {
  padding: 8px 16px;
  text-decoration: none;
}

.logo {
  font-size: 2rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  font-weight: bold;
  margin-left: 8px;
  color: hotpink;
}

.buttons {
  display: flex;
}

.button {
  background-color: rgb(255, 255, 255);
  color: black;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 4px;
  font-weight: bold;
}
</style>