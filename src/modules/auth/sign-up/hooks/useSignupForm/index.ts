import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import PAGES from "@app/routes/paths";
import { setLogin } from "@app/store/user/userSlice";
import { useAppDispatch } from "@app/store/redux";

import signUpService from "./requests";
import { SignUpInputs, SignUpResp } from "./types";

const useSignupForm = () => {
  const { register, handleSubmit } = useForm<SignUpInputs>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function onSubmit(data: SignUpInputs) {
    localStorage.setItem("accessToken", "");
    dispatch(setLogin(false));
    signUpService.postData(data).then((resp) => {
      const { refreshToken }: SignUpResp = resp.data;
      // if successful:
      // save refreshToken in localstorage
      // TODO: display a modal to go to login page
      if (resp.statusText === "Created") {
        localStorage.setItem("refreshToken", refreshToken);
        navigate(PAGES.LOGIN);
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
