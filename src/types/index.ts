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
  description: string;
  email: string;
  id: number;
  isAdmin: boolean;
  location: string;
  updatedAt: string;
  username: string;
}
