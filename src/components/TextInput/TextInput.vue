<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
});

const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,

} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <div
    class="my-3"
    :class="{ 'has-error': !!errorMessage }"
  >
    <label
      :for="name"
      class="block text-gray-700"
    >{{ label }}</label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
      @input="handleChange"
      @blur="handleBlur"
    />

    <p
      v-show="errorMessage "
      class="text-red-600 font-semibold my-1"
    >
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>