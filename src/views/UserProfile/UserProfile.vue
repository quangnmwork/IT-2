<template>
  <div class="bg-gray-100 min-h-screen py-5">
    <div class="w-full text-white bg-main-color max-w-screen-xl px-4 mx-auto md:px-6 lg:px-8">
      <button
        class="btn btn-square bg-cyan-400 hover:bg-cyan-300 border-none"
        @click="router.push('/')"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffff"
            d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"
          />
        </svg>
      </button>
      <div
        x-data="{ open: false }"
        class="flex flex-col md:items-center justify-between md:flex-row"
      >
        <div class="container mx-auto my-5">
          <div class="md:flex no-wrap md:-mx-2">
            <!-- Left Side -->
            <div class="w-full md:w-3/12 md:mx-2">
              <!-- Profile Card -->
              <div class="bg-white p-3 border-t-4 border-cyan-300">
                <div
                  class="image overflow-hidden"
                  @dragover.prevent
                  @drop.prevent
                >
                  <img
                    class="h-50 w-full mx-auto rounded-full"
                    alt=""
                    :src="avatar || 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'"
                    @drop="dragFile"
                  />
                  <input
                    accept="image/*"
                    className="inputImg"
                    type="file"
                  />
                </div>
                <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{{ username }}</h1>
                <h3 class="text-gray-600 font-lg text-semibold leading-6">{{ location }}</h3>

                <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li class="flex items-center py-3">
                    <span>Status</span>
                    <span class="ml-auto"><span class="bg-cyan-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                  </li>
                  <li class="flex items-center py-3">
                    <span>Member since</span>
                    <span class="ml-auto">{{ memberSince }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 h-64">
              <!-- Profile tab -->
              <!-- About Section -->
              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">About</span>
                </div>
                <Form @submit="onSubmit">
                  <div class="text-gray-700">
                    <div class="grid md:grid-cols-2 text-sm gap-2">
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Username</div>
                        <input
                          v-model="username"
                          class="px-4 py-2 focus:outline-cyan-400"
                          type="text"
                          name="username"
                        />
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Email</div>
                        <input
                          disabled
                          class="px-4 py-2 focus:outline-cyan-400"
                          type="text"
                          name="email"
                          :value="email"
                        />
                      </div>

                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Location</div>
                        <input
                          v-model="location"
                          class="px-4 py-2 focus:outline-cyan-400"
                          type="text"
                          name="location"
                        />
                      </div>
                      <div class="col-span-full grid grid-cols-1">
                        <div class="px-4 py-2 font-semibold">Description</div>
                        <textarea
                          v-model="description"
                          class="px-4 py-2 focus:outline-cyan-400 c"
                          type="text"
                          name="description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button class="block w-full text-cyan-400 text-sm font-semibold rounded-lg hover:bg-slate-200 bg-slate-100 transition-colors focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Save Profile</button>
                </Form>
              </div>
              <!-- End of about section -->

              <div class="my-4"></div>

              <!-- Experience and education -->
              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="grid grid-flow-col">
                  <div>
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span class="tracking-wide">Post Blog</span>
                    </div>
                    <ul class="list-inside space-y-2">
                      <li
                        v-for="(post, id) in postList"
                        :key="id"
                      >
                        <div
                          class="text-cyan-500 cursor-pointer"
                          @click.prevent="
                            () => {
                              router.push(`/detail/${post.id}`);
                            }
                          "
                        >
                          {{ post.title }}
                        </div>
                        <div class="text-gray-500 text-xs">{{ post.createdAt.substring(0, 10) }}</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- End of Experience and education grid -->
              </div>
              <!-- End of profile tab -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { notification } from 'ant-design-vue';
import { Form } from 'vee-validate';
import { useRouter } from 'vue-router';

import { getProfile, updateProfile } from '~/services/user';
import { Post } from '~/types';

const router = useRouter();

const username = ref('Huy');
const location = ref('Danang , Viet Nam');
const description = ref('Hi my name is Quang');
const memberSince = ref('');
const postList = ref<Post[]>([]);
const email = ref('');

const avatar = ref('');
watchEffect(async () => {
  const res = await getProfile();
  username.value = res.username;
  location.value = res.location || '';
  description.value = res.description || '';
  email.value = res.email;
  postList.value = res.posts;
  avatar.value = res.avatar;

  memberSince.value = res.createdAt.substring(0, 10);
});
const dragFile = async (e: any) => {
  try {
    const formUpdate = new FormData();
    formUpdate.append('avatar', e.dataTransfer.files[0]);
    const res = await updateProfile(formUpdate);
    notification.open({
      type: 'success',
      duration: 2,
      message: 'Update avatar successfully',
    });
    avatar.value = res.avatar ? res.avatar : avatar.value;
  } catch (error) {
    console.log(error);
  }
};
const onSubmit = async () => {
  try {
    const formUpdate = new FormData();
    formUpdate.append('username', username.value);
    formUpdate.append('location', location.value);
    formUpdate.append('description', description.value);
    const res = await updateProfile(formUpdate);
    username.value = res.username;
    location.value = res.location || '';
    description.value = res.description;

    notification.open({
      type: 'success',
      duration: 2,
      message: 'Update profile successfully',
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
<style scoped>
:root {
  --main-color: #4a76a8;
}

.bg-main-color {
  background-color: var(--main-color);
}

.text-main-color {
  color: var(--main-color);
}

.border-main-color {
  border-color: var(--main-color);
}
.inputImg {
  width: 180px;
  font-size: 17px;
  opacity: 0;
  display: block;
  position: absolute;
  top: 100px;
  margin-left: 30px;
  padding: 30px 90px 100px 20px;
  cursor: pointer;
}
</style>
