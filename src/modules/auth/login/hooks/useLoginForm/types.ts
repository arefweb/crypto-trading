export interface LoginInputs {
  email: string;
  password: string;
}

export interface LoginResp {
  accessToken: string;
  username: string;
  refreshToken?: string | undefined;
}

export interface LoginParams {
  issue_refresh?: boolean;
}
