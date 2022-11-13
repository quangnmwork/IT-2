<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Form, useForm } from 'vee-validate';
import * as yup from 'yup';
import { useMutation } from '@tanstack/vue-query';
import { login } from '~/services/auth';
import { useRouter } from 'vue-router';
import { UserLoginResponse } from '~/types';

const router = useRouter();
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
const isFormChange = ref(false);

const { handleSubmit, errors, values } = useForm({ validationSchema: schema });

const { mutate, isLoading, isError } = useMutation({
  mutationFn: login,
  onSuccess: async (data: UserLoginResponse) => {
    localStorage.setItem('auth', data.token);
    router.push('/');
  },
  onError: async (error) => {
    // An error happened!
    isFormChange.value = false;
    console.log(error);
  },
});
watch(values, () => {
  isFormChange.value = true;
});
const onSubmit = handleSubmit((values: any) => {
  mutate(values);
});
</script>

<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img
        src="https://images.unsplash.com/photo-1445272885371-027f17af0130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>

    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

        <form
          method="post"
          @submit="onSubmit"
        >
          <TextInput
            name="email"
            type="email"
            label="E-mail"
            placeholder="Your email address"
          />
          <TextInput
            name="password"
            type="password"
            label="Password"
            placeholder="Your password"
          />
          <span
            v-if="isError && !isFormChange"
            class="text-red-600 font-semibold"
          >
            E-mail or password is invalid
          </span>

          <button
            type="submit"
            class="w-full bg btn btn-square bg-cyan-500 border-cyan-400 hover:bg-cyan-500 hover:border-cyan-400 mt-3"
            :class="[Object.keys(errors).length > 0 ? 'cursor-not-allowed ' : '', isLoading ? 'loading' : '']"
            :disabled="Object.keys(errors).length > 0"
          >
            {{ isLoading ? '' : 'Login' }}
          </button>
        </form>
        <hr class="my-6 border-gray-300 w-full" />
        <p class="mt-8">
          Need an account?
          <RouterLink
            to="/register"
            class="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Create an account
          </RouterLink>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
