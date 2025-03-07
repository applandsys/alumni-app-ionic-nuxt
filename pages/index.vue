<script setup lang="ts">
const router = useRouter();

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
          <div class="content-part">
            <ion-row>
              <ion-col size-md="3" size="12" class="ion-padding ion-blue-bkg">
              </ion-col>
              <ion-col size-md="9" size="12" class="welcome">
                <ion-card-header>

                  <ion-card-title> 
                    <ion-text color="default">
                     <div class="app-title text-center color-white">বাংলাদেশ রাজনৈতিক দল </div>
                     <div class="app-title mb-10  text-center color-white">Bangladesh Political  Party</div>
                    </ion-text>
                    <ion-text color="default">
                       <div class="small-text">A major political party in Bangladesh. Founded on 1 September
                         1978 by Bangladesh </div>
                    </ion-text>
                  </ion-card-title>
                 
                </ion-card-header>
                <ion-card-content>
                    <ion-button   router-link="/auth" color="warning" expand="full" size="large" @click="navigateToLogin">Login</ion-button>
                </ion-card-content>
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