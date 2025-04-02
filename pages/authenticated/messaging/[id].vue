<script setup lang="ts">
import UserLayout from "~/layouts/UserLayout.vue";
import { useRoute } from 'vue-router';

definePageMeta({
  name: 'authenticated-messaging-id'
})

const route = useRoute();
const memberId = route.params.id;

console.log("params",route.params.id);
</script>

<template>
  <ion-page>
    <UserLayout>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/authenticated/dashboard"></ion-back-button>
          </ion-buttons>
          <ion-title>Members</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div>Member ID: {{memberId}}</div>
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
          <!-- Chat Input Form -->
          <div class="flex items-center p-4 rounded-b-lg">
            <input type="text" placeholder="Type a message..." class="w-full bg-gray-200 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button class="ml-3 p-2 ">
              <IconPaperclip/>
            </button>
            <button class="ml-3 p-2">
              <IconSend/>
            </button>
          </div>
        </div>

      </ion-content>
    </UserLayout>
  </ion-page>
</template>

<style scoped>

</style>
