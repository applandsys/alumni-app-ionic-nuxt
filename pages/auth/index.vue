<script setup lang="ts">
  import { NuxtLink } from '#components';
import { IonInput, IonItem, IonLabel  } from '@ionic/vue';
  import AuthLayout from '~/layouts/auth.vue';

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
        <AuthLayout>
          <template #tm-page-title>Sign In</template>
          <template #tm-header-text>
            <h1 class="title-text">Member Signin</h1>
            <p>Got to Member area to continue</p>
          </template>
          <div class="login_form">
              <form @submit.prevent="handleLogin">
                <ion-item>
                  <ion-label position="stacked">Email</ion-label>
                  <ion-input v-model="formData.email" type="text" required></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Password</ion-label>
                  <ion-input v-model="formData.password" type="password" required></ion-input>
                </ion-item>
                <ion-button expand="full" type="submit"  shape="round" color="success">Login</ion-button>
            </form>

              <div class="m-4"> Have an Account? <NuxtLink to="/auth/signup"> Signup now </NuxtLink></div>

            </div>
        </AuthLayout>
    </ion-page>
</template>


<style scoped>
  ion-content {
    --background: rgb(123,203,140);
    --background: linear-gradient(90deg, rgba(123,203,140,1) 0%, rgba(216,255,221,1) 35%);
  }

  .login_form{
    padding: 20px;
    margin: 10px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
  }
  ion-item {
    margin-bottom: 16px;
  }
  .header-text{
    padding: 32px;
  }
  .title-text{
    font-weight: 700;
  }

 
</style>
