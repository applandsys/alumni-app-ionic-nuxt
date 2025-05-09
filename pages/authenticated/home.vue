<script setup lang="ts">
import MenuItem from "~/components/menuItem.vue";
import UserLayout from "~/layouts/UserLayout.vue";
import Profile from "~/assets/images/profile.png";
import { IconHardDriveUpload } from "#components";
import SocialPost from "~/components/socialpost";

const formData = ref({
    search: "",
  });
</script>

<template>
  <ion-page>
    <UserLayout :is-toolbar="true">
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col>
                    <div class="px-4 pt-4 flex justify-between">
                        <div class="text-2xl">Smart Bangladesh</div>
                        <div class="flex item-center justify-center">
                            <div class="p-2"><IconRefreshCcw/></div>
                            <div class="p-2"><IconBell/></div>
                            <div class="rounded-full">
                                    <img :src="Profile" alt="Logo" width="40px">
                                </div>
                        </div>
                    </div>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <ion-grid>
                <ion-row>
                    <ion-col>
                      <NuxtLink to="/authenticated/social/create">
                        <div class="px-4 py-2">
                            <div type="submit" class=" flex justify-between bg-gray-100 text-gray-900 w-full p-4 rounded-md" >
                                গুরুত্বপূর্ণ তথ্য পোস্ট করুন <IconPlus/>
                            </div>
                            <hr/>
                          <SocialPost/>
                        </div>
                      </NuxtLink>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </UserLayout>
  </ion-page>
</template>

<style scoped>
  ion-toolbar{
    --background: rgb(123,203,140);
  }
  ion-content {
    --background: linear-gradient(90deg, rgba(123,203,140,1) 0%, rgb(167, 243, 177) 60%);
  }
</style>
