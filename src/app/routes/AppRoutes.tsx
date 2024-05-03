import { BrowserRouter, Route, Routes } from "react-router-dom";

import RequireAuth from "@app/components/auth/RequireAuth";
import HomePage from "@app/pages/home/HomePage";
import LoginPage from "@app/pages/login/LoginPage";
import SignUpPage from "@app/pages/sign-up/SignUpPage";
import PagesLayout from "@app/layouts/pages-layout/PagesLayout";

import AuthLayout from "@app/layouts/auth-layout/AuthLayout";
import PAGES from "./paths";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PagesLayout />}>
          <Route
            path={PAGES.HOME}
            element={(
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            )}
          />
          <Route
            path={PAGES.ABOUT}
            element={(
              <RequireAuth>
                <div><h3>About us</h3></div>
              </RequireAuth>
            )}
          />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={PAGES.LOGIN} element={<LoginPage />} />
          <Route path={PAGES.SIGNUP} element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
