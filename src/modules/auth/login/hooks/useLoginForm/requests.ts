import { POST } from "@app/services";

import { LoginInputs, LoginParams } from "./types";
import LOGIN_PATH from "./constants";

const loginService = {
  postData: (data: LoginInputs, params: LoginParams) => {
    return POST<LoginInputs>(LOGIN_PATH, data, {}, { params });
  },
};

export default loginService;
