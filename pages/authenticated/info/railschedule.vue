<script setup lang="ts">
import UserLayout from "~/layouts/UserLayout.vue";
import {getApiData} from "~/composables/getApiData";


const railSchedule = ref([]);

const getRailSchedule = async() => {
  const {data: railScheduleData} = await getApiData('info/show-rail-schedule',[]);
  railSchedule.value = railScheduleData;
}
getRailSchedule();

</script>

<template>
  <ion-page>
    <UserLayout :is-toolbar="true">
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-header>
                <ion-toolbar>
                  <ion-buttons slot="start">
                    <ion-back-button defaultHref="/"></ion-back-button>
                  </ion-buttons>
                  <ion-title><slot name='tm-page-title'>রেইল শিডিউল</slot></ion-title>
                </ion-toolbar>
              </ion-header>
              <div class="mx-4 my-2">
                <!-- Schedule List -->
                <div class="p-1 space-y-1">

                  <!-- Schedule Card -->
                  <div class="bg-white rounded shadow p-3 space-y-2" v-for="list in railSchedule?.rail_schedule">
                    <div class="flex justify-between items-center">
                      <div class="flex items-center gap-2">
                        <IconTrainTrack class="w-6 h-6 text-amber-700" />
                        <h5 class="font-bold text-black">{{list.rail.rail_name}}</h5>
                      </div>
                      <span class="text-green-600 text-sm font-semibold">পরবর্তী</span>
                    </div>
                    <div class="grid grid-cols-3 text-center text-sm mt-2">

                      <div>
                        <p class="text-black"> {{JSON.parse(list.spot_and_time)[0].spot}}</p>
                        <p class="text-red-500 font-semibold">{{JSON.parse(list.spot_and_time)[0].time}}</p>
                      </div>
                      <div>
                        <p class="text-black">{{JSON.parse(list.spot_and_time)[1].spot}}</p>
                        <p class="text-green-600 font-semibold">{{JSON.parse(list.spot_and_time)[1].time}}</p>
                      </div>
                      <div>
                        <p class="text-black">{{JSON.parse(list.spot_and_time)[2].spot}}</p>
                        <p class="text-red-500 font-semibold">{{JSON.parse(list.spot_and_time)[2].time}}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </UserLayout>
  </ion-page>
</template>


