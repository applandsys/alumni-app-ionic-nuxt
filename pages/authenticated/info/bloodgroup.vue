<script setup lang="ts">

import UserLayout from "~/layouts/UserLayout.vue";
import SearchInput from "~/components/ui/search-input.vue";
import BloodnoderList from "~/components/info/bloodnoder-list.vue";

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
              <div class="px-4 py-2 flex">
                  <SearchInput/>
              </div>
              <div class="mt-4 mx-4">
                <BloodnoderList/>
                <BloodnoderList/>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </UserLayout>
  </ion-page>
</template>


