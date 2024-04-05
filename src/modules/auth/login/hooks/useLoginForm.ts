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
    authService.login(data).then((resp) => {
      const { username, accessToken }: LoginResp = resp.data;
      if (resp.statusText === "OK") {
        dispatch(setLogin(true));
        dispatch(setUsername(username));
        localStorage.setItem("accessToken", accessToken);
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
