import { POST } from "@app/services";

import PATHS from "./paths";
import { LoginInputs } from "../types/login.model";
import { SignUpInputs } from "../types/signup.model";

const authService = {
  login: (data: LoginInputs) => POST<LoginInputs>(PATHS.login, data),
  signUp: (data: SignUpInputs) => POST<SignUpInputs>(PATHS.signup, data),
};

export default authService;
