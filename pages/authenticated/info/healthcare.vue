<script setup lang="ts">

import UserLayout from "~/layouts/UserLayout.vue";
import SearchInput from "~/components/ui/search-input.vue";

import Tooth from "~/assets/images/tooth.png";
import Brain from "assets/images/brain.png";
import NutritionPlan from "assets/images/nutrition-plan.png";
import Liver from "assets/images/liver.png";
const config = useRuntimeConfig();

import {getApiData} from "~/composables/getApiData";

const doctorsCategory = ref([]);
const doctorsList = ref([]);

const getDoctorsData = async() => {
  const {data: doctorsCategoryData} = await getApiData('info/show-doctors-category',[]);
  const {data: doctorsListData} = await getApiData('info/show-doctors-list',[]);
  doctorsCategory.value = doctorsCategoryData;
  doctorsList.value = doctorsListData;
}
getDoctorsData();
</script>

<template>
  <ion-page>
    <UserLayout :is-toolbar="true">
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="mx-4">
                <div class="max-w-md mx-auto p-1 font-sans">
                  <!-- Header -->
                  <div class="mb-2">
                    <h2 class="text-xl font-bold text-teal-800">Find Your <span class="text-blue-600">Specialist</span></h2>
                    <div class="relative mt-2">
                      <SearchInput placeholder="বিশেষজ্ঞ ডাক্তার খুজুন"/>
                    </div>
                  </div>
                  <!-- Categories -->
                  <div class="grid grid-cols-4 gap-2 text-center text-sm mb-4">
                    <div class="bg-gray-100 p-2 rounded-2xl  shadow items-center justify-center flex flex-col" v-for="list in doctorsCategory?.doctors_category">
                      <img :src="`${config.public.imageBase}/doctors_category/${list.photo}`" alt="Logo" width="40px">
                     {{list.name}}
                    </div>
                  </div>

                  <!-- Alert -->
                  <div class="bg-red-100 text-red-700 text-sm p-3 rounded mb-4 flex items-start">
                    <span class="mr-2">⚠️</span>
                    <span>পছন্দের ডায়াগনস্টিক সেন্টার থেকে শরীরিক যেকোনো চেক-আপ করতে এখানে ক্লিক করুন</span>
                  </div>

                  <!-- Doctor Cards -->
                  <div class="space-y-4">
                    <!-- Single Card -->

                    <div class="bg-white rounded-lg shadow p-4 flex gap-4 items-start" v-for="doctor in doctorsList.doctors_list">
                      <img :src="`${config.public.imageBase}/doctors_list/${doctor.photo}`" alt="Doctor" class="rounded-full w-14 h-14" />
                      <div class="flex-1">
                        <h5 class="text-md font-semibold text-teal-700">{{doctor.name}}</h5>
                        <p class="text-sm text-gray-600 mb-1">0 Patients [0.0⭐/5.0⭐]</p>
                        <p class="text-sm text-gray-700">{{doctor.speciality}}</p>
                        <p class="text-xs text-gray-500 mt-1">{{doctor.qualifiations}}</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </UserLayout>
  </ion-page>
</template>


