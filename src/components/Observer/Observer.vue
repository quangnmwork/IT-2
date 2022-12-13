<template>
  <div
    id="observer"
    ref="target"
  />
</template>

<script setup lang="ts">
const emits = defineEmits(['intersecting']);
const target = ref<any>(null);
// defineExpose({
//   target,
// });

watchEffect(() => {
  const options: IntersectionObserverInit = {
    root: target.value as Element,
    rootMargin: '0px',
    threshold: 1,
  };
  const observer = new IntersectionObserver((entries, _observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        emits('intersecting');
      }
    });
  }, options);
  //   console.log(typeof target.value);
  observer.observe(target.value as Element);
});
</script>
