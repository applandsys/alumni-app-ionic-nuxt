<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

interface Props {
  isToolbar: boolean
}

const props = withDefaults(defineProps<Props>(),{isToolbar: true});

const { logout } = useAuth();
const handleLogout = () => {
  logout();
  router.push('/auth');
};
</script>
<template>
  <ion-page>
    <slot></slot>
    <div v-if="props.isToolbar">
      <ion-footer>
        <ion-toolbar>
          <div class="flex flex-1 justify-around rounded-t-xl bg-amber-50 py-2 px-2">

            <NuxtLink to="/authenticated/home">
              <div class="flex flex-col items-center justify-center " >
                <IconHome/>
                <ion-label class="tab-label">Home</ion-label>
              </div>
           </NuxtLink>
          
            <NuxtLink to="/authenticated/dashboard">
              <div class="flex flex-col items-center justify-center" >
                <IconFolder/>
                <ion-label class="tab-label">Info</ion-label>
              </div>
            </NuxtLink>


            <NuxtLink to="/authenticated/dashboard">
            <div class="flex flex-col items-center justify-center" >
              <IconShoppingBasket/>
              <ion-label class="tab-label">Mart</ion-label>
            </div>
            </NuxtLink>

            <NuxtLink to="/authenticated/dashboard">
              <div class="flex flex-col items-center justify-center" >
                <IconFish/>
                <ion-label class="tab-label">Food</ion-label>
              </div>
            </NuxtLink>

            <NuxtLink to="/authenticated/dashboard">
              <div class="flex flex-col items-center justify-center" >
                <IconUser/>
                <ion-label class="tab-label">Profile</ion-label>
              </div>
            </NuxtLink>

            <!--          <VerticalSeparator color="#ccc"/>-->
<!--            <NuxtLink to="/authenticated/dashboard">-->
<!--              <div class="flex flex-col items-center justify-center" @click="handleLogout">-->
<!--                <IconLogOut/>-->
<!--                <ion-label class="tab-label">Logout</ion-label>-->
<!--              </div>-->
<!--            </NuxtLink>-->
          </div>
        </ion-toolbar>
      </ion-footer>
    </div>
  </ion-page>
</template>

<style scoped>
ion-toolbar{
  --background: rgb(123,203,140);
}
ion-content {
  --background: linear-gradient(90deg, rgba(123,203,140,1) 0%, rgb(167, 243, 177) 60%);
}

ion-label {
  font-size: 10px;
}

</style>
