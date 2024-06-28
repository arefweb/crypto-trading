import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/store/redux";
import { setLogin, setUsername } from "@app/store/user/userSlice";

import { LoginInputs, LoginResp } from "./types";
import loginService from "./requests";

const useLoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
  } = useForm<LoginInputs>();

  function onSubmit(data: LoginInputs) {
    const hasRefresh = localStorage.getItem("refreshToken");
    loginService.postData(
      data,
      { ...(!hasRefresh && { issue_refresh: true }) },
    ).then((resp) => {
      const { username, accessToken, refreshToken }: LoginResp = resp.data;
      if (resp.statusText === "OK") {
        localStorage.setItem("accessToken", accessToken);
        if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
        dispatch(setLogin(true));
        dispatch(setUsername(username));
        navigate(from, { replace: true });
      }
    });
  }

  return {
    handleSubmit,
    register,
    onSubmit,
  };
};

export default useLoginForm;
