import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/hooks/redux";
import { useForm } from "react-hook-form";
import { LoginInputs, LoginResp } from "@modules/auth/types/login.model";
import authService from "@modules/auth/services/auth.service";
import { setLogin, setUsername } from "@app/store/user/userSlice";

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
    authService.login(
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
