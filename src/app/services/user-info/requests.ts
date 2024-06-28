import { GET } from "@app/services";
import USER_INFO_PATH from "./constants";

const userInfo = {
  getData: () => GET(USER_INFO_PATH),
};

export default userInfo;
