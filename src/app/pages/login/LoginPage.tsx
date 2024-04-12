import { Link } from "react-router-dom";
import useLoginNavigate from "@app/hooks/useLoginNavigate";
import LoginContainer from "@modules/auth/login/components/LoginContainer";

function LoginPage() {
  const { visible } = useLoginNavigate();

  if (!visible) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Login</h3>
      <LoginContainer />
      <p>Don&apos;t have an account?</p>
      <Link to="/sign-up">Sign Up</Link>
    </div>
  );
}

export default LoginPage;
