<template>
    <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <label>
        Username:
        <input type="text" v-model="username" required />
      </label>
      <label>
        Password:
        <input type="password" v-model="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const handleLogin = () => {
  // For now, just simulate a successful login
  if (username.value && password.value) {
    localStorage.setItem('authenticated', 'true');
    window.location.reload(); // Reload to update authentication state
  }
};
</script>

<style lang="scss" scoped>
</style>