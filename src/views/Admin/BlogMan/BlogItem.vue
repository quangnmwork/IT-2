<!-- eslint-disable vue/no-mutating-props -->
<template>
  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
    <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{{ props.blog.id }}</span>
  </td>
  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
    <div class="flex items-center">
      <div class="flex-shrink-0 w-10 h-10">
        <img
          class="w-10 h-10 rounded-full"
          :src="props.blog.thumbnail || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'"
          alt=""
        />
      </div>

      <div class="ml-4">
        <div class="text-sm font-medium leading-5 text-gray-900">
          {{ props.blog.title }}
        </div>
        <div class="text-sm leading-5 text-gray-500">
          {{ props.blog.category }}
        </div>
      </div>
    </div>
  </td>

  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
    <div class="text-sm leading-5 text-gray-900">
      {{ props.blog.createdAt.substring(0, 10) }}
    </div>
  </td>
  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
    <label
      :for="props.blog.id.toString()"
      class="btn"
    >
      View & Edit
    </label>

    <!-- Put this part before </body> tag -->
    <input
      :id="props.blog.id.toString()"
      type="checkbox"
      class="modal-toggle"
    />
    <div class="modal">
      <div class="modal-box w-6/12 max-w-5xl">
        <form class="w-full">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text font-bold text-lg">Title</span>
            </label>
            <input
              v-model="title"
              type="text"
              placeholder="Title"
              class="input input-bordered w-full max-w-xs"
            />
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

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text font-bold text-lg">Content</span>
            </label>
            <textarea
              v-model="content"
              class="textarea textarea-bordered min-h-[200px] max-h-[500px]"
            ></textarea>
          </div>
        </form>
        <div class="modal-action">
          <label
            :for="props.blog.id.toString()"
            class="btn btn-error"
          >
            Close
          </label>
          <label
            class="btn btn-info text-white"
            @click="onUpdatePost"
          >
            Save
          </label>
        </div>
      </div>
    </div>
  </td>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-vue';
import { useMutation } from 'vue-query';
import { updatePost } from '~/services/post';
import { AllPostResponse } from '~/types';

interface BlogItemProps {
  blog: AllPostResponse;
}
const props = defineProps<BlogItemProps>();

const content = ref(props.blog.content);
const tags = ref<any>(props.blog.tags);
const title = ref(props.blog.title);

const { mutate } = useMutation({
  mutationFn: (inp: { id: number; data: FormData }) => updatePost(inp.id.toString(), inp.data),
  onSuccess: async () => {
    notification.open({
      type: 'success',
      duration: 2,
      message: 'Update Post Successfully',
    });
  },
  onError: async () => {
    // An error happened!
    notification.open({
      type: 'error',
      duration: 2,
      message: 'Update Post Fail ! Please try again',
    });
  },
  mutationKey: 'update-admin',
});
const onUpdatePost = async () => {
  const newPost = new FormData();

  newPost.append('content', content.value as any);
  newPost.append('title', title.value);
  newPost.append('tags', tags.value as any);

  // console.log(content.value);
  mutate({ data: newPost, id: props.blog.id });
};
</script>
