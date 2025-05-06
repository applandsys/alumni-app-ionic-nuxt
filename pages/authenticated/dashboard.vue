<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '#imports';
import MenuItem from "~/components/menuItem.vue";
import Profile from "~/assets/images/profile.png";
import BloodDonerIcon from "~/assets/images/blood-doner.png";
import SimPackageIcon from "~/assets/images/sim-package.png";
import DoctorIcon from "~/assets/images/doctor.png";
import RailIcon from "~/assets/images/rail.png";
import VoteIcon from "~/assets/images/vote.png";
import IdentityIcon from "~/assets/images/identity-theft.png";
import CarIcon from "~/assets/images/car.png";
import ContactsIcon from "~/assets/images/contacts.png";
import FireServiceIcon from "~/assets/images/fire-service.png";
import AmbulenceIcon from "~/assets/images/ambulance.png";
import PoliceStation from "~/assets/images/police-station.png";
import TimetableIcon from "~/assets/images/timetable.png";
import PoliticianIcon from "~/assets/images/politician.png";
import WeatherIcon from "~/assets/images/atmospheric-conditions.png";
import HotelIcon from "~/assets/images/hotel.png";
import UserLayout from "~/layouts/UserLayout.vue";

const router = useRouter();
const userStore = useUserStore();
const user = userStore.getUser;


if(!user?.token){
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
                <div class="">
                  <div v-if="user" class="flex flex-col m-4">
                    <!-- <ion-text class="text-2xl font-bold"> {{ user.name }} </ion-text>
                    <ion-text class="text-gray-900"> Join Secretary </ion-text> -->
                  </div>
                  <div class="bg-white p-1 rounded-3xl inline-block ml-4 px-4 flex flex-col">
                    <ion-text class="text-2xl font-bold"> {{ user.name }}  </ion-text>
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

        
        <div class="border-b-green-300 border-1 mx-2 mt-4"> </div>

        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="ml-4 text-2xl font-bold mt-5 text-amber-800">জরুরি তথ্য ও সেবা</div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="flex justify-start item-center m-1">
                <MenuItem :image="BloodDonerIcon" title="রক্ত দাতা" href="/authenticated/info/bloodgroup"/>
                <MenuItem :image="SimPackageIcon" title="সিম প্যাকেজ" href="/authenticated/info/bloodgroup" />
                <MenuItem :image="DoctorIcon" title="স্বাস্থ্য সেবা" href="/authenticated/info/healthcare" />
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="flex justify-start item-center m-1">
                <MenuItem :image="RailIcon" title="রেল শিডিউল" href="/authenticated/info/railschedule" />
                <MenuItem :image="VoteIcon" title="মতামত যাচাই" href="/authenticated/dashboard" />
                <MenuItem :image="IdentityIcon" title="পরিচয়  খুজুন" href="/authenticated/info/idsearch" />
                <MenuItem :image="CarIcon" title="গাড়ি ভাড়া" href="/authenticated/dashboard" />
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>

                
        <div class="border-b-green-300 border-1 mx-2 mt-4"> </div>
        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="ml-4 text-2xl font-bold mt-5 text-amber-800"> অন্যান্য তথ্য ও সেবা </div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="flex justify-start item-center m-1">
                <MenuItem :image="ContactsIcon" title="জরুরি নম্বর" href="/authenticated/dashboard" />
                <MenuItem :image="AmbulenceIcon" title="এম্বুলেন্স" href="/authenticated/dashboard" />
                <MenuItem :image="FireServiceIcon" title="ফায়ার সার্ভিস" href="/authenticated/dashboard" />
                <MenuItem :image="PoliceStation" title="পুলিশ" href="/authenticated/dashboard" />
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="flex justify-start item-center m-1">
                <MenuItem :image="PoliticianIcon" title="রাজনেতা" />
                <MenuItem :image="TimetableIcon" title="বাস শিডিউল" />
                <MenuItem :image="WeatherIcon" title="আবহওয়া" />
                <MenuItem :image="HotelIcon" title="আবা: হোটেল" />
              </div>
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
