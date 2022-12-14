<template>
  <div>
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

        <RichText
          v-model="content"
          :content="myContent"
        />

        <button
          class="bg-cyan-400 hover:bg-cyan-300 border-none outline-none float-right mt-5 mb-3 px-5 py-3 text-white rounded-sm btn"
          :class="isLoading ? 'loading' : ''"
          @click.prevent="onUpdatePost"
        >
          Update
        </button>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useMutation } from '@tanstack/vue-query';
import { getDetailPost, updatePost } from '~/services/post';

import { notification } from 'ant-design-vue';
import { useRoute, useRouter } from 'vue-router';
import { useQuery } from 'vue-query';

const route = useRoute();
const router = useRouter();

const content = ref('');
const myContent = ref('');
const title = ref('');
const file = ref();
const tags = ref<any[]>([]);

const { isLoading, mutate } = useMutation({
  mutationFn: (data: FormData) => updatePost(route.params.id as string, data),
  onSuccess: async () => {
    notification.open({
      type: 'success',
      duration: 2,
      message: 'Update Post Successfully',
    });
    router.push(`/detail/${route.params.id}`);
  },
  onError: async (error) => {
    // An error happened!
    notification.open({
      type: 'error',
      duration: 2,
      message: 'Update Post Fail ! Please try again',
    });
    console.log(error);
  },
});
const { data } = useQuery({ queryKey: 'posts', queryFn: () => getDetailPost(route.params.id as string) });

watchEffect(() => {
  myContent.value = data.value?.content || '';
  title.value = data.value?.title || '';
  tags.value = data.value?.tags || [];
});

const onUpdatePost = async () => {
  const newPost = new FormData();

  newPost.append('content', content.value);
  newPost.append('title', title.value);
  newPost.append('tags', tags.value as any);
  if (file.value.files) {
    newPost.append('thumbnail', file.value.files[0] as any);
  }
  // console.log(content.value);
  mutate(newPost);
};
</script>
<style></style>
