<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    // Get the current route using useRoute
    const route = useRoute();

    // Computed property to check if we're on the '/register' page
    const isOnRegisterPage = computed(() => {
      return route.path === '/register';
    });

    return {
      isOnRegisterPage
    };
  }
};
</script>

<template>
  <div class="header">
    <nav>
      <ul class="navlist">
        <li class="logo">Feminine Flix</li>
        <div class="buttons">
          <li v-if="!isOnRegisterPage"><RouterLink to="/register" class="button register">Register</RouterLink></li>
          <li><RouterLink to="/login" class="button login">Login</RouterLink></li>
          <li><RouterLink to="/cart" class="button login">Cart</RouterLink></li>
          <li><RouterLink to="/setting" class="button login">Setting</RouterLink></li>
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