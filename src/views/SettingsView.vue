<script setup>
import { useRegistrationStore } from '../store';
import { computed } from 'vue';


const userStore = useRegistrationStore();
const firstName = computed({
  get: () => userStore.firstName,
  set: (value) => {
    userStore.firstName = value;
  },
});
const lastName = computed({
  get: () => userStore.lastName,
  set: (value) => {
    userStore.lastName = value;
  },
});
const email = computed({
  get: () => userStore.email,
  set: (value) => {
    userStore.email = value;
  },
});
const password = computed({
  get: () => userStore.password,
  set: (value) => {
    userStore.password = value;
  },
});

// Update profile data
const updateProfileHandler = (event) => {
  // Prepare the updated data from the form
  // Call the updateProfile method from the store to save the updated data
  userStore.setRegistrationData({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: userStore.password.value
  });

  // Show success message
  alert('Profile updated successfully!');
}
</script>

<template>
  <div>
    <h1>User Profile</h1>
    <!-- <p> {{ userStore }}</p> -->
    <form @submit="updateProfileHandler">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" /><br /><br />

      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" /><br /><br />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" /><br /><br />

      <label for="password">Password:</label>
      <input type="text" id="password" v-model="password" readonly/><br /><br />

      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>
