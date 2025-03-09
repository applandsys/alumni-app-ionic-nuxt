<script setup lang="ts">
import { useRouter } from 'vue-router';
import { userStore } from '#imports';
import MenuItem from "~/components/menuItem.vue";
import Profile from "~/assets/images/profile.png";
import UserLayout from "~/layouts/UserLayout.vue";


const router = useRouter();
const userData = userStore();

if(!userData.user?.token){
  console.log('token nai');
  await navigateTo({ path: '/' })
}
</script>

<template>
  <ion-page>
    <UserLayout>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/authenticated/dashboard"></ion-back-button>
          </ion-buttons>
          <ion-title>Meeting</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              <div>Meeting</div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <MenuItem>
                <IconUserRoundCog :size="50" color="#ff5733"/>
                <ion-text class="text-3xl text-amber-700">88%</ion-text>
                <ion-text class=" text-gray-700  text-sm">Attendance</ion-text>
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

        <ion-grid>
          <ion-row>
            <ion-col>
              <MenuItem>
                <IconClipboardPen :size="50" color="#ff5733"/>
                <ion-text class=" text-gray-700  text-sm">Meeting</ion-text>
              </MenuItem>
            </ion-col>
            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconContactRound :size="50" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Social</ion-text>
                </div>
              </MenuItem>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <MenuItem>
                <IconMail :size="50" color="#ff5733"/>
                <ion-text class=" text-gray-700  text-sm">Messaging</ion-text>
              </MenuItem>
            </ion-col>
            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconCalendar :size="50" color="#ff5733"/>
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
                <IconHandHeart :size="50" color="#ff5733"/>
                <ion-text class=" text-gray-700  text-sm">Volunteer</ion-text>
              </MenuItem>
            </ion-col>
            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconContactRound :size="50" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">News</ion-text>
                </div>
              </MenuItem>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <MenuItem>
                <IconLandmark :size="50" color="#ff5733"/>
                <ion-text class=" text-gray-700  text-sm">Committee</ion-text>
              </MenuItem>
            </ion-col>
            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconUserCheck :size="50" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Candidates</ion-text>
                </div>
              </MenuItem>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <MenuItem>
                <IconLandmark :size="50" color="#ff5733"/>
                <ion-text class=" text-gray-700  text-sm">Gallery</ion-text>
              </MenuItem>
            </ion-col>
            <ion-col>
              <MenuItem>
                <div class="flex flex-col justify-center items-center h-full">
                  <IconUserCheck :size="50" color="#ff5733"/>
                  <ion-text class=" text-gray-700  text-sm">Dontation</ion-text>
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
