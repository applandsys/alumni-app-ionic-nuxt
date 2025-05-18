<script setup lang="ts">
const props =  defineProps(['placeholder','value'])
</script>

<template>
  <div class="flex">
    <div class="flex items-center bg-gray-100 rounded-md overflow-hidden w-full">
      <div class="pl-3 text-gray-500">
        <IconSearch/>
      </div>
      <input
          type="text"
          :placeholder="props.placeholder"
          class="bg-gray-100 focus:outline-none px-2 py-2 w-48 text-xs"
      />
    </div>

    <div class="ml-2">
      <div class="bg-teal-700 hover:bg-teal-800 text-white p-2 rounded-md ">
        <IconSearch/>
      </div>
    </div>
  </div>
</template>
