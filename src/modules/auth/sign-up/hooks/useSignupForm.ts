import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import PAGES from "@app/routes/paths";
import { setLogin } from "@app/store/user/userSlice";
import { useAppDispatch } from "@app/hooks/redux";
import { SignUpInputs, SignUpResp } from "@modules/auth/types/signup.model";
import authService from "@modules/auth/services/auth.service";

const useSignupForm = () => {
  const { register, handleSubmit } = useForm<SignUpInputs>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function onSubmit(data: SignUpInputs) {
    localStorage.setItem("accessToken", "");
    dispatch(setLogin(false));
    authService.signUp(data).then((resp) => {
      const { refreshToken }: SignUpResp = resp.data;
      // if successful:
      // save refreshToken in localstorage
      // TODO: display a modal to go to login page
      if (resp.statusText === "Created") {
        localStorage.setItem("refreshToken", refreshToken);
        navigate(PAGES.login);
      }
    });
  }

  return {
    handleSubmit,
    onSubmit,
    register,
  };
};

export default useSignupForm;
