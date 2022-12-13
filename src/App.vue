<template>
  <RouterView :key="$route.fullPath" />
</template>
<script setup lang="ts">
import { useQueryProvider } from 'vue-query';
import { RouterView } from 'vue-router';

useQueryProvider();
</script>
<style scoped></style>
