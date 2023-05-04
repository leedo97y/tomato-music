import User from "../db/models/userModel";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  return res.render("user/register", { pageTitle: "register" });
};

export const postRegister = async (req, res) => {
  const pageTitle = "register";

  const { email, password, nickname } = req.body;

  // 이메일 중복 확인
  const emailExists = await User.exists({ email });
  if (emailExists) {
    req.flash("error", "이미 가입된 메일입니다.");
    return res.status(409).render("user/register", {
      pageTitle,
      errorMsg: "이미 가입된 이메일입니다.",
      email,
    });
  }

  // 유저 생성
  const user = await User.create({
    email,
    password,
    nickname: nickname === "" ? undefined : nickname,
  });

  // 기본 플레이리스트 생성
  // const defaultPlaylist = await Playlist.create({
  //   name: "기본 플레이리스트",
  //   user,
  //   coverUrl: undefined,
  //   isDefault: true,
  // });
  // await user.playlists.push(defaultPlaylist);
  await user.save();

  // 로그인 페이지로 이동
  req.flash("ok", "회원가입이 완료되었습니다.\n로그인 화면으로 이동합니다.");
  return res.redirect("/login");
};

export const login = async (req, res) => {
  return res.render("user/login", { pageTitle: "login" });
};

export const postLogin = async (req, res) => {
  const pageTitle = "login";

  const { email, password } = req.body;

  // 유저 확인
  const user = await User.findOne({ email });
  if (!user) {
    req.flash("error", "존재하지 않는 이메일입니다.");
    return res.status(401).render("user/login", {
      pageTitle,
      errorMsg: "존재하지 않는 이메일입니다.",
      email,
    });
  }

  // 비밀번호 확인
  const pwMatch = await bcrypt.compare(password, user.password);
  if (!pwMatch) {
    req.flash("error", "비밀번호가 일치하지 않습니다.");
    return res.status(401).render("user/login", {
      pageTitle,
      errorMsg: "비밀번호가 일치하지 않습니다.",
      email,
    });
  }

  // 세션 저장 후 메인 페이지로 이동
  req.session.loggedIn = true;
  req.session.user = user;

  req.flash("ok", "로그인에 성공하였습니다.");
  return res.redirect("/");
};

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
