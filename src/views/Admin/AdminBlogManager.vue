<template>
  <AdminHome>
    <template #content>
      <BlogManager />
    </template>
  </AdminHome>
</template>
<script>
import BlogManager from '~/views/Admin/BlogMan/BlogManager.vue';
export default {
  components: { BlogManager },
};
</script>
