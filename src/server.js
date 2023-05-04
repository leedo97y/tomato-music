import express from "express";
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";

import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";

const app = express();

// view engine을 퍼그로 세팅해준다.
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

const logger = morgan("dev");
app.use(logger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express session 사용하는 부분
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(flash());

app.use(localsMiddleware);

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));

app.use("/", rootRouter);
app.use("/user", userRouter);

/*
Add more routers here!
*/

export default app;
