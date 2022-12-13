<script setup lang="ts">
import { useQuery } from 'vue-query';
import { getAllPost } from '~/services/post';

const posts = ref<any[]>([]);
const lengthAllPost = ref<number>(0);
const loadingPost = ref<any[]>([]);

const { data } = useQuery({
  queryFn: getAllPost,
  onSuccess: (data) => {
    posts.value = data.slice(2);
    lengthAllPost.value = posts.value.length;
    let cnt = 3;
    while (cnt > 0) {
      if (posts.value.length) {
        const element = posts.value.shift();

        loadingPost.value.push(element);
      }
      cnt--;
    }

    // console.log(data);
  },
});
const target = ref(null);
const targetIsVisible = ref(false);

useIntersectionObserver(target, async ([{ isIntersecting }], observerElement) => {
  targetIsVisible.value = isIntersecting;

  if (isIntersecting) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    let cnt = 3;
    while (cnt > 0 && posts.value.length) {
      if (posts.value.length) {
        const element = posts.value.shift();

        loadingPost.value.push(element);
      }
      cnt--;
    }
    console.log(loadingPost.value);
  }
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
    <div>
      <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        <PostList
          v-for="(post, id) in data ? loadingPost : []"
          :key="id"
          :post="post"
        />
      </div>
      <div ref="target"></div>
      <div class="flex justify-center mt-10">
        <a-spin
          v-show="targetIsVisible && loadingPost.length !== lengthAllPost"
          size="large"
        />
      </div>

      <!-- <Observer @intersecting="handleIntersecting" /> -->
    </div>
  </div>
  <Footer />
</template>

<style scoped></style>

