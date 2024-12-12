<template>
  <div>
    <h1>User Profile</h1>
    <form @submit.prevent="updateProfileHandler">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" /><br /><br />

      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" /><br /><br />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" /><br /><br />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" /><br /><br />

      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script>
import { useRegistrationStore } from '../store';

export default {
  setup() {
    const registrationStore = useRegistrationStore();

    // Destructure the store state
    const { firstName, lastName, email, password, updateProfile } = registrationStore;

    // Update profile data (after registration or modifying the profile)
    const updateProfileHandler = () => {
      // Prepare the updated data from the form
      const updatedData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value, // Include password in case it's updated
      };

      // Call the updateProfile method from the store to save the updated data
      updateProfile(updatedData);

      // Show success message
      alert('Profile updated successfully!');
    };

    return {
      firstName,
      lastName,
      email,
      password,
      updateProfileHandler,
    };
  },
};
</script>