<template>
  <h2>Account Information</h2>
  <form @submit="handleSubmit">
    <input v-model="store.firstName" placeholder="First Name" class="input-field" />
    <input v-model="store.lastName" placeholder="Last Name" class="input-field" />
    <input type="email" placeholder="Email" class="input-field" v-model="store.email" required />
    <input type="password" placeholder="Password" class="input-field" v-model="store.password" required />
    <button type="submit" class="register">Update Information</button>
  </form>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from '../store'; 

const store = useStore();
const formStatus = ref(null);

onMounted(() => {
  // Assuming the store is already populated with the user's data from a previous login or API call
  console.log("Current User Info:", store.firstName, store.lastName, store.email);
});

// Handle form submission
const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission

  // Validate the form data (for example, check if passwords match)
  if (store.password !== store.rePassword) {
    formStatus.value = {
      success: false,
      message: 'Passwords do not match!',
    };
    return;
  }

  // Here you can make an API call or store the updated data
  // For example, saving the updated data to a backend API
  // Assuming a method saveAccountInfo exists in your store or API

  // You can call the store's action to save the updated data (e.g., in Pinia)
  store.updateAccountInfo({
    firstName: store.firstName,
    lastName: store.lastName,
    email: store.email,
    password: store.password,
  }).then(() => {
    formStatus.value = {
      success: true,
      message: 'Your information has been updated successfully!',
    };
  }).catch((error) => {
    formStatus.value = {
      success: false,
      message: 'There was an error updating your information. Please try again.',
    };
  });
}
</script>
