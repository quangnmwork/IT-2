<template>
  <Navbar />
  <div class="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg md:gap-10">
    <form>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text font-bold text-lg">Title</span>
        </label>
        <input
          v-model="title"
          type="text"
          placeholder="Title Type here"
          class="input input-bordered w-full max-w-xs border-cyan-400 focus:outline-cyan-400"
        />
      </div>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text font-bold text-lg">Thumbnail</span>
        </label>
        <input
          ref="file"
          accept="image/*"
          className="inputImg"
          type="file"
        />
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text font-bold text-lg">Type</span>
        </label>
        <select
          v-model="select"
          className="select border-cyan-400 focus:outline-cyan-400 w-full max-w-xs z-30"
        >
          <option
            class="uppercase"
            selected
          >
            hotel
          </option>
          <option class="uppercase">restaurant</option>
        </select>
      </div>
      <div class="form-controll w-full max-w-xs">
        <label class="label">
          <span class="label-text font-bold text-lg">Tags</span>
        </label>
        <a-select
          v-model:value="tags"
          mode="tags"
          style="
             {
              padding-left: 1.5rem;
              padding-right: 2.5rem;
              height: 3rem;
              width: 100%;
              border-radius: 5px !important;
            }
          "
          placeholder="Your hash tags"
        />
      </div>

      <RichText v-model="content" />

      <button
        class="bg-cyan-400 hover:bg-cyan-300 border-none outline-none float-right mt-5 mb-3 px-5 py-3 text-white rounded-sm btn"
        :class="isLoading ? 'loading' : ''"
        @click.prevent="onCreatePost"
      >
        Create
      </button>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { useMutation } from '@tanstack/vue-query';
import { createPost } from '~/services/post';
import { Post } from '~/types';
import { notification } from 'ant-design-vue';

const select = ref<'hotel' | 'restaurant'>();
const content = ref('');
const title = ref('');
const file = ref();
const tags = ref<any[]>([]);

const { isLoading, mutate } = useMutation({
  mutationFn: createPost,
  onSuccess: async (data: Post) => {
    notification.open({
      type: 'success',
      duration: 2,
      message: 'Create Post Successfully',
    });
  },
  onError: async (error) => {
    // An error happened!
    notification.open({
      type: 'error',
      duration: 2,
      message: 'Create Post Fail ! Please try again',
    });
    console.log(error);
  },
});

const onCreatePost = async () => {
  const newPost = new FormData();
  newPost.append('category', select.value || 'hotel');
  newPost.append('content', content.value);
  newPost.append('title', title.value);
  newPost.append('tags', tags.value as any);
  if (file.value.files) {
    newPost.append('thumbnail', file.value.files[0] as any);
  }
  mutate(newPost);
};
</script>
<style></style>
