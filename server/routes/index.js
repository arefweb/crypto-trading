import bodyParser from "body-parser";
import homeController from "../controllers/home.controller";
import cors from "cors";
import paths from "./paths";
import verifySignup from "../middlewares/verifySignup";
import signupController from "../controllers/auth/signup.controller";
import verifyLogin from "../middlewares/verifyLogin";
import loginController from "../controllers/auth/login.controller";
import verifyToken from "../middlewares/verifyToken";
import verifyRefresh from "../middlewares/verifyRefresh";
import refreshController from "../controllers/auth/refresh.controller";
import userInfoController from "../controllers/userInfo.controller";

function appRoutes(app) {

  app.use(cors({ origin: "*" }));

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());

  app.get(paths.home, homeController);

  app.post(paths.signup, verifySignup, signupController);

  app.post(paths.login, verifyLogin, loginController);

  app.post(paths.refresh, verifyRefresh, refreshController);

  app.get(paths.private, verifyToken, (req, res) => {
    const d = new Date().toISOString();
    return res.json({
      date: d,
    });
  });

  app.get(paths.userInfo, verifyToken, userInfoController);
}

export default appRoutes;