<template>
  <div  class="my-4 border-b-lime-700"  style="border-right: 1px solid #ccc"></div>
</template>

<script setup lang="ts">
interface Props  {
  color?: string;
}
const props =  defineProps<Props>();
</script>