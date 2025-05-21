<script setup lang="ts">
import UserLayout from "~/layouts/UserLayout.vue";
import { useRoute } from 'vue-router';
import {useUserStore} from "~/stores/userStore";

definePageMeta({
  name: 'authenticated-messaging-id'
});

const { $api } = useNuxtApp();

const userStore = useUserStore();
const user = userStore.getUser;
const route = useRoute();
const memberId = route.params.id;

const userData = userStore.getUser;

if(!userData?.token){
  await navigateTo({ path: '/' })
}

const showMessageList = ref([]);

const formData = reactive({
  from_user_id: userData.user.id,
  to_user_id: memberId,
  message: "",
  type: "text"
});

const { data: memberDetail } = await $api.get(`member-detail/${memberId}`, {
  headers: {
    Authorization: `Bearer ${userData?.token}`
  }
});

const showMessage = async () => {
  try {
    const { data } = await $api.get(`/messenger/show/${formData.from_user_id}/${memberId}`, {
      headers: {
        Authorization: `Bearer ${userData?.token}`
      }
    });

    const sortedMessages = data.message.sort((a, b) => {
      return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    });

    showMessageList.value = sortedMessages;
  } catch (err) {
    console.error("Show failed", err);
    return { err };
  }
}

const handleSend = async () => {
  try {
    await $api.post('/messenger/create', formData , {
      headers: {
        Authorization: `Bearer ${userData?.token}`
      }
    }).catch((err)=>{
      throw new Error(err);
    });

    showMessageList.value.push(formData);

  } catch (err) {
    console.error("signup failed", err);
    return {err};
  }
};

setInterval(()=>{
  showMessage();
},5000);

</script>

<template>
  <ion-page>
    <UserLayout :is-toolbar="false">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/authenticated/dashboard"></ion-back-button>
          </ion-buttons>
          <div class="flex justify-end items-center" v-if="memberDetail">
            <div class="text-black px-2 flex justify-end text-right">
              <div class="w-3 h-3 bg-green-500 rounded-full mx-1 items-center mt-1 font-bold"></div> {{memberDetail?.name}}
            </div>
            <div class="w-10 h-10 bg-amber-700 rounded-full flex justify-center items-center text-white mr-2">U</div>
          </div>
        </ion-toolbar>
      </ion-header>
      <ion-content>

        <div class="w-full p-2">
          <div class="overflow-y-auto h-96">
            <transition-group
                name="fade-slide"
                tag="div"
                class="overflow-y-auto h-96"
            >
              <div v-for="message in showMessageList" :key="message.id" class="message-bubble">
                <!-- Message from the other person -->
                <div
                    class="flex items-start space-x-4 my-2"
                    v-if="message.from_user_id != user.user.id"
                >
                  <div class="w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center text-white text-xs">U</div>
                  <div class="bg-blue-100 p-2 rounded-lg text-sm max-w-xs break-words">
                    <p>{{ message.message }}</p>
                  </div>
                </div>

                <!-- Message from the logged-in user -->
                <div
                    class="flex items-end space-x-4 justify-end my-2"
                    v-else
                >
                  <div class="bg-gray-200 p-2 rounded-lg text-sm max-w-xs break-words text-right">
                    <p>{{ message.message }}</p>
                  </div>
                  <div class="w-8 h-8 bg-gray-600 rounded-full flex justify-center items-center text-white text-xs">Me</div>
                </div>
              </div>
            </transition-group>

          </div>
        </div>
          <div class="absolute bottom-0 w-full bg-orange-500 p-2">
            <div class="flex items-center gap-2">
              <!-- Input takes up remaining space -->
              <IconPlusCircle/>
              <input
                  type="text"
                  placeholder="Type a message..."
                  v-model="formData.message"
                  class="flex-1 bg-gray-200 text-red-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <!-- Right-aligned icons -->
              <button class="p-2">
                <IconPaperclip />
              </button>
              <button class="p-2" @click="handleSend">
                <IconSend />
              </button>
            </div>
          </div>
      </ion-content>
    </UserLayout>
  </ion-page>
</template>

<style scoped>

</style>
