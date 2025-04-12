<script setup lang="ts">
import UserLayout from "~/layouts/UserLayout.vue";
import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore();

const { data : membersList, pending, error } = useApi('members');

</script>

<template>
  <ion-page>
    <UserLayout :is-toolbar="true">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/authenticated/dashboard"></ion-back-button>
          </ion-buttons>
          <ion-title>Members</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item v-for="member in membersList" :key="member.id">
            <ion-label><NuxtLink :to="{ name: 'authenticated-messaging-id', params: { id: member.id } }">{{member.name}}</NuxtLink></ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </UserLayout>
  </ion-page>
</template>

<style scoped>

</style>
