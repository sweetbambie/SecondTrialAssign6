<script setup>
import { RouterLink } from 'vue-router';
import { useRegistrationStore } from '../store';

const registrationStore = useRegistrationStore();
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
          <li v-if="$route.path === '/movies' || $route.path === '/setting'" class ='email'>
            <h1>{{ `Hello ${registrationStore.email}!` }}</h1>
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
  /* Remove float to allow flexbox to handle the layout */
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
  align-items: center; /* Vertically align buttons and email */
  justify-content: flex-start; /* Align items to the left */
  gap: 10px; /* Optional: Add some space between buttons */
}

.button {
  background-color: rgb(255, 255, 255);
  color: black;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 4px;
  font-weight: bold;
  display: inline-flex; /* Ensure buttons stay inline */
  align-items: center;
}

.email {
  font-size: 1rem;
  margin-left: 20px; /* Add space between buttons and email */
  display: inline-block; /* Ensure the email is inline with buttons */
}
</style>