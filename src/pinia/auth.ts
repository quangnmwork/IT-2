import { defineStore } from 'pinia';
import { UserProfile } from '~/types';

export const useAuth = defineStore('auth', () => {
  const user = ref<UserProfile>();

  return { user };
});
