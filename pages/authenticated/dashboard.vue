// pages/dashboard.vue
<template>
  <ion-page>
    <ion-content>
      <div v-if="user">
        <h1>Welcome, {{ user.name }}</h1>
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

const { user, logout } = useAuth();
const router = useRouter();

const handleLogout = () => {
  logout();
  router.push('/auth');
};
</script>
