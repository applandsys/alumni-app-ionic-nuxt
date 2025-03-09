<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const { logout } = useAuth();
const handleLogout = () => {
  logout();
  router.push('/auth');
};
</script>
<template>
  <ion-page>
    <slot></slot>
    <ion-footer>
      <ion-toolbar>
        <div class="flex flex-1 justify-around rounded-t-xl bg-amber-50 p-1">

          <div class="flex flex-col items-center p-1" >
            <IconHome/>
            <ion-label>Home</ion-label>
          </div>

          <VerticalSeparator color="#ccc"/>

          <div class="flex flex-col items-center p-2" >
            <IconUser/>
            <ion-label>Profile</ion-label>
          </div>

          <VerticalSeparator color="#ccc"/>

          <div class="flex flex-col items-center p-2" >
            <IconTable/>
            <ion-label>To do</ion-label>
          </div>

          <VerticalSeparator color="#ccc"/>

          <div class="flex flex-col items-center p-2" >
            <IconBell/>
            <ion-label>Notify</ion-label>
          </div>

          <VerticalSeparator color="#ccc"/>

          <div class="flex flex-col items-center p-2" @click="handleLogout">
            <IconLogOut/>
            <ion-label>Logout</ion-label>
          </div>
        </div>
      </ion-toolbar>
    </ion-footer>

  </ion-page>
</template>

<style scoped>
ion-toolbar{
  --background: rgb(123,203,140);
}
ion-content {
  --background: linear-gradient(90deg, rgba(123,203,140,1) 0%, rgb(167, 243, 177) 60%);
}
</style>
