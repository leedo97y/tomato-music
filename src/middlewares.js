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
    return res.redirect("/");
  }
};

export const privateMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/login");
  }
};

// 여기서 express session을 사용해서 로그인도 가능할 것 같다는 생각을 했음.
// 사이트 name 부분을 여기서 정해줌.
