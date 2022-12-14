<script setup lang="ts">
import { notification } from 'ant-design-vue';
import { useMutation, useQuery } from 'vue-query';
import { useRoute, useRouter } from 'vue-router';
import { useAuth } from '~/pinia/auth';
import { addComment, delComment, getAllComment } from '~/services/comment';
import { getDetailPost } from '~/services/post';
import { CommentsResponse } from '~/types';

const route = useRoute();
const auth = useAuth();
const router = useRouter();

const { data } = useQuery({ queryKey: 'posts', queryFn: () => getDetailPost(route.params.id as string) });
const res = useMutation(() => getAllComment(route.params.id as string), { mutationKey: 'comment' });

onMounted(() => {
  res.mutate();
});

const comments = ref<CommentsResponse[]>([]);
const submitting = ref<boolean>(false);
const value = ref<string>('');

watchEffect(() => {
  // console.log(res.data);
  comments.value = res.data.value || [];
});

const handleSubmit = async () => {
  try {
    if (!value.value) {
      return;
    }
    submitting.value = true;
    if (value.value) await addComment(route.params.id as string, { content: value.value });
  } catch (err) {
    console.log(err);
  } finally {
    submitting.value = false;
    res.mutate();
  }
};

const deleteComment = async (commentId: string | number) => {
  try {
    await delComment(route.params.id as string, commentId);
    notification.open({
      type: 'success',
      duration: 2,
      message: 'Delete comment successfully',
    });
  } catch (error) {
    notification.open({
      type: 'error',
      duration: 2,
      message: 'Delete comment failed ! Try again',
    });
  } finally {
    res.mutate();
  }
};
</script>

<template>
  <Navbar />
  <div class="s-content content container px-8 py-5 mx-auto max-w-screen-lg">
    <div class="row content__page">
      <div class="bg-content">
        <img
          class="w-full aspect-[16/9]"
          :src="data?.thumbnail || 'https://cdn.sanity.io/images/cijrdavx/production/05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png?rect=0,0,800,468&w=1920&q=75&fit=clip&auto=format'"
          alt=""
        />
      </div>
      <div class="flex justify-between mt-5">
        <div><CategoryLabel :labels="data?.tags || []" /></div>
      </div>
      <div class="text-center">
        <span class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">{{ data?.title }}</span>
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div
        v-html="data?.content"
        class="mt-10"
      ></div>
    </div>
    <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
        <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
          <img
            :src="data?.user.avatar || 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'"
            placeholder="blur"
            class="rounded-full w-full h-full object-cover"
          />
        </div>
        <div>
          <div class="flex justify-between w-full">
            <div>
              <div className="mb-3">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">About {{ data?.user.username }}</h4>
              </div>
              <div>{{ data?.user.description || 'No description' }}</div>
            </div>
          </div>
        </div>
        <div
          v-if="data?.user.id === auth.user?.id"
          class="flex-1"
        >
          <button class="btn btn-circle bg-cyan-400 float-right">
            <i
              class="ri-pencil-line text-white"
              @click.prevent="
                () => {
                  router.push(`/update-post/${data?.id}`);
                }
              "
            ></i>
          </button>
        </div>
      </div>
    </div>

    <a-comment>
      <template #avatar>
        <a-avatar
          :src="auth.user?.avatar"
          alt="Han Solo"
        />
      </template>
      <template #content>
        <a-form-item>
          <a-textarea
            v-model:value="value"
            :rows="4"
          />
        </a-form-item>
        <a-form-item>
          <a-button
            html-type="submit"
            :loading="submitting"
            type="primary"
            @click="handleSubmit"
          >
            Add Comment
          </a-button>
        </a-form-item>
      </template>
    </a-comment>
    <a-list
      v-if="comments.length"
      :data-source="comments"
      item-layout="horizontal"
    >
      <a-list-item
        v-for="(comment, id) in comments"
        :key="id"
      >
        <a-comment
          :author="comment.user.email"
          :avatar="comment.user.avatar || 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'"
        >
          <template #content>
            <input
              type="text"
              disbaled
              :value="comment.content"
            />
          </template>
          <template
            v-if="auth.user?.id === comment.user.id"
            #actions
          >
            <div class="flex gap-3">
              <i
                class="ri-delete-bin-line cursor-pointer hover:text-red-400"
                @click.prevent="deleteComment(comment.id)"
              ></i>
            </div>
          </template>
        </a-comment>
      </a-list-item>
    </a-list>
  </div>

  <Footer />
</template>

<style scoped>
.bg-content {
  text-align: center;
}

.content__page {
  padding-bottom: 12px;
  padding-top: 20px;
  background: white;
}
h1 {
  font-size: 6em;
  color: black;
}
h2,
h3 {
  font-size: 2em;
  color: black;
}
p {
  font-size: 1.3em;
}
.entry__header {
  text-align: center;
}
.entry__content {
  padding-left: 100px;
  padding-right: 100px;
  text-align: justify;
}
.drop-cap:first-letter {
  float: left;
  margin: 0;
  padding: 1.6rem 0.8rem 0 0;
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 8.8rem;
  line-height: 6rem;
  text-indent: 0;
  background: transparent;
  color: #000000;
}
</style>
