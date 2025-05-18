<script setup lang="ts">

  import UserLayout from "~/layouts/UserLayout.vue";
  import SearchInput from "~/components/ui/search-input.vue";
  import BloodnoderList from "~/components/info/bloodnoder-list.vue";
  import {getApiData} from "~/composables/getApiData";

  const bloodDoners = ref([]);

  const getBoolDoners = async() => {
    const {data} = await getApiData('info/show-blood-doner',[]);
    bloodDoners.value = data;
  }
  getBoolDoners();
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


