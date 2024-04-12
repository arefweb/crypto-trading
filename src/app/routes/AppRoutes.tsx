import { BrowserRouter, Route, Routes } from "react-router-dom";

import RequireAuth from "@app/components/auth/RequireAuth";
import HomePage from "@app/pages/home/HomePage";
import LoginPage from "@app/pages/login/LoginPage";
import SignUpPage from "@app/pages/sign-up/SignUpPage";
import PagesLayout from "@app/layouts/pages-layout/PagesLayout";

import PAGES from "./paths";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PagesLayout />}>
          <Route
            path={PAGES.home}
            element={(
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            )}
          />
          <Route
            path={PAGES.about}
            element={(
              <RequireAuth>
                <div><h3>About us</h3></div>
              </RequireAuth>
            )}
          />
        </Route>
        <Route path={PAGES.login} element={<LoginPage />} />
        <Route path={PAGES.signUp} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
