export interface UserLogin {
  email: string;
  password: string;
}

export interface UserSignup {
  username: string;
  email: string;
  password: string;
}
export interface UserLoginResponse {
  token: string;
}
export interface UserProfile {
  avatar: string;
  createdAt: string;
  description?: string;
  email: string;
  id: number;
  isAdmin: boolean;
  location: string;
  updatedAt: string;
  username: string;
}

export interface Post {
  thumbnail?: string;
  title?: string;
  content?: string;
  id: string | number;
  tags?: string[];
  category: 'hotel' | 'restaurant';
  updatedAt: string;
  createdAt: string;
}

export interface AllPostResponse extends Post {
  user: UserProfile;
}
export interface CommentsResponse {
  id: string | number;
  content?: string;
  createdAt: string;
  updatedAt: string;
  user: UserProfile;
}
