<script setup>
import UserLayout from "~/layouts/UserLayout.vue";
import FireService from "~/components/other-info/fire-service.vue";

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
                  <ion-title><slot name='tm-page-title'> <span class="text-white">জরুরি ফায়ার সার্ভিস</span></slot></ion-title>
                </ion-toolbar>
              </ion-header>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="px-2 mt-2">
                <FireService location="Nilfamari Sadar" service-provider="Tariq Fire Service" number="5454545" />
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </UserLayout>
  </ion-page>
</template>