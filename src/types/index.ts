import { Request } from "express";

export interface MulterRequest extends Request {
  file: any;
}

export enum CATEGORY {
  HOTEL,
  RESTAURANT,
  OTHER,
}
export interface IUser {
  id: number;
  email: string;
  username: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  isAdmin: boolean;
  location: string;
  description: string;
}

export interface IPost {
  id: number;
  user: number;
  category: string;
  content: string;
  like: number;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}
