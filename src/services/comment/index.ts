import { CommentsResponse } from '~/types';
interface CommentAdd {
  content: string;
}
export const getAllComment = async (id: string | number) => {
  return (await axiosClient.get(`/post/${id}/comments`)).data as CommentsResponse[];
};
export const addComment = async (id: string | number, data: CommentAdd) => {
  return await axiosClient.post(`/post/${id}/comments`, data);
};

export const editComment = async (id: string | number, idComment: string | number, data: CommentAdd) => {
  return await axiosClient.patch(`/post/${id}/comments/${idComment}`, data);
};

export const delComment = async (id: string | number, idComment: string | number) => {
  return await axiosClient.delete(`/post/${id}/comments/${idComment}`);
};
