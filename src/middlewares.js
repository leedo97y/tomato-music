export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Tomuto";
  res.locals.loggedInUser = req.session.user || {};
  res.locals.pathName = req.path;
  next();
};

export const publicMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    // 로그인 된 상태라면 redirect를 메인 페이지로 해주기
    return res.redirect("/");
  }
};

export const privateMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    // 로그인 된 상태라면 redirect를 login 페이지로 해주기
    return res.redirect("/login");
  }
};
