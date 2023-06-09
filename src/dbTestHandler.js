import User from "./db/models/userModel";

// 데이터 베이스에 기본 정보를 넣어서 테스팅 할 수 있다.
// 이 정보로 로그인이 가능함.
// 주석처리한 부분은 DB Clear 해주는 부분.

export const dbTestHandler = async (db) => {
  User.create({
    _id: "643548c6d7e3118c7f9695c4",
    email: "leedoy11@gmail.com",
    password: "12345",
    nickname: "Doy",
  });
  User.create({
    _id: "6437c197d7e3118c7f9695d0",
    email: "doy@gmail.com",
    password: "12341234",
    nickname: "doyyyy",
  });
  User.create({
    _id: "6437c1c9d7e3118c7f9695d1",
    email: "camel@gmail.com",
    password: "121212",
    nickname: "camelCase",
  });
  // process.on("SIGINT", async () => {
  //   await db.dropDatabase();
  //   console.log("DB clear!");
  //   process.exit();
  // });
};
