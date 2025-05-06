<script setup lang="ts">

import UserLayout from "~/layouts/UserLayout.vue";
import SearchInput from "~/components/ui/search-input.vue";

import Tooth from "~/assets/images/tooth.png";
import Brain from "assets/images/brain.png";
import NutritionPlan from "assets/images/nutrition-plan.png";
import Liver from "assets/images/liver.png";

const formData = ref({
  search: "",
});

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
                  <ion-title><slot name='tm-page-title'>রেইল শিডিউল</slot></ion-title>
                </ion-toolbar>
              </ion-header>
              <div class="mx-4">
                <!-- Schedule List -->
                <div class="p-4 space-y-4">

                  <!-- Schedule Card -->
                  <div class="bg-white rounded shadow p-3 space-y-2">
                    <div class="flex justify-between items-center">
                      <div class="flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/3448/3448334.png" class="w-6 h-6" />
                        <h2 class="font-bold text-black">জাহানাবাদ এক্সপ্রেস</h2>
                      </div>
                      <span class="text-green-600 text-sm font-semibold">পরবর্তী</span>
                    </div>
                    <div class="grid grid-cols-3 text-center text-sm mt-2">
                      <div>
                        <p class="text-black">খুলনা</p>
                        <p class="text-red-500 font-semibold">06:00 AM</p>
                      </div>
                      <div>
                        <p class="text-black">নড়াইল সদর</p>
                        <p class="text-green-600 font-semibold">07:16 AM</p>
                      </div>
                      <div>
                        <p class="text-black">ঢাকা</p>
                        <p class="text-red-500 font-semibold">09:45 AM</p>
                      </div>
                    </div>
                  </div>

                  <!-- Another Card -->
                  <div class="bg-white rounded shadow p-3 space-y-2">
                    <div class="flex justify-between items-center">
                      <div class="flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/3448/3448334.png" class="w-6 h-6" />
                        <h2 class="font-bold text-black">রূপসীবাংলা এক্সপ্রেস</h2>
                      </div>
                      <span class="text-green-600 text-sm font-semibold">পরবর্তী</span>
                    </div>
                    <div class="grid grid-cols-3 text-center text-sm mt-2">
                      <div>
                        <p class="text-black">ঢাকা</p>
                        <p class="text-red-500 font-semibold">10:45 AM</p>
                      </div>
                      <div>
                        <p class="text-black">নড়াইল সদর</p>
                        <p class="text-green-600 font-semibold">12:45 PM</p>
                      </div>
                      <div>
                        <p class="text-black">বেনাপোল</p>
                        <p class="text-red-500 font-semibold">02:25 PM</p>
                      </div>
                    </div>
                  </div>

                  <!-- Repeat cards as needed... -->
                </div>

              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </UserLayout>
  </ion-page>
</template>


