<script setup lang="ts">
import { NuxtLink } from '#components';
import { IonInput, IonItem, IonLabel  } from '@ionic/vue';
import AuthLayout from '~/layouts/auth.vue';
import { useUserStore } from '~/stores/userStore';
// import {getSavedPassword, saveLoginInfo} from '~/composables/saveLoginInfo';

  const { login } = useAuth();
  const router = useRouter();
const errorResponse = ref(null);

const userStore = useUserStore();

  const formData = ref({
    email:  "",
    password:  ""
  });

// async function loadCredentials() {
//   const { username, password } = await getSavedPassword();
//   formData.value.email = username && username;
//   formData.value.password = password;
// }
//
// loadCredentials();


  const handleLogin = async () => {
    try {
      const {data, error}  = await login(formData.value.email, formData.value.password);

      if(error){
        errorResponse.value = error;
      }

      if(!error){
        if(data.token){
          userStore.setUser(data);
          await router.push('/authenticated/home');
        }
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
              <div v-if="errorResponse">
                <div class="p-2 bg-red-400">
                  <ul>
                    <li v-if="errorResponse.data.error">Wrong User or Password</li>
                    <li v-if="errorResponse?.data?.email">{{errorResponse?.data?.email[0]}}</li>
                    <li v-if="errorResponse?.data?.password">{{errorResponse?.data?.password[0]}}</li>
                  </ul>
                </div>
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
