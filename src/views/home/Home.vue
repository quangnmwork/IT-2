<script setup lang="ts">
import { useQuery } from 'vue-query';
import { getAllPost } from '~/services/post';

const { data } = useQuery({
  queryFn: getAllPost,
  onSuccess: () => {
    // console.log(data);
  },
});
</script>

<template>
  <Navbar />

  <div class="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
    <Loading
      v-if="!data?.length"
      class="mt-14"
    />
    <div class="grid gap-10 lg:gap-10 md:grid-cols-2">
      <PostList
        v-if="data?.length"
        :post="data[0]"
        aspect="landscape"
      />
      <PostList
        v-if="data?.length"
        :post="data[1]"
        aspect="landscape"
      />
    </div>
    <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
      <PostList
        v-for="(post, id) in data ? data.slice(2) : []"
        :key="id"
        :post="post"
      />
    </div>
  </div>
  <Footer />
</template>

<style scoped></style>

