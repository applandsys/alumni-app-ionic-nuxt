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
import CommunicationIcon from "~/assets/images/communication.png";
import EventIcon from "~/assets/images/communication.png";
import GroupIcon from "~/assets/images/group.png";

const router = useRouter();
const userStore = useUserStore();
const userData = userStore.getUser;
const config = useRuntimeConfig();
const SCOPE = config.public.appScope || "normal";

if(!userData?.token){
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
                <ion-header>
                  <div class="flex justify-between items-center mt-4">
                    <div class="p-4">
                      <div class="bg-gray-100 p-1 rounded-2xl px-4  flex flex-col" v-if="userData" >
                        <ion-text class="text-2xl font-bold"> {{ userData?.user.name }}  </ion-text>
                        <ion-text class="text-blue-700 text-sm">{{userData.user?.division?.name}}, {{userData.user?.district?.name}},{{userData.user?.sub_district?.name}}</ion-text>
                      </div>
                    </div>
                    <div class="flex justify-end">
                      <div class="p-1  mr-4  rounded-full">
                        <img :src="Profile" alt="Logo" width="64px">
                      </div>
                    </div>
                  </div>
                </ion-header>
              </ion-col>
            </ion-row>
          </ion-grid>

        <!-- Zakier Patwary-->
        <div v-if="SCOPE==='PARTY'">
          <div class="border-b-green-300  mx-2 mt-4"> </div>
          <ion-grid>
            <ion-row>
              <ion-col>
                <div class="ml-4 text-2xl font-bold mt-5 text-amber-800">ব্যবস্থাপনা</div>
              </ion-col>
            </ion-row>
          </ion-grid>

          <ion-grid>
            <ion-row>
              <ion-col>
                <div class="flex justify-start item-center m-1">
                  <MenuItem :image="CommunicationIcon" title="যোগাযোগ" href="/authenticated/members"/>
                  <MenuItem :image="EventIcon" title=" মিটিং / ইভেন্ট" href="/authenticated/management/event" />
                  <MenuItem :image="GroupIcon" title="কমিটি" href="/authenticated/management/committee" />
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
          <div class="border-b-green-300 border-1 mx-2 mt-4"> </div>
        </div>
        <!-- Zakier Patwary end-->

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
                <MenuItem :image="SimPackageIcon" title="ইমারজেন্সি কল" href="/authenticated/info/bloodgroup" />
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
                <MenuItem :image="VoteIcon" title="মতামত যাচাই" href="/authenticated/info/votingpoll" />
                <MenuItem :image="IdentityIcon" title="পরিচয়  খুজুন" href="/authenticated/info/idsearch" />
                <MenuItem :image="CarIcon" title="গাড়ি ভাড়া" href="/authenticated/info/rentacar" />
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
                <MenuItem :image="ContactsIcon" title="জরুরি নম্বর" href="/authenticated/otherinfo/urgentnumber" />
                <MenuItem :image="AmbulenceIcon" title="এম্বুলেন্স" href="/authenticated/otherinfo/ambulence" />
                <MenuItem :image="FireServiceIcon" title="ফায়ার সার্ভিস" href="/authenticated/otherinfo/fireservice" />
                <MenuItem :image="PoliceStation" title="পুলিশ" href="/authenticated/otherinfo/police" />
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="flex justify-start item-center m-1">
                <MenuItem :image="PoliticianIcon" title="রাজনেতা" href="/authenticated/otherinfo/political-leader" />
                <MenuItem :image="TimetableIcon" title="বাস শিডিউল" href="/authenticated/otherinfo/bus-schedule" />
                <MenuItem :image="WeatherIcon" title="আবহওয়া" href="/authenticated/otherinfo/weather" />
                <MenuItem :image="HotelIcon" title="আবা: হোটেল" href="/authenticated/otherinfo/hotels" />
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
