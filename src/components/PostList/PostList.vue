<template>
  <div
    class="link-effect cursor-pointer"
    @click="
      () => {
        router.push(`/detail/${props.post.id}`);
      }
    "
  >
    <div
      class="relative overflow-hidden transition-all bg-gray-100 rounded-md hover:scale-105"
      :class="props.aspect == 'landscape' ? 'aspect-[16/9]' : 'aspect-[1.2]'"
    >
      <img
        :src="props.post?.thumbnail || 'https://cdn.sanity.io/images/cijrdavx/production/05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png?rect=0,0,800,468&w=1920&q=75&fit=clip&auto=format'"
        alt=""
        srcset=""
        class="object-cover h-full w-full"
      />
    </div>
    <CategoryLabel :labels="props.post?.tags || []" />
    <h2 class="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
      <span
        class="link-underline"
        :style="styleObj"
      >
        {{ props.post?.title }}
      </span>
    </h2>
    <div class="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
      <div class="flex items-center gap-3">
        <div class="relative flex-shrink-0 w-5 h-5">
          <img
            :src="props.post?.user?.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwIZm5n7RCFjN-llD00iYQyqCkLL4Pi1a-g&usqp=CAU'"
            alt=""
            class="object-cover w-full h-full rounded-full"
          />
        </div>
        <span class="text-sm">{{ props.post?.user?.username }}</span>
      </div>
      <span class="text-xs text-gray-300 dark:text-gray-600">&bull;</span>
      <time class="text-sm">{{ props.post?.createdAt.substring(0, 10) }}</time>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { AllPostResponse } from '~/types';

const router = useRouter();
const color = ['#fed7aa', '#fde68a', '#d9f99d', '#cffafe', '#fbcfe8'];
const randomColor = color[Math.floor(Math.random() * color.length)];
const styleObj = reactive({
  backgroundImage: `linear-gradient(transparent, transparent), linear-gradient(${randomColor}, ${randomColor})`,
});

interface PostProps {
  post: AllPostResponse;
  aspect?: string;
}

const props = defineProps<PostProps>();
</script>

<style scoped>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
  background-size: 0 10px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;
}

.link-underline-blue {
  background-image: linear-gradient(transparent, transparent), linear-gradient(#dcfce7, #dcfce7);
}

.link-effect:hover .link-underline,
.link-underline:hover {
  background-size: 100% 10px;
  background-position: 0 100%;
}
</style>
