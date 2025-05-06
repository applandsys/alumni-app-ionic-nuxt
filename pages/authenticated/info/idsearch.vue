<script setup>

import UserLayout from "~/layouts/UserLayout.vue";
import SearchInput from "~/components/ui/search-input.vue";
</script>
<template>
    <ion-page>
      <UserLayout :is-toolbar="true">
        <ion-content>
          <ion-grid>
            <ion-row>
              <ion-col>
                <div class="mx-4 mt-4">
                  <div class="max-w-md mx-auto p-1 font-sans">
                    <div class="mb-2">
                      <div class="relative mt-2">
                        <SearchInput/>
                      </div>
                    </div>

                    <div>
                      <div class="space-y-4 p-4  ">
                        <!-- Card Component -->
                        <div class="bg-white shadow rounded-lg p-4 flex items-start space-x-4">
                          <img src="https://via.placeholder.com/60" alt="User" class="w-14 h-14 rounded-full object-cover" />
                          <div class="flex-1">
                            <div class="flex items-center justify-between">
                              <h2 class="font-semibold text-lg">Faria Lara</h2>
                              <div class="text-sm text-gray-500 flex items-center space-x-1">
                                <span>0.0/5.0</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.79h5.033c.969 0 1.371 1.24.588 1.81l-4.07 2.96 1.561 4.79c.3.921-.755 1.688-1.54 1.118L10 15.347l-4.083 2.957c-.784.57-1.838-.197-1.539-1.118l1.561-4.79-4.07-2.96c-.783-.57-.38-1.81.588-1.81h5.034l1.561-4.79z"/>
                                </svg>
                                <span class="text-xs">(0)</span>
                              </div>
                            </div>
                            <div class="text-sm text-blue-500 font-medium">শিক্ষার্থী</div>
                            <p class="text-sm text-gray-600">Mohishkhola, অনন্যা, নড়াইল সদর</p>
                          </div>
                        </div>

                        <div class="bg-white shadow rounded-lg p-4 flex items-start space-x-4">
                          <img src="https://via.placeholder.com/60" alt="User" class="w-14 h-14 rounded-full object-cover" />
                          <div class="flex-1">
                            <div class="flex items-center justify-between">
                              <h2 class="font-semibold text-lg">Faria Lara</h2>
                              <div class="text-sm text-gray-500 flex items-center space-x-1">
                                <span>0.0/5.0</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.79h5.033c.969 0 1.371 1.24.588 1.81l-4.07 2.96 1.561 4.79c.3.921-.755 1.688-1.54 1.118L10 15.347l-4.083 2.957c-.784.57-1.838-.197-1.539-1.118l1.561-4.79-4.07-2.96c-.783-.57-.38-1.81.588-1.81h5.034l1.561-4.79z"/>
                                </svg>
                                <span class="text-xs">(0)</span>
                              </div>
                            </div>
                            <div class="text-sm text-blue-500 font-medium">শিক্ষার্থী</div>
                            <p class="text-sm text-gray-600">Mohishkhola, অনন্যা, নড়াইল সদর</p>
                          </div>
                        </div>
                        <!-- Repeat the card above for each user with their respective data -->
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