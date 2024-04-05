import { GET } from "@app/services";
import PATHS from "./paths";

const userInfoService = {
  getUser: () => GET(PATHS.userInfo),
};

export default userInfoService;
