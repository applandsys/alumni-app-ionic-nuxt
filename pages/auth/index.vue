<script setup lang="ts">
  import { IonInput, IonItem, IonLabel  } from '@ionic/vue';

  const { login } = useAuth();
  const router = useRouter();


const formData = ref({
  email: "",
  password: ""
});


  const handleLogin = async () => {
    try {
     const {data}  = await login(formData.value.email, formData.value.password);

     console.log("data pasi:", data);
     if(data.token){
       await router.push('/authenticated/dashboard');
     }

    } catch (error) {
      alert('Login failed!');
    }
  };
</script>

<template>
    <ion-page>
      <ion-content>
        <div class="login_form">
          <ion-text color="primary">
            <h1>Login</h1>
          </ion-text>
            <form @submit.prevent="handleLogin">
       
            <ion-item>
              <ion-label position="stacked">Username</ion-label>
              <ion-input v-model="formData.email" type="text" required></ion-input>
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
