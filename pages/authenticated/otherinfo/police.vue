<script setup>
import UserLayout from "~/layouts/UserLayout.vue";
import Profile from "assets/images/profile.png";

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
                  <ion-title><slot name='tm-page-title'> <span class="text-white">বরিশাল পুলিশের নম্বর</span></slot></ion-title>
                </ion-toolbar>
              </ion-header>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="px-2 mt-2">
                <div class="grid gap-6 max-w-4xl mx-auto">
                  <div class="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row items-center gap-4">
                    <img :src="Profile" alt="Officer Photo" class="w-24 h-24 rounded-full object-cover border">
                    <div class="flex-1">
                      <h2 class="text-lg font-bold">কাজী এসামুল কবীর <span class="text-blue-500">✔️</span></h2>
                      <p class="text-sm text-gray-700">পুলিশ সুপার, নড়াইল</p>
                      <p class="text-sm text-gray-600">spnarail@police.gov.bd</p>
                      <div class="mt-2 flex gap-3">
                        <a href="mailto:spnarail@police.gov.bd" class="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                          <img :src="Profile" class="w-6 h-6" alt="Gmail" />
                        </a>
                        <a href="tel:+8801XXXXXXXXX" class="bg-green-100 p-2 rounded-full hover:bg-green-200">
                          <img :src="Profile" class="w-6 h-6" alt="Phone" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row items-center gap-4">
                    <img :src="Profile" alt="Officer Photo" class="w-24 h-24 rounded-full object-cover border">
                    <div class="flex-1">
                      <h2 class="text-lg font-bold">মোঃ আনোয়ার হোসেন <span class="text-blue-500">✔️</span></h2>
                      <p class="text-sm text-gray-700">অতিরিক্ত পুলিশ সুপার, নড়াইল</p>
                      <p class="text-sm text-gray-600">anwarhp79@gmail.com</p>
                      <div class="mt-2 flex gap-3">
                        <a href="mailto:anwarhp79@gmail.com" class="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                          <img :src="Profile" class="w-6 h-6" alt="Gmail" />
                        </a>
                        <a href="tel:+8801XXXXXXXXX" class="bg-green-100 p-2 rounded-full hover:bg-green-200">
                          <img :src="Profile" class="w-6 h-6" alt="Phone" />
                        </a>
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