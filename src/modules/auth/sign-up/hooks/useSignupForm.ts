import { useForm } from "react-hook-form";
import { SignUpInputs, SignUpResp } from "@modules/auth/types/signup.model";
import authService from "@modules/auth/services/auth.service";
import { useNavigate } from "react-router-dom";
import { setLogin } from "@app/store/user/userSlice";
import { useAppDispatch } from "@app/hooks/redux";

const useSignupForm = () => {
  const { register, handleSubmit } = useForm<SignUpInputs>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function onSubmit(data: SignUpInputs) {
    localStorage.setItem("accessToken", "");
    dispatch(setLogin(false));
    authService.signUp(data).then((resp) => {
      const { refreshToken, user }: SignUpResp = resp.data;
      console.log("sign up response: ", user);
      // if successful:
      // save refreshToken in localstorage
      // display a modal to go to login page
      if (resp.statusText === "Created") {
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/login");
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
