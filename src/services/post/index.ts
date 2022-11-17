import { Post } from '~/types';

export const createPost = async (data: FormData) => {
  return (await axiosClient.post('/post ', data)).data as Post;
};
