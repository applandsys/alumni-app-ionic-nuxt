<script setup>
import ContactIcon from "assets/images/contact.png";

const {donerList} = defineProps(['doner-list']);
const config = useRuntimeConfig();


</script>

<template>
  <div class="max-w-sm bg-white shadow-md rounded-lg p-4 mt-2"  v-for="list in donerList.data.blood_doners">
    <div class=" flex gap-4 items-start ">
      <div>
        <img :src="`${config.public.imageBase}/blood_doner/${list.photo}`" alt="Profile" class="w-16 h-16 rounded-md object-cover" />
      </div>
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <div class="font-bold text-sm">{{list.name}}</div>
          <IconVerified class="text-green-800"/>
        </div>
        <p class="text-xs text-gray-700">শেষ রক্তদানঃ {{list.last_donation_date}}</p>
        <p class="text-xs text-gray-700">পরবর্তী তারিখঃ {{list.next_donation_date}}</p>
        <p class="text-xs text-gray-700">{{list?.address}}</p>
      </div>
    </div>

    <div class="flex">
      <p class="text-xs text-gray-700 mt-1">মোট রক্তদানঃ <strong>{{list.donation_count}} বার</strong></p>
    </div>

    <div class="">
      <div class="mt-2 flex gap-2 justify-between">
        <div class="text-xs">{{list.address}}</div>
        <div>
          <button class="bg-gray-100 text-pink-600 text-sm px-2 py-1 rounded-md flex items-center gap-1">
            <span class="text-base font-bold">{{list.blood_group}}</span>
          </button>
        </div>
        <div>
          <a :href="`tel:${list?.phone_number}`">
            <div class="bg-teal-600 text-white p-1 rounded-md">
              <IconPhone/>
            </div>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>