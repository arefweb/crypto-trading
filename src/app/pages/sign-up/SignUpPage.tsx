import { Link } from "react-router-dom";
import SignUpContainer from "@modules/auth/sign-up/components/SignUpContainer";

function SignUpPage() {
  return (
    <div>
      <h3>Sign Up</h3>
      <SignUpContainer />
      <p>Have an account?</p>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default SignUpPage;
