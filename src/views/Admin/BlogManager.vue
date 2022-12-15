<script setup lang="ts">
import { ref } from 'vue';
import { getAllPost } from '~/services/post';

import { AllPostResponse } from '~/types';

const searchKey = ref('');

const posts = ref<AllPostResponse[]>([]);

watchEffect(async () => {
  const res = await getAllPost();
  posts.value = res;
});

const blogFilter = computed(() => {
  const post = posts.value.filter((u) => u.title.toLowerCase().includes(searchKey.value));

  return post;
});
</script>
<script lang="ts">
export default {
  name: 'BlogMain',
};
</script>

<template>
  <div>
    <Breadcrumb breadcrumb="Blog Manager" />

    <!--Banner get you to github repo-->

    <div class="mt-5">
      <div class="flex items-center">
        <button class="text-gray-500 focus:outline-none lg:hidden">
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div class="relative mx-4 lg:mx-0">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              class="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <input
            v-model="searchKey"
            class="w-32 pl-10 pr-4 py-2 text-indigo-600 border-gray-200 rounded-md sm:w-64 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            type="text"
            placeholder="Search post"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">ID</th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Title</th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Created At</th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <Blog-Item
                v-for="(_u, index) in blogFilter || []"
                :key="index"
                :blog="blogFilter[index]"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
