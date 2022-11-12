<template>
  <RouterView />
</template>
<script setup lang="ts">
import { useQueryProvider } from "vue-query";

useQueryProvider();
</script>