import { POST } from "@app/services";

import SIGNUP_PATH from "./constants";
import { SignUpInputs } from "./types";

const signUpService = {
  postData: (data: SignUpInputs) => POST<SignUpInputs>(SIGNUP_PATH, data),
};

export default signUpService;
