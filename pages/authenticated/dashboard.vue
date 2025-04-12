<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '#imports';
import MenuItem from "~/components/menuItem.vue";
import Profile from "~/assets/images/profile.png";
import UserLayout from "~/layouts/UserLayout.vue";

const router = useRouter();
const userStore = useUserStore();
const user = userStore.getUser;


if(!user?.token){
  console.log('token nai Dashbaord');
  await navigateTo({ path: '/' })
}
</script>

<template>
  <ion-page>
    <UserLayout :is-toolbar="true">
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="flex justify-between mt-4">
                <div>
                  <div v-if="user" class="flex flex-col m-4">
                    <ion-text class="text-2xl font-bold"> {{ user.name }} </ion-text>
                    <ion-text class="text-gray-900"> Join Secretary </ion-text>
                  </div>
                  <div class="bg-white p-1 rounded-3xl inline-block ml-4 px-4">
                    <ion-text class="text-blue-700 text-sm">Uttara, Dhaka</ion-text>
                  </div>
                </div>
                <div class="flex justify-end">
                  <div class="p-1 mt-4 mr-4  rounded-full">
                    <img :src="Profile" alt="Logo" width="64px">
                  </div>
                </div>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid class="mt-4">
          <ion-row>
            <ion-col>
              <MenuItem>
                <IconDollarSign :size="50" color="#ff5733"/>
                <ion-text class="text-3xl text-amber-700">88%</ion-text>
                <ion-text class=" text-gray-700  text-sm">Donation</ion-text>
              </MenuItem>
            </ion-col>
            <ion-col>
              <MenuItem>
                <IconUserRoundCog :size="50" color="#ff5733"/>
                <ion-text class="text-3xl text-amber-700">88%</ion-text>
                <ion-text class="text-gray-700 text-sm">Attendance</ion-text>
              </MenuItem>
            </ion-col>
          </ion-row>
        </ion-grid>

        <div class="border-b-green-300 border-1 mx-2 mt-4"> </div>

        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="ml-4 text-1xl font-bold mt-5 text-amber-800">Community</div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconContactRound :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">News</ion-text>
                </div>
              </MenuItem>
            </ion-col>

            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconContactRound :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Social</ion-text>
                </div>
              </MenuItem>
            </ion-col>
            <ion-col>
              <NuxtLink to="/authenticated/members">
                <MenuItem>
                  <IconMail :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Messaging</ion-text>
                </MenuItem>
              </NuxtLink>
            </ion-col>
            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconCalendar :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Event</ion-text>
                </div>
              </MenuItem>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <MenuItem>
                <IconHandHeart :size="30" color="#ff5733"/>
                <ion-text class=" text-gray-700  text-sm">Volunteer</ion-text>
              </MenuItem>
            </ion-col>
            <ion-col>
              <MenuItem>
                <IconLandmark :size="30" color="#ff5733"/>
                <ion-text class=" text-gray-700  text-sm">Committee</ion-text>
              </MenuItem>
            </ion-col>
            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconUserCheck :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Election</ion-text>
                </div>
              </MenuItem>
            </ion-col>
            <ion-col>
              <MenuItem>
                <IconLandmark :size="30" color="#ff5733"/>
                <ion-text class=" text-gray-700  text-sm">Gallery</ion-text>
              </MenuItem>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="ml-4 text-1xl font-bold mt-5 text-amber-800">Urgent Info</div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconMegaphone :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Leaders</ion-text>
                </div>
              </MenuItem>
            </ion-col>

            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconCloudFog :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Weather</ion-text>
                </div>
              </MenuItem>
            </ion-col>
            <ion-col>
              <NuxtLink to="/authenticated/members">
                <MenuItem>
                  <IconHotel :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Hotels</ion-text>
                </MenuItem>
              </NuxtLink>
            </ion-col>
            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconShield :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Police</ion-text>
                </div>
              </MenuItem>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconSyringe :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Blood </ion-text>
                </div>
              </MenuItem>
            </ion-col>

            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconAmbulance :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Ambulance</ion-text>
                </div>
              </MenuItem>
            </ion-col>
            <ion-col>
              <NuxtLink to="/authenticated/members">
                <MenuItem>
                  <IconFireExtinguisher :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Fire St.</ion-text>
                </MenuItem>
              </NuxtLink>
            </ion-col>
            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconBinoculars :size="30" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Survey</ion-text>
                </div>
              </MenuItem>
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
