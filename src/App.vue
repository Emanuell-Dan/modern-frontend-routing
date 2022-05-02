<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <TheNavbar />
  <div class="sm:flex container p-5 mx-auto content justify-betweenflex-wrap">
    <RouterView class="view main-content w-full order-2"></RouterView>
    <RouterView name="LeftSidebar" class="view order-1 w-full"></RouterView>
    <RouterView name="RightSidebar" class="view order-3 w-full"></RouterView>
  </div>
  <TheFooter />
</template>
