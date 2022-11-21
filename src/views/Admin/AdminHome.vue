<script setup lang="ts">
// Day la layout cua trang admin nhan component lam content
import Sidebar from './SideBar/Sidebar.vue';
import Header from './Header/Header.vue';
</script>

<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <slot name="content" />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
