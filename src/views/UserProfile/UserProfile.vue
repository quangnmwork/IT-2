<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="w-full text-white bg-main-color">
      <div
        x-data="{ open: false }"
        class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
      >
        <div class="container mx-auto my-5 p-5">
          <div class="md:flex no-wrap md:-mx-2">
            <!-- Left Side -->
            <div class="w-full md:w-3/12 md:mx-2">
              <!-- Profile Card -->
              <div class="bg-white p-3 border-t-4 border-cyan-300">
                <div class="image overflow-hidden">
                  <img
                    class="h-50 w-full mx-auto rounded-full"
                    alt=""
                    :src="avatar || 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'"
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
                    <span class="ml-auto">Nov 8, 2022</span>
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
                          value="quangnm@gmail.com"
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
                      <li>
                        <div class="text-cyan-500">Restaurant in DaNang</div>
                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                      </li>
                      <li>
                        <div class="text-cyan-500">Hotel in DaNang.</div>
                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                      </li>
                      <li>
                        <div class="text-cyan-500">Hotel in DaNang.</div>
                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                      </li>
                      <li>
                        <div class="text-cyan-500">Hotel in DaNang.</div>
                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
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
import { Form } from 'vee-validate';
// import { useQuery } from '@tanstack/vue-query';
import { getProfile, updateProfile } from '~/services/user';

const username = ref('Huy');
const location = ref('Danang , Viet Nam');
const description = ref('Hi my name is Quang');
const email = ref('');
const avatar = ref('');
watchEffect(async () => {
  const res = await getProfile();
  username.value = res.username;
  location.value = res.location || '';
  description.value = res.description || '';
  email.value = res.email;
  avatar.value = res.avatar;
});

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
