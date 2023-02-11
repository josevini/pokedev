<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
  .main {
    width: 100%;
    min-height: 100vh;
    background-color: #FE4E6E;
  }
</style>