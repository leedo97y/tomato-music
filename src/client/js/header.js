const link = document.querySelector("a");
const button = document.querySelector("#loginBtn");
const home = document.querySelector("#homeTitle");
const topTracks = document.querySelector("#topTracks");
const popstar = document.querySelector("#popstar");
const kPop = document.querySelector("#kPop");

// url의 pathname을 /으로 나눠서 현재 경로를 알게 해줌.
const location = window.location.pathname.split("/")[1];

// 버튼을 누를 때 이동할 링크과 버튼에 표시되는 이름을 정하기 위해 작성함.
if (location === "") {
  // 기본 경로 (메인 페이지) 일 경우,
  link.innerHTML = "register";
  link.href = "/register";
}

// 홈페이지 이름 클릭시 동작
const onClickHomeTitle = () => {
  window.location.href = "/";
};

// top tracks 클릭시 동작
const onClickChannelTopTracks = () => {
  window.location.href = "/toptracks";
};

// pop star 클릭시 동작
const onClickChannelPopstar = () => {
  window.location.href = "/popstar";
};

// k-pop 클릭시 동작
const onClickChannelKpop = () => {
  window.location.href = "/kpop";
};

home.addEventListener("click", onClickHomeTitle);
topTracks.addEventListener("click", onClickChannelTopTracks);
popstar.addEventListener("click", onClickChannelPopstar);
kPop.addEventListener("click", onClickChannelKpop);
