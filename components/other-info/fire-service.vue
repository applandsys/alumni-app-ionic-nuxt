<script lang="ts" setup>
  const props = defineProps(['serviceProvider','location','number']);
</script>
<template>
  <div class="bg-white shadow p-2 rounded-lg flex justify-between items-center">
    <div class="flex items-center">
      <div> <IconFireExtinguisher class="h-8 w-8 mx-2 text-red-500"/></div>
      <div>
        <h2 class="text-lg font-semibold">{{ props.serviceProvider }}</h2>
        <p class="text-sm text-gray-600">{{ props.location }}</p>
        <p class="text-sm text-gray-600">{{ props.number }}</p>
      </div>
    </div>
    <div class="flex space-x-2 px-2">
      <button class="text-gray-500 hover:text-gray-700">
        <IconCopy/>
      </button>
      <a :href="`tel:${props.number }`" class="text-green-600 hover:text-green-800">
        <IconPhone/>
      </a>
    </div>
  </div>
</template>