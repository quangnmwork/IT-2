<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Form, } from 'vee-validate';
import * as yup from 'yup';
import { useMutation } from '@tanstack/vue-query';
import { login } from '~/services/auth';



const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),

});

const { mutate } = useMutation({
  mutationFn: login, 
  onSuccess: async () => {
    console.log("I'm first!")
  },
  onError: (error, variables, context) => {
    // An error happened!
    console.log(`rolling back optimistic update with id`);
  },
});

const onSubmit = (values : any) => {
  mutate(values)
}



</script>

<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img
        src="https://images.unsplash.com/photo-1445272885371-027f17af0130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        alt=""
        class="w-full h-full object-cover"
      >
    </div>

    <div
      class="bg-white w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

        <Form
          v-slot="{ errors }"
          :validation-schema="schema"
          class="mt-6"
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


          <button
            type="submit"
            class="w-full block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
            :class="Object.keys(errors).length>0 ? 'cursor-not-allowed ' : ''"
            :disabled="Object.keys(errors).length > 0"
          >
            Log In
          </button>
        </Form>
        <hr class="my-6 border-gray-300 w-full">
        <p class="mt-8">
          Need an account? <RouterLink
            to="/register"
            class="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Create an
            account
          </RouterLink>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
