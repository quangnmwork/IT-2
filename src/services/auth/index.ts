import { UserLogin, UserLoginResponse, UserSignup } from '~/types';
import { axiosClient } from '../axiosClient';

export const login = async (data: UserLogin) => {
  return (await axiosClient.post('/auth/login', data)).data as UserLoginResponse;
};

export const signup = async (data: UserSignup) => {
  return (await axiosClient.post('/auth/signup', data)).data as string;
};
