<script setup>
import ContactIcon from "assets/images/contact.png";

</script>

<template>
  <div class="max-w-sm bg-white shadow-md rounded-lg p-4 flex gap-4 items-start mt-2">
    <img :src="ContactIcon" alt="Profile" class="w-16 h-16 rounded-md object-cover" />
    <!-- Content -->
    <div class="flex-1">
      <div class="flex items-center gap-1">
        <h2 class="font-semibold text-sm">SHEIKH AL-AMIN</h2>
        <svg class="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11.75l1.5 1.5L15 9M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/>
        </svg>
      </div>
      <p class="text-xs text-gray-700">শেষ রক্তদানঃ 06-05-2024</p>
      <p class="text-xs text-gray-700">পরবর্তী তারিখঃ 0 দিন বাকি</p>

      <p class="text-xs text-gray-700 mt-1">মোট রক্তদানঃ <strong>11 বার</strong></p>
      <p class="text-xs text-gray-700">ঠিকানাঃ শ্রীধরপুর, ঝাউডাঙ্গা, নওয়াপাড়া সদর</p>

      <!-- Buttons -->
      <div class="mt-2 flex gap-2">
        <button class="bg-gray-100 text-pink-600 text-sm px-2 py-1 rounded-md flex items-center gap-1">
          <span class="text-base font-bold">0+</span>
        </button>
        <button class="bg-teal-600 text-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.55 4.55a2.121 2.121 0 01-3 3L12 15m0 0l-1.5 1.5a2.121 2.121 0 01-3-3L9 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>