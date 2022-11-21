<script setup lang="ts">
import Sidebar from './SideBar/Sidebar.vue'
import Header from './Header/Header.vue'
import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  
  const defaultLayout = 'default'
  
  const { currentRoute } = useRouter()
  
  const layout = computed(
    () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
  )
</script>

<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <component :is="layout">
            <router-view />
          </component>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
