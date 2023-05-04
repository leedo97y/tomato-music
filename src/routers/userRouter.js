import express from "express";

import { logout } from "../controllers/userController";
import { privateMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", privateMiddleware, logout);

export default userRouter;
