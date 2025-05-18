<script setup>
import UserLayout from "~/layouts/UserLayout.vue";

</script>
<template>
  <ion-page>
    <UserLayout :is-toolbar="true">
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="mx-4 mt-4">
                <div class="overflow-x-auto whitespace-nowrap mb-4 border-b border-gray-300">
                  <ul class="flex space-x-6 text-gray-600 text-base font-medium">
                    <li class="text-blue-600 border-b-2 border-blue-600 pb-2">সব গাড়ি</li>
                    <li class="pb-2">প্রাইভেট কার</li>
                    <li class="pb-2">মাইক্রোবাস</li>
                    <li class="pb-2">অ্যাম্বুলেন্স</li>
                    <li class="pb-2">বাস</li>
                  </ul>
                </div>

                <div class="space-y-4">
                  <div class="bg-white rounded-lg shadow p-4 flex items-start space-x-4">
                    <img src="https://img.icons8.com/emoji/48/motorized-wheelchair.png" class="w-16 h-16 object-contain" alt="ইজিবাইক" />
                    <div class="flex-1">
                      <h2 class="text-lg font-semibold">করিম ইজিবাইক</h2>
                      <p class="text-gray-600 text-sm">মাউড়া, মাইজপাড়া</p>
                      <p class="text-gray-500 text-sm">অ্যাসনঃ ১২ টি</p>
                    </div>
                    <div class="flex flex-col items-center space-y-2">
                      <button class="text-green-500 text-xl">
                        📞
                      </button>
                      <button class="text-gray-500 text-xl">
                        📋
                      </button>
                    </div>
                  </div>

                  <!-- 2 -->
                  <div class="bg-white rounded-lg shadow p-4 flex items-start space-x-4">
                    <img src="https://img.icons8.com/color/48/truck.png" class="w-16 h-16 object-contain" alt="ট্রাক" />
                    <div class="flex-1">
                      <h2 class="text-lg font-semibold">নড়াইল ট্রান্সপোর্টেশন সার্ভিস</h2>
                      <p class="text-gray-600 text-sm">পুরাতন বাস টার্মিনাল</p>
                      <p class="text-gray-500 text-sm">অ্যাসনঃ ৩ টি</p>
                    </div>
                    <div class="flex flex-col items-center space-y-2">
                      <button class="text-green-500 text-xl">📞</button>
                      <button class="text-gray-500 text-xl">📋</button>
                    </div>
                  </div>

                  <!-- 3 -->
                  <div class="bg-white rounded-lg shadow p-4 flex items-start space-x-4">
                    <img src="https://img.icons8.com/color/48/car.png" class="w-16 h-16 object-contain" alt="কার" />
                    <div class="flex-1">
                      <h2 class="text-lg font-semibold">আমান কার সার্ভিস</h2>
                      <p class="text-gray-600 text-sm">মাইজপাড়া, নড়াইল</p>
                      <p class="text-gray-500 text-sm">অ্যাসনঃ ১০ টি</p>
                    </div>
                    <div class="flex flex-col items-center space-y-2">
                      <button class="text-green-500 text-xl">📞</button>
                      <button class="text-gray-500 text-xl">📋</button>
                    </div>
                  </div>

                  <!-- 4 -->
                  <div class="bg-white rounded-lg shadow p-4 flex items-start space-x-4">
                    <img src="https://img.icons8.com/color/48/ambulance.png" class="w-16 h-16 object-contain" alt="অ্যাম্বুলেন্স" />
                    <div class="flex-1">
                      <h2 class="text-lg font-semibold">আসা অ্যাম্বুলেন্স সার্ভিস</h2>
                      <p class="text-gray-600 text-sm">নড়াইল সদর, নড়াইল</p>
                      <p class="text-gray-500 text-sm">অ্যাসনঃ ১০ টি</p>
                    </div>
                    <div class="flex flex-col items-center space-y-2">
                      <button class="text-green-500 text-xl">📞</button>
                      <button class="text-gray-500 text-xl">📋</button>
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