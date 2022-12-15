<template>
  <AdminHome>
    <template #content>
      <blog-main />
    </template>
  </AdminHome>
</template>
<script lang="ts">
import BlogMain from './BlogMan/BlogManager.vue';
export default {
  components: { BlogMain },
};
</script>
