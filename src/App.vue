<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { useQueryProvider } from 'vue-query';
import { RouterView } from 'vue-router';

useQueryProvider();
</script>
<style scoped></style>
