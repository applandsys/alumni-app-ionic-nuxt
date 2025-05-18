<script lang="ts" setup>
  const props = defineProps(['service','number']);
</script>
<template>
  <div class="bg-white shadow p-2 rounded-lg flex justify-between items-center">
    <div>
      <h2 class="text-lg font-semibold">{{ props.service }}</h2>
      <p class="text-sm text-gray-600">মোবাইল: {{ props.number }}</p>
    </div>
    <div class="flex space-x-2">
      <button class="text-gray-500 hover:text-gray-700">
        <IconCopy/>
      </button>
      <a :href="`tel:${props.number }`" class="text-green-600 hover:text-green-800">
        <IconPhone/>
      </a>
    </div>
  </div>
</template>