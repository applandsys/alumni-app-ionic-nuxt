<script setup lang="ts">

import UserLayout from "~/layouts/UserLayout.vue";
import SearchInput from "~/components/ui/search-input.vue";
import BloodnoderList from "~/components/info/bloodnoder-list.vue";
import {useUserStore} from "~/stores/userStore";
const { $api } = useNuxtApp();

const userStore = useUserStore();
const user = userStore.getUser;
const token = user.token;

const {data: bloodDoners} = await $api.get('info/show-blood-doner', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
);


</script>

<template>
  <ion-page>
    <UserLayout :is-toolbar="true">
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="px-4 py-2 flex">
                  <SearchInput/>
              </div>
              <div class="mt-4 mx-4">
                <BloodnoderList :doner-list="bloodDoners"/>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </UserLayout>
  </ion-page>
</template>


