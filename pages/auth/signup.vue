<script setup lang="ts">
  import { NuxtLink } from '#components';
import { IonPage,  IonSelect, IonSelectOption } from '@ionic/vue'
  import AuthLayout from '~/layouts/auth.vue';

  const { $api } = useNuxtApp();

const divisions = ref([]);
const districts = ref([]);
const subdistricts = ref([]);
const unions = ref([]);

const selectedDivision = ref(null);
const selectedDistrict = ref(null);
const selectedSubDistrict = ref(null);
const selectedUnion = ref(null);

const formData = ref({
    name: "",
    email: "",
    password: "",
    c_password: ""
  });

const getDivision = async () => {
        try {
            const {data} = await $api.get('/locations/division');
            divisions.value = data;
        } catch (err) {
            console.error("Error: ", err);
        }
    };


onMounted(()=>{
  getDivision();
});


watch(selectedDivision, async (divisionId) => {
    try {
        const response = await $api.get(`/locations/district/${divisionId}`)
        districts.value = response.data.districts;
      } catch (error) {
        console.error('API Error:', error)
      }
});

watch(selectedDistrict, async (districtId) => {
    try {
        const response = await $api.get(`/locations/subdistrict/${districtId}`)
        subdistricts.value = response.data.subdistricts;
      } catch (error) {
        console.error('API Error:', error)
      }
});

watch(selectedSubDistrict, async (subDistrictId) => {
    try {
        const response = await $api.get(`/locations/union/${subDistrictId}`)
        unions.value = response.data.unions;
      } catch (error) {
        console.error('API Error:', error)
      }
});




</script>

<template>
    <ion-page>
        <AuthLayout>
          <template #tm-page-title>Sign Up</template>
          <template #tm-header-text>
            <h1 class="title-text">Member Singup</h1>
            <p>Join  us and build a New Bangladesh</p>
          </template>
          <div class="login_form">
              <form @submit.prevent="handleLogin">
                <ion-item>
                  <ion-label position="stacked">Name</ion-label>
                  <ion-input v-model="formData.name" type="text" required></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Email</ion-label>
                  <ion-input v-model="formData.email" type="text" required></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Password</ion-label>
                  <ion-input v-model="formData.password" type="password" required></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Confirm Passord</ion-label>
                  <ion-input v-model="formData.c_password" type="password" required></ion-input>
                </ion-item>

                <ion-item>
                  <ion-select label="Division" v-model="selectedDivision">
                    <ion-select-option
                      :value="division.id"
                      v-for="division in divisions?.divisions"
                      :key="division.id"
                    >
                      {{ division.name }}
                    </ion-select-option>
                  </ion-select>
                </ion-item>

            
                <ion-item v-if="districts.length" >
                  <ion-select label="District" v-model="selectedDistrict" >
                    <ion-select-option
                      :value="district.id"
                      v-for="district in districts"
                      :key="district.id"
                    >
                      {{ district.name }}
                    </ion-select-option>
                  </ion-select>
                </ion-item>

                <ion-item v-if="subdistricts.length" >
                  <ion-select label="Upazilla" v-model="selectedSubDistrict">
                    <ion-select-option
                      :value="subdistrict.id"
                      v-for="subdistrict in subdistricts"
                      :key="subdistrict.id"
                    >
                      {{ subdistrict.name }}
                    </ion-select-option>
                  </ion-select>
                </ion-item>

            
                <ion-item v-if="unions.length" >
                  <ion-select label="Union" v-model="selectedUnion">
                    <ion-select-option
                      :value="union.id"
                      v-for="union in unions"
                      :key="union.id"
                    >
                      {{ union.name }}
                    </ion-select-option>
                  </ion-select>
                </ion-item>


                <ion-button expand="full" type="submit"  shape="round" color="success">Sinup</ion-button>
            </form>

              <div class="m-4"> Already have an Account? <NuxtLink to="/auth"> Sing In </NuxtLink></div>

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
