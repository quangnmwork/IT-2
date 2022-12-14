<script setup lang="ts">
import { useRoute } from 'vue-router';

const data = ref<any[]>([]);
const route = useRoute();

watchEffect(async () => {
  const res = await axiosClient.get('/post', { params: { searchQuery: route.query.inp } });
  data.value = res.data;
});
</script>

<template>
  <Navbar />
  <div class="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
    <Loading
      v-if="!data?.length"
      class="mt-14"
    />
    <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
      <PostList
        v-for="(post, id) in data ? data : []"
        :key="id"
        :post="post"
      />
    </div>
  </div>
  <Footer />
</template>

<style scoped></style>
