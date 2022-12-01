import { UserProfile } from '~/types';
import { axiosClient } from '../axiosClient';

export const updateProfile = async (data: FormData) => {
  return (await axiosClient.patch('/user/editMe', data)).data;
};
export const getProfile = async () => {
  return (await axiosClient.get('/user/me')).data as UserProfile;
};
export const getAllUser = async () => {
  return (await axiosClient.get('/user')).data as UserProfile[];
};
