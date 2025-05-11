<script setup lang="ts">
import UserLayout from "~/layouts/UserLayout.vue";
import {useUserStore} from "~/stores/userStore";
import Profile from '~/assets/images/profile.png'

definePageMeta({
  name: 'authenticated-social-create'
});

const userStore = useUserStore();
const user = userStore.getUser;

const { data : memberDetail, pending, error } = useApi(`member-detail/${user.user.id}`);

const fileInput = ref<HTMLInputElement | null>(null);

const formData = reactive({
  post_content: "",
  post_image: null as File | null,
});


const handleCreate = async () => {
  const payload = new FormData();

  payload.append('post_content', formData.post_content);
  if (formData.post_image) {
    payload.append('post_image', formData.post_image);
  }


  try {
    const { data, error } = await useFetch('social/create', {
      method: 'POST',
      baseURL: useRuntimeConfig().public.apiBase,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: payload,
    });

    if (error.value) {
      console.error('Request failed:', error.value);
    } else {
      console.log('Response:', data.value);
    }
  } catch (err) {
    console.error("social create failed", err);
  }
};


const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files?.[0]) {
    formData.post_image = target.files[0];
  }
};


</script>

<template>
  <ion-page>
    <UserLayout :is-toolbar="false">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/authenticated/home"></ion-back-button>
          </ion-buttons>
          <div class="flex  items-center" >
            <div class="text-black px-2 flex justify-start text-right">
                 গুরুত্বপূর্ণ তথ্য পোস্ট করুন
            </div>
          </div>
        </ion-toolbar>
      </ion-header>
      <ion-content>

        <!--final-->
        <div v-if="memberDetail">
          <div class="max-w-lg mx-auto mt-10 border rounded-lg shadow-sm bg-white p-4">
            <!-- Header -->
            <div class="flex items-center gap-3">
              <img :src="Profile" alt="User" class="w-10 h-10 rounded-full" />
              <div>
                <div class="font-semibold">{{memberDetail?.name}}</div>
                <button class="text-sm text-blue-600 bg-gray-100 px-2 py-1 rounded inline-flex items-center">
                  Friends
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            <form @submit.prevent="handleCreate">
              <!-- Textarea -->
              <div class="mt-4 relative">
                <textarea
                    class="w-full text-xl border-none focus:ring-0 resize-none placeholder-gray-500"
                    rows="3"
                    :placeholder="`What'son your mind ? ${memberDetail?.name } ?`"
                    v-model="formData.post_content"
                ></textarea>
              </div>

              <!-- Color/Emoji Tools -->
              <div class="flex flex-end items-center mt-4 px-1">
                <IconSmile  class="w-6 h-6" />
              </div>

              <!-- Media Options -->
              <div class="mt-4 border rounded-lg p-2 flex items-center justify-between text-gray-700 text-sm">
                <span>Add to your post</span>
                <div class="flex gap-2">
                  <input
                      type="file"
                      accept="image/*"
                      class="hidden"
                      ref="fileInput"
                      @change="onFileChange"
                  />
                  <IconImage class="text-blue-600 cursor-pointer" @click="fileInput?.click()" />
                  <img src="https://img.icons8.com/fluency/24/000000/user-group-man-man.png" />
                  <!--                <img src="https://img.icons8.com/fluency/24/000000/happy.png" />-->
                  <!--                <img src="https://img.icons8.com/fluency/24/000000/marker.png" />-->
                  <!--                <img src="https://img.icons8.com/fluency/24/000000/gif.png" />-->
                </div>
              </div>

              <!-- Post Button -->
              <div class="mt-4 bg-blue-700 hover:bg-teal-800 p-1 rounded-md">
                <button class="w-full p-2  text-white py-2 rounded-md font-semibold ">Post</button>
              </div>
            </form>

          </div>

        </div>
      </ion-content>
    </UserLayout>
  </ion-page>
</template>

<style scoped>

</style>
