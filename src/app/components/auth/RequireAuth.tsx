import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "@app/hooks/redux";

function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const isLoading = useAppSelector((state) => state.user.isLoading);

  if (!isLoggedIn && !isLoading) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
