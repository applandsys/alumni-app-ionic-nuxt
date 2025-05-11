<script setup lang="ts">
import Profile from "assets/images/profile.png";

const props = defineProps(['postList']);
const config = useRuntimeConfig();



</script>

<template>
  <ion-card class="mt-2 p-2 w-full" v-for="post in props?.postList?.data?.allpost" :key="post.id">
  <div class="max-w-md mx-auto border border-gray-200 shadow-lg rounded-lg bg-white">
    <div class="flex justify-between">
      <div>
        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0">
            <img :src="Profile" alt="User Icon" class="rounded-full w-12 h-12">
          </div>

          <div class="flex-1">
            <h2 class="font-bold text-sm text-gray-900">{{post.user.name}}</h2>
            <p class="text-xs text-gray-500">11:35 am, 03/12/25</p>
          </div>
        </div>
      </div>
      <div class="p-2">
        <IconEllipsisVertical/>
      </div>
    </div>

    <div class="mt-4">
      <p class="text-gray-900 text-sm">{{post.post_content}}</p>
    </div>
    <div class="mt-3">
      <img :src="`${config.public.imageBase}/social_post/${post.post_image}`" alt="Post Image" class="rounded-lg w-full">-->
    </div>

    <div class="flex justify-between">
      <div>
        <div class="flex items-center mt-4 space-x-4 text-gray-500">
          <button class="text-sm">0 Likes</button>
          <button class="text-sm">1 Comment</button>
        </div>
      </div>
      <div class="flex items-center text-sm mt-2 space-x-4 ">
        158 views
      </div>
    </div>

    <div class="flex justify-between mt-2">
      <div>
        <div class="flex ">
          <IconHeart class="mt-1 mr-1"/>
          <IconMessageCircleMore class="mt-1"/>
        </div>
      </div>
      <div class="flex items-center text-sm mt-2 space-x-4">
        <IconSend class="mx-2"/>
      </div>
    </div>

  </div>
  </ion-card>
</template>
