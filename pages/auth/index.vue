<script setup lang="ts">
  import { IonInput, IonItem, IonLabel  } from '@ionic/vue';
  
const formData = ref({
  username: "",
  password: ""
});

const handleSubmit = () =>{
  if (formData.value.username && formData.value.password) {
      console.log("Form Submitted!", formData.value.username);
    } else {
      console.log("Please fill in both fields.");
    }
}
</script>

<template>
    <ion-page>
      <ion-content>
        <div class="login_form">
          <ion-text color="primary">
            <h1>Login</h1>
          </ion-text>
            <form @submit.prevent="handleSubmit">
       
            <ion-item>
              <ion-label position="stacked">Username</ion-label>
              <ion-input v-model="formData.username" type="text" required></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Password</ion-label>
              <ion-input v-model="formData.password" type="password" required></ion-input>
            </ion-item>

            <ion-button expand="full" type="submit"  shape="round">Login</ion-button>
          </form>
        </div>
      </ion-content>
    </ion-page>
</template>





<style scoped>
.login_form{
  padding: 20px;
}
ion-item {
  margin-bottom: 16px;
}
</style>
