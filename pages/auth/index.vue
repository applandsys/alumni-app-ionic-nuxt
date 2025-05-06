<script setup lang="ts">
import { NuxtLink } from '#components';
import { IonInput, IonItem, IonLabel  } from '@ionic/vue';
import AuthLayout from '~/layouts/auth.vue';
import { useUserStore } from '~/stores/userStore';
import {getSavedPassword, saveLoginInfo} from '~/composables/saveLoginInfo';

  const { login } = useAuth();
  const router = useRouter();

const userStore = useUserStore();

  const formData = ref({
    email:  "",
    password:  ""
  });

async function loadCredentials() {
  const { username, password } = await getSavedPassword();
  console.log(username, password);
  formData.value.email = username && username;
  formData.value.password = password;
}

loadCredentials();


  const handleLogin = async () => {
    try {
     const {data}  = await login(formData.value.email, formData.value.password);
     if(data.token){
       userStore.setUser(data);
       await saveLoginInfo(formData.value.email, formData.value.password);
       await router.push('/authenticated/home');
     }
    } catch (error) {
      console.log("Login erro:",error);
    }
  };
</script>

<template>
    <ion-page>
        <AuthLayout>
          <template #tm-page-title>Sign in</template>
          <div class="flex flex-col  items-center  h-screen mx-auto">
            <div class="login_form text-center">
              <div class="mb-4">
                <h1 class="title-text"> Sign in</h1>
                <p>Continue with sign in info</p>
                <hr/>
              </div>
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
          </div>
        </AuthLayout>
    </ion-page>
</template>


<style scoped>

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

  .title-text{
    font-weight: 700;
  }

 
</style>
