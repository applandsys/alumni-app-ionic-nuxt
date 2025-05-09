<script setup lang="ts">
useHead({
  title: 'Digital Bangladesh',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }
  ],
  bodyAttrs: {
    class: 'test-body-class'
  }
})
</script>

<template>
    <ion-page>
      <ion-header class="pt-safe">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title><slot name='tm-page-title'></slot></ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="pt-safe">
        <ion-text>
          <div class="header-text">
            <slot name="tm-header-text"></slot>
          </div>
        </ion-text>
        <div>
            <slot></slot> 
        </div>
      </ion-content>
    </ion-page>
</template>


<style scoped>
  ion-toolbar{
    --background: rgb(123,203,140);
  }
  ion-content {
    --background: rgb(123,203,140);
    --background: linear-gradient(90deg, rgba(123,203,140,1) 0%, rgb(167, 243, 177) 60%);
  }

  ion-button{
    --background: green;
  }

  .header-text{
    padding: 20px;
  }
</style>
