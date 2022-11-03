<script setup lang="ts">
import { email, required,sameAs, } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
const formRegister = reactive({
  username:"",
	email:"",
	password:"",
  confirmPassword:"",
});

const rules = computed(()=>{
	return{
  username:{required},
	email: {required,email},
	password: {required},
  confirmPassword:{required, sameAs: sameAs(formRegister.password)}
	}
})


const v$ = useVuelidate(rules, formRegister);
const submitRegister = async () =>{
	const rs = await v$.value.$validate();
	if(rs){
		alert('register success!');
	}
	else {
		alert('error, register fail!');
	}
	
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
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Create an Account!</h1>

        <form
          class="mt-6"
          method="POST"
          @submit.prevent="submitRegister"
        >
          <div>
            <label class="block text-gray-700">Username</label>
            <input
              id=""
              
              type="text"
              name="username"
              placeholder="Enter Username"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              
              required
            >
          </div>
          <div>
            <label class="block text-gray-700">Email Address</label>
            <input
              id=""
              
              type="email"
              name=""
              placeholder="Enter Email Address"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
             
              required
            >
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input
              id=""
              type="password"
              name=""
              placeholder="Enter Password"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
              required
            >
          </div>
          <div class="mt-4">
            <label class="block text-gray-700">Confirm Password</label>
            <input
              id=""
              v-model="formRegister.confirmPassword"
              type="password"
              name=""
              placeholder="Enter Confirm Password"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
              required
            >
          </div>

          

          <button
            type="submit"
            class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
          >
            Register
          </button>
        </form>

        <hr class="my-6 border-gray-300 w-full">

        

        <p class="mt-8">
          Already have an account?  <RouterLink
            to="/login"
            class="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Login!
          </RouterLink>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>


 
 
</style>
