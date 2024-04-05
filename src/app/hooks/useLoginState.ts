import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks/redux";
import { setLoading, setLogin, setUsername } from "@app/store/user/userSlice";
import userInfoService from "@app/services/user-info/userInfo.service";
import { UserInfoModel } from "@app/services/user-info/types/userInfo.model";

const useLoginState = () => {
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    userInfoService.getUser().then((resp) => {
      const { username }: UserInfoModel = resp.data;
      if (resp.statusText === "OK") {
        dispatch(setLogin(true));
        dispatch(setUsername(username));
        dispatch(setLoading(false));
      }
    }).catch((error) => {
      if (error.response.status === 401) {
        dispatch(setLogin(false));
        dispatch(setUsername(""));
        dispatch(setLoading(false));
        localStorage.setItem("accessToken", "");
      }
    });
  }, []);

  return { isLoading };
};

export default useLoginState;
