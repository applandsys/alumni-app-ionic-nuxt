<script setup lang="ts">
import UserLayout from "~/layouts/UserLayout.vue";
import { useRoute } from 'vue-router';

definePageMeta({
  name: 'authenticated-messaging-id'
})

const route = useRoute();
const memberId = route.params.id;

const { data : memberDetail, pending, error } = useApi(`member-detail/${memberId}`);

</script>

<template>
  <ion-page>
    <UserLayout :is-toolbar="false">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/authenticated/dashboard"></ion-back-button>
          </ion-buttons>
          <div class="flex justify-end items-center">
            <div class="text-black px-2 flex justify-end text-right">
              <div class="w-3 h-3 bg-green-500 rounded-full mx-1 items-center mt-1 font-bold"></div> {{memberDetail.name}}
            </div>
            <div class="w-10 h-10 bg-amber-700 rounded-full flex justify-center items-center text-white mr-2">U</div>
          </div>
        </ion-toolbar>
      </ion-header>
      <ion-content>
<!--        <div class="bg-green-800 p-2 flex items-center">-->
<!--          <div class="w-10 h-10 bg-amber-700 rounded-full flex justify-center items-center text-white mr-2">U</div>-->
<!--          <div class="text-white">-->
<!--            Member ID: {{memberId}} (online)-->
<!--          </div>-->
<!--        </div>-->
        <div class="w-full p-2">
          <div class="overflow-y-auto h-96">
            <div class="flex items-start space-x-4 my-4">
              <div class="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white">U</div>
              <div class="bg-blue-100 p-3 rounded-lg text-sm w-3/5">
                <p>Hello! How can I assist you today?</p>
              </div>
            </div>

            <div class="flex items-end space-x-4 justify-end my-4">
              <div class="bg-gray-100 p-3 rounded-lg text-sm w-3/5">
                <p>Hi, I need help with my order.</p>
              </div>
              <div class="w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center text-white">Me</div>
            </div>

            <div class="flex items-start space-x-4 my-4">
              <div class="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white">U</div>
              <div class="bg-blue-100 p-3 rounded-lg text-sm w-3/5">
                <p>Sure, can you provide me with your order number?</p>
              </div>
            </div>
          </div>
        </div>
          <div class="absolute bottom-0 w-full bg-orange-500 p-2">
            <div class="flex items-center gap-2">
              <!-- Input takes up remaining space -->
              <IconPlusCircle/>
              <input
                  type="text"
                  placeholder="Type a message..."
                  class="flex-1 bg-gray-200 text-red-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <!-- Right-aligned icons -->
              <button class="p-2">
                <IconPaperclip />
              </button>
              <button class="p-2">
                <IconSend />
              </button>
            </div>
          </div>
      </ion-content>
    </UserLayout>
  </ion-page>
</template>

<style scoped>

</style>
