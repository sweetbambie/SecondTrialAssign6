import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRegistrationStore = defineStore('registration', () => {
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const rePassword = ref('');

  return {
    firstName,
    lastName,
    email,
    password,
    rePassword,
    setRegistrationData(data) {
      firstName.value = data.firstName;
      lastName.value = data.lastName;
      email.value = data.email;
      password.value = data.password;
      rePassword.value = '';
    },
  };
}, {
  persist: true,
});

export const useStore = defineStore('store', () => {
  const email = ref("");
  const cart = ref(new Map());

  const addToCart = (key, value) => {
    cart.value.set(key, value);
  };

  const removeFromCart = (key) => {
    cart.value.delete(key);
  };

  return { email, cart, addToCart, removeFromCart };
});
