<template>
  <ion-card class="m-1 p-2 w-full" >
    <NuxtLink :to="href">
    <div class="flex flex-col items-center" >
      <div><img :src="props.image" alt="Logo" width="40px"></div>
      <div class="mt-2"><ion-text class="text-gray-700 text-[10px]  text-center">{{ props.title }}</ion-text></div>
    </div>
    </NuxtLink>
  </ion-card>
</template>


<script setup lang="ts">
interface Props  {
  image?: String;
  title?: String;
  href: String;
}
const props =  defineProps<Props>();
</script>