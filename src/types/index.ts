import { Request } from "express";

export interface MulterRequest extends Request {
  file: any;
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
