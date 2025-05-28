<script setup lang="ts">
import { App as CapacitorApp } from '@capacitor/app';
import { toastController } from '@ionic/vue'

const router = useRouter();

let lastBackPress = 0

CapacitorApp.addListener('backButton', async () => {
  const currentRoute = router.currentRoute.value.fullPath;

  if (currentRoute === '/') {
    const now = new Date().getTime()
    if (now - lastBackPress < 2000) {
      await CapacitorApp.exitApp()
    } else {
      lastBackPress = now
      const toast = await toastController.create({
        message: 'Press back again to exit',
        duration: 1500,
        position: 'bottom',
      })
      await toast.present()
    }
  } else {
    window.history.back()
  }

});

const navigateToLogin = () =>{
  router.push('/auth'); // Navigate to the /auth route
}

</script>

<template>
    <ion-page>
      <ion-content class="ion-padding">
        <div class="centered-content">
          <div class="oval">
          </div>
          <div class="content-part  ">
            <ion-row>

              <ion-col size-md="3" size="12" class="ion-padding ion-blue-bkg">
              </ion-col>

              <ion-col size-md="9" size="12" class="welcome">
                 <div class="flex flex-col justify-around items-center  h-screen mx-auto">
                   <div >
                     <ion-text color="default">
                       <div class="app-title text-center color-white">স্মার্ট বাংলাদেশ</div>
                       <div class="app-title mb-10  text-center color-white">Digitalizing Bangladesh</div>
                     </ion-text>
                   </div>
                   <div>
                     <ion-text color="default">
                       <div class="small-text text-center">সমগ্র বাংলাদেশের জন্য একটি ডিজিটালাইজেশন অ্যাপস </div>
                     </ion-text>
                   </div>
                   <div >
                     <ion-button expand="full" type="submit"  shape="round" @click="navigateToLogin" color="success">Start</ion-button>
                   </div>
                 </div>
                </ion-col>
            </ion-row>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>

<style scoped>

ion-content {
  --background: #006A4E;
}

ion-card-content{
  display: flex;
    justify-content: center;
}

.oval{
    top: 19%;
    border: 1px solid red;
    width: 400px;
    height: 400px;
    position: absolute;
    background: red;
    border-radius: 50%;
    left: -65%;
}
.centered-content {
  display: flex;
  justify-content: center; /* Horizontal alignment */
  align-items: center; /* Vertical alignment */
  height: 100%; /* Take full height of ion-content */
}
</style>