<script lang="ts" setup>
  import Breadcrumb from '../UserMan/partials/Breadcrumb.vue'
  </script>
<template>
    <div>
      <!-- Breadcrumb -->
      <Breadcrumb breadcrumb="Blog Manager" />
      <div class="text-center">
      <div class="flex items-center">
      <button
        
        class="text-gray-500 focus:outline-none lg:hidden"
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

      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
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
          class="
            w-32
            pl-10
            pr-4
            py-2
            text-indigo-600
            border-gray-200
            rounded-md
            sm:w-64
            focus:border-indigo-600
            focus:ring
            focus:ring-opacity-40
            focus:ring-indigo-500
          "
          type="text"
          placeholder="Search blog"
        />
      </div>
    </div>
    </div>
      <div class="blog-item">
        <div class="max-w-sm mt-6 overflow-hidden bg-white rounded shadow-lg">
          <img
            class="w-full"
            src="https://static.vinwonders.com/2022/04/bai-bien-my-khe-da-nang-2.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold text-gray-900">
              Bien My Khe
            </div>
            <p class="text-base text-gray-700">
                Date post: 21-11-2022
            </p>
            <p class="text-base text-gray-700">
                User: Huy Le
            </p>
          </div>
          
        </div>
      </div>
      <div class="blog-item">
        <div class="max-w-sm mt-6 overflow-hidden bg-white rounded shadow-lg">
          <img
            class="w-full"
            src="https://static.vinwonders.com/2022/04/bai-bien-my-khe-da-nang-2.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold text-gray-900">
              Bien My Khe
            </div>
            <p class="text-base text-gray-700">
                Date post: 21-11-2022
            </p>
            <p class="text-base text-gray-700">
                User: Huy Le
            </p>
          </div>
          
        </div>
      </div>
      <div class="blog-item">
        <div class="max-w-sm mt-6 overflow-hidden bg-white rounded shadow-lg">
          <img
            class="w-full"
            src="https://static.vinwonders.com/2022/04/bai-bien-my-khe-da-nang-2.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold text-gray-900">
              Bien My Khe
            </div>
            <p class="text-base text-gray-700">
                Date post: 21-11-2022
            </p>
            <p class="text-base text-gray-700">
                User: Huy Le
            </p>
          </div>
          
        </div>
      </div>
      <!-- <div class="mt-5">
        <h4 class="text-gray-700">Horizontal</h4>
        <div class="w-full max-w-sm mt-6 lg:max-w-full lg:flex">
          <div
            class="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
            style="background-image: url('https://picsum.photos/id/0/192/213')"
            title="Woman holding a mug"
          ></div>
          <div
            class="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-200 rounded-b lg:border-l-0 lg:border-t lg:border-gray-200 lg:rounded-b-none lg:rounded-r"
          >
            <div class="mb-8">
              <p class="flex items-center text-sm text-gray-600">
                <svg
                  class="w-3 h-3 mr-2 text-gray-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  />
                </svg>
                Members only
              </p>
              <div class="mb-2 text-xl font-bold text-gray-900">
                Can coffee make you a better developer?
              </div>
              <p class="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="flex items-center">
              <img
                class="w-10 h-10 mr-4 rounded-full"
                src="https://via.placeholder.com/50"
                alt="Avatar of Jonathan Reinink"
              />
              <div class="text-sm">
                <p class="leading-none text-gray-900">Jonathan Reinink</p>
                <p class="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </template>
<style scoped>
.blog-item{
    display: inline-block;
    width: 320px;
    padding-left: 30px;
}
</style>