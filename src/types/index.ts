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
