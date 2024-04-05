export interface LoginInputs {
  email: string;
  password: string;
}

export interface LoginResp {
  accessToken: string;
  username: string;
}
