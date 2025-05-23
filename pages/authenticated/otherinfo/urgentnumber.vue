<script setup>
import UserLayout from "~/layouts/UserLayout.vue";
import UrgentNumber from "~/components/other-info/urgent-number.vue";
import {getApiData} from "~/composables/getApiData.js";

const urgentNumbers = ref([]);

const geturgentNumbers = async() => {
  const {data} = await getApiData('other-info/show-urgent-number',[]);
  urgentNumbers.value = data;
}

geturgentNumbers();
</script>

<template>
  <ion-page>
    <UserLayout :is-toolbar="true">
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-header>
                <ion-toolbar>
                  <ion-buttons slot="start">
                    <ion-back-button defaultHref="/"></ion-back-button>
                  </ion-buttons>
                  <ion-title><slot name='tm-page-title'><span class="text-white">জরুরি নম্বর</span></slot></ion-title>
                </ion-toolbar>
              </ion-header>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
                <div class="max-w-md mx-auto mt-10 space-y-2 px-2">
                  <div v-if="urgentNumbers?.urgent_numbers?.length">
                    <UrgentNumber v-for="list in urgentNumbers?.urgent_numbers" :key="list.id" :service="list.service_name" :number="list.numbers" class="my-2"/>
                  </div>
                </div>
            </ion-col>
          </ion-row>
        </ion-grid>

      </ion-content>
    </UserLayout>
  </ion-page>
</template>