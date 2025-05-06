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
              <div class="px-4 py-1 flex">
                <h4>Find Your Specialist</h4>
              </div>
              <div class="mx-4">
                <div class="max-w-md mx-auto p-1 font-sans">
                  <!-- Header -->
                  <div class="mb-2">
                    <h2 class="text-xl font-bold text-teal-800">Find Your <span class="text-blue-600">Specialist</span></h2>
                    <div class="relative mt-2">
                      <SearchInput/>
                    </div>
                  </div>

                  <!-- Categories -->
                  <div class="grid grid-cols-4 gap-2 text-center text-sm mb-4">
                    <div class="bg-gray-100 p-2 rounded-2xl  shadow items-center justify-center flex flex-col">
                      <img :src="Tooth" alt="Logo" width="40px">
                      দন্ত বিশেষজ্ঞ
                    </div>
                    <div class="bg-gray-100 p-2 rounded-2xl  shadow items-center justify-center flex flex-col">
                      <img :src="Brain" alt="Logo" width="40px">
                      ব্রেইন বিশেষজ্ঞ
                    </div>
                    <div class="bg-gray-100 p-2 rounded-2xl  shadow items-center justify-center flex flex-col">
                      <img :src="NutritionPlan" alt="Logo" width="40px">
                      পুষ্টি ও স্বাস্থ্য
                    </div>
                    <div class="bg-gray-100 p-2 rounded-2xl  shadow items-center justify-center flex flex-col">
                      <img :src="Liver" alt="Logo" width="40px">
                      অন্ত্র রোগ
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
                    <div class="bg-white rounded-lg shadow p-4 flex gap-4 items-start">
                      <img src="https://via.placeholder.com/60" alt="Doctor" class="rounded-full w-14 h-14" />
                      <div class="flex-1">
                        <h3 class="text-md font-semibold text-teal-700">ডাঃ জীবিতোষ বিশ্বাস</h3>
                        <p class="text-sm text-gray-600 mb-1">0 Patients [0.0⭐/5.0⭐]</p>
                        <p class="text-sm text-gray-700">হার্টের রোগ, ডায়াবেটিস, উচ্চ রক্তচাপ...</p>
                        <p class="text-xs text-gray-500 mt-1">MBBS (Dhaka), BCS (Health), Medicine</p>
                      </div>
                    </div>

                    <!-- Repeat this card for other doctors -->
                    <div class="bg-white rounded-lg shadow p-4 flex gap-4 items-start">
                      <img src="https://via.placeholder.com/60" alt="Doctor" class="rounded-full w-14 h-14" />
                      <div class="flex-1">
                        <h3 class="text-md font-semibold text-teal-700">ডাঃ গোলাম আজম রাসেল</h3>
                        <p class="text-sm text-gray-600 mb-1">0 Patients [0.0⭐/5.0⭐]</p>
                        <p class="text-sm text-gray-700">মেডিসিন, নিউরোমেডিসিন ও ডায়াবেটিস...</p>
                        <p class="text-xs text-gray-500 mt-1">MBBS (Dhaka), BCS (Health), MD (BSMMU)</p>
                      </div>
                    </div>

                    <!-- Another card -->
                    <div class="bg-white rounded-lg shadow p-4 flex gap-4 items-start">
                      <img src="https://via.placeholder.com/60" alt="Doctor" class="rounded-full w-14 h-14" />
                      <div class="flex-1">
                        <h3 class="text-md font-semibold text-teal-700">ডাঃ ডারিকা মিফতাহুল ফাইকা</h3>
                        <p class="text-sm text-gray-600 mb-1">0 Patients [0.0⭐/5.0⭐]</p>
                        <p class="text-sm text-gray-700">মেডিসিন, গ্যাস্ট্রো, সনোলজিস্ট...</p>
                        <p class="text-xs text-gray-500 mt-1">MBBS, BCS (Health), FCPS (Medicine)</p>
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


