<template>
  <RouterView :key="$route.fullPath" />
</template>
<script setup lang="ts">
import { useQueryProvider } from 'vue-query';
import { RouterView } from 'vue-router';

useQueryProvider();
</script>
<style scoped>
css .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
