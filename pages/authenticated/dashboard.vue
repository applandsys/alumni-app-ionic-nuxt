// pages/dashboard.vue
<template>
  <ion-page>
    <ion-content>
      <div v-if="token">
        <h1>Welcome, </h1>
        <button @click="handleLogout">Logout</button>
      </div>
      <div v-else>
        <p>Please log in.</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { useRouter } from 'vue-router';

const { token, logout } = useAuth();
const router = useRouter();

console.log("tokan is" , token);

const handleLogout = () => {
  logout();
  router.push('/auth');
};
</script>
