import { AllPostResponse, Post } from '~/types';

export const createPost = async (data: FormData) => {
  return (await axiosClient.post('/post ', data)).data as Post;
};

export const getAllPost = async () => {
  return (await axiosClient.get('/post')).data as AllPostResponse[];
};
