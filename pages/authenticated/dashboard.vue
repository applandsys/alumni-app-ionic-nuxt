<script setup lang="ts">
import { useRouter } from 'vue-router';
import { userStore } from '#imports';
import MenuItem from "~/components/menuItem.vue";
const logo = require('@/assets/images/profile.png');

const { logout } = useAuth();
const router = useRouter();

const userData = userStore();

if(!userData.user?.token){
  console.log('token nai');
  await navigateTo({ path: '/' })
}

const handleLogout = () => {
  logout();
  router.push('/auth');
};
</script>

<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <div class="flex">
              <div>
                <div v-if="userData?.user" class="block flex flex-col m-4">
                  <ion-text class="text-2xl font-bold"> {{ userData?.user?.name }} </ion-text>
                  <ion-text class="text-gray-900"> Join Secretary </ion-text>
                </div>
                <div class="bg-white p-1 rounded-3xl inline-block ml-4 px-4">
                  <ion-text class="text-blue-700 text-sm">Uttara, Dhaka</ion-text>
                </div>
              </div>
              <div class="flex justify-end">
                <div class="p-1 mt-4 rounded-full">
                  <img :src="logo" alt="Logo">
                </div>
              </div>
            </div>
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

    <ion-footer>
        <ion-toolbar>
        <div class="flex flex-1 justify-around rounded-t-xl bg-amber-50 p-1">

          <div class="flex flex-col items-center p-1" >
            <IconHome/>
            <ion-label>Home</ion-label>
          </div>

          <div style="border-right: 1px solid #ccc" class="my-4"></div>

          <div class="flex flex-col items-center p-2" >
            <IconUser/>
            <ion-label>Profile</ion-label>
          </div>

          <div style="border-right: 1px solid #ccc" class="my-4"></div>

          <div class="flex flex-col items-center p-2" >
            <IconTable/>
            <ion-label>To do</ion-label>
          </div>

          <div style="border-right: 1px solid #ccc" class="my-4"></div>

          <div class="flex flex-col items-center p-2" >
            <IconBell/>
            <ion-label>Notify</ion-label>
          </div>

          <div style="border-right: 1px solid #ccc" class="my-4"></div>

          <div class="flex flex-col items-center p-2" >
            <IconLogOut/>
            <ion-label>Logout</ion-label>
          </div>
        </div>
        </ion-toolbar>
    </ion-footer>

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
