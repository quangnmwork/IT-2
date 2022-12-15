<script setup lang="ts">
import { ref } from 'vue';
import { useSidebar } from '../SideBar/useSidebar';
import { useRouter } from 'vue-router';
import { useAuth } from '~/pinia/auth';
import { getProfile } from '~/services/user';
import { UserProfile } from '~/types';

const userProfile = reactive<Partial<UserProfile>>({});

const router = useRouter();
const auth = useAuth();

const onLogout = () => {
  router.push('/');
  localStorage.removeItem('auth');
};

watchEffect(async () => {
  try {
    const res = await getProfile();

    userProfile.avatar = res.avatar;
    userProfile.username = res.username;
    auth.user = res;
  } catch (error) {
    console.log(error);
  }
});

const dropdownOpen = ref(false);
const { isOpen } = useSidebar();
const notificationOpen = ref(false);
</script>
<template>
  <header class="flex items-center justify-between px-6 py-2 bg-white border-b-4 border-indigo-600">
    <div class="flex items-center">
      <button
        class="text-gray-500 focus:outline-none lg:hidden"
        @click="isOpen = true"
      >
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

      <div class="relative mx-4 lg:mx-0"></div>
    </div>

    <div class="flex items-center">
      <div class="flex items-center">
        <div class="relative">
          <button
            class="flex mx-4 text-gray-600 focus:outline-none"
            @click="notificationOpen = !notificationOpen"
          >
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="relative">
        <button
          class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
          @click="dropdownOpen = !dropdownOpen"
        >
          <img
            class="object-cover w-full h-full"
            :src="userProfile.avatar || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png'"
            alt="Your avatar"
          />
        </button>

        <div
          v-show="dropdownOpen"
          class="fixed inset-0 z-10 w-full h-full"
          @click="dropdownOpen = false"
        ></div>

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div>
            <div
              v-show="dropdownOpen"
              class="absolute right-0 z-20 w-48 py-1 mt-2 bg-white rounded-lg shadow-xl"
            >
              <div
                v-show="dropdownOpen"
                class="flex px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-cyan-400 hover:text-white"
              >
                Hello
                <span class="font-bold ml-1">Admin</span>
              </div>
              <button
                class="flex px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-cyan-400 hover:text-white w-full"
                @click.prevent="onLogout"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Log out
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
