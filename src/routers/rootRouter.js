import express from "express";

import {
  home,
  myplaylist,
  toptracks,
  popstar,
  kpop,
} from "../controllers/songController";

import {
  register,
  login,
  postRegister,
  postLogin,
} from "../controllers/userController";

import { publicMiddleware } from "../middlewares";

const rootRouter = express.Router();

// 경로 뒤에는 songController를 통해서 나온다.

rootRouter.route("/").get(home);
rootRouter
  .route("/register")
  .all(publicMiddleware)
  .get(register)
  .post(postRegister);

rootRouter.route("/login").all(publicMiddleware).get(login).post(postLogin);

rootRouter.route("/toptracks").get(toptracks);
rootRouter.route("/popstar").get(popstar);
rootRouter.route("/kpop").get(kpop);
rootRouter.route("/myplaylist").get(myplaylist);

export default rootRouter;
