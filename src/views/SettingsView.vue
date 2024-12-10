<template>
  <div>
    <h1>User Profile</h1>
    <form @submit.prevent="updateProfile">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" /><br /><br />
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" /><br /><br />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" /><br /><br />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" readonly /><br /><br />
      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script>
import { useRegistrationStore } from '../store';

export default {
  setup() {
    const registrationStore = useRegistrationStore();

    // Bind store values to the form inputs
    const { firstName, lastName, email, password, persistData } = registrationStore;

    // Method to save changes
    const updateProfile = () => {
      // Persist updated data to localStorage
      registrationStore.persistData();
      alert('Profile updated successfully!');
    };

    return {
      firstName,
      lastName,
      email,
      password,
      updateProfile, // This method is triggered when the form is submitted
    };
  },
};
</script>

