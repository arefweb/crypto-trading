import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "@app/components/auth/RequireAuth";
import HomePage from "@app/pages/home/HomePage";
import LoginPage from "@app/pages/login/LoginPage";
import SignUpPage from "@app/pages/sign-up/SignUpPage";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route
          index
          element={(
            <RequireAuth>
              <HomePage />
            </RequireAuth>
              )}
        />
        <Route
          path="about"
          element={(
            <RequireAuth>
              <div><h3>About us</h3></div>
            </RequireAuth>
              )}
        />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
