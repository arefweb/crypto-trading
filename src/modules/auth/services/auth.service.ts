import { POST } from "@app/services";

import PATHS from "./paths";
import { LoginInputs, LoginParams } from "../types/login.model";
import { SignUpInputs } from "../types/signup.model";

const authService = {
  login: (data: LoginInputs, params: LoginParams) => {
    return POST<LoginInputs>(PATHS.login, data, {}, { params });
  },
  signUp: (data: SignUpInputs) => POST<SignUpInputs>(PATHS.signup, data),
};

export default authService;
