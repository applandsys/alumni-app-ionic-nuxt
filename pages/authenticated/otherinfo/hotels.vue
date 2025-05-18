<script setup>
import UserLayout from "~/layouts/UserLayout.vue";

</script>
<template>
  <ion-page>
    <UserLayout :is-toolbar="true">
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="mx-4 mt-4">
                <h1>Abasik hotel</h1>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </UserLayout>
  </ion-page>
</template>