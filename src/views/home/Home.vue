<script setup lang="ts">
const postList = [
  {
    banner: 'https://phongnhalocals.com/wp-content/uploads/2022/06/my-khe-beach-da-nang-phong-nha-locals-9-1024x639.png',
    title: 'My Khe Beatiful Place',

    nameAuthor: 'Makima ',
    createdDate: '8-11-2022',
  },
  {
    banner: 'https://phongnhalocals.com/wp-content/uploads/2022/06/my-khe-beach-da-nang-phong-nha-locals-9-1024x639.png',
    title: 'My Khe Beatiful Place',

    nameAuthor: 'Makima ',
    createdDate: '8-11-2022',
  },
  {
    banner: 'https://phongnhalocals.com/wp-content/uploads/2022/06/my-khe-beach-da-nang-phong-nha-locals-9-1024x639.png',
    title: 'My Khe Beatiful Place',

    nameAuthor: 'Makima ',
    createdDate: '8-11-2022',
  },
  {
    banner: 'https://phongnhalocals.com/wp-content/uploads/2022/06/my-khe-beach-da-nang-phong-nha-locals-9-1024x639.png',
    title: 'My Khe Beatiful Place',

    nameAuthor: 'Makima ',
    createdDate: '8-11-2022',
  },
  {
    banner: 'https://phongnhalocals.com/wp-content/uploads/2022/06/my-khe-beach-da-nang-phong-nha-locals-9-1024x639.png',
    title: 'My Khe Beatiful Place',

    nameAuthor: 'Makima ',
    createdDate: '8-11-2022',
  },
  {
    banner: 'https://media-cdn.tripadvisor.com/media/photo-s/19/bc/b3/34/getlstd-property-photo.jpg',
    title: 'My Khe Beatiful Place',

    nameAuthor: 'Makima ',
    createdDate: '8-11-2022',
  },
  {
    banner: 'https://media-cdn.tripadvisor.com/media/photo-s/19/bc/b3/34/getlstd-property-photo.jpg',
    title: 'My Khe Beatiful Place',

    nameAuthor: 'Makima ',
    createdDate: '8-11-2022',
  },
  {
    banner: 'https://phongnhalocals.com/wp-content/uploads/2022/06/my-khe-beach-da-nang-phong-nha-locals-9-1024x639.png',
    title: 'My Khe Beatiful Place',

    nameAuthor: 'Makima ',
    createdDate: '8-11-2022',
  },
];
</script>

<template>
  <Navbar />
  <div class="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
    <div class="grid gap-10 lg:gap-10 md:grid-cols-2">
      <PostList
        aspect="landscape"
        v-bind="postList[0]"
      />
      <PostList
        aspect="landscape"
        v-bind="postList[0]"
      />
    </div>
    <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
      <PostList
        v-for="(post, id) in postList"
        v-bind="post"
        :key="id"
      />
    </div>
  </div>
  <Footer />
</template>

<style scoped></style>

