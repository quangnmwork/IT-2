import { AllPostResponse, Post } from '~/types';

export const createPost = async (data: FormData) => {
  return (await axiosClient.post('/post ', data)).data as Post;
};

export const getAllPost = async () => {
  return (await axiosClient.get('/post')).data as AllPostResponse[];
};

export const updatePost = async (id: string | number, data: FormData) => {
  return (await axiosClient.patch(`/post/${id}`, data)).data;
};
export const getDetailPost = async (id: string | number) => {
  return (await (await axiosClient.get(`/post/${id}`)).data)[0] as AllPostResponse;
};
