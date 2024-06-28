export interface SignUpInputs {
  username: string;
  email: string;
  password: string;
}

export interface SignUpResp {
  user: {
    username: string;
    email: string;
  }
  refreshToken: string;
}
