<template>
  <span
    v-for="(label, id) in props.labels"
    :key="id"
    class="inline-block mt-5 text-xs font-medium tracking-wider uppercase pr-2"
    :class="color[Math.floor(Math.random() * color.length)]"
  >
    {{ label }}
  </span>
</template>
<script lang="ts" setup>
const color = ['text-green-500', 'text-blue-500', 'text-orange-400', 'text-purple-500', 'text-pink-500'];
const props = defineProps<{ labels: string[] }>();
</script>
<style scoped></style>
