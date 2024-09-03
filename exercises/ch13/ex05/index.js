/**
 * 指定された時間後に解決される Promise を返す
 * @param  {number}   msec    - 返り値の Promise を解決するまで待つ時間 (ミリ秒)
 * @return {Promise}  Promise - 指定時間後に解決される Promise
 */
function wait(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

// 0, 1, 2, 3 秒待つ
const wait0 = () => wait(0);
const wait1 = () => wait(1000);
const wait2 = () => wait(2000);
const wait3 = () => wait(3000);

// ログ出力
const log = (v) => console.log(v);
const logA = (v) => console.log("A");
const logB = (v) => console.log("B");
const logC = (v) => console.log("C");

// 例外
const errX = () => {
  throw new Error("X");
};
const errY = () => {
  throw new Error("Y");
};

// TODO: then のネストを無くしなさい
function g1() {
  return wait(1000)
    .then(() => {
      console.log("A");
      return wait(2000);
    })
    .then(() => {
      console.log("B");
      return wait(3000);
    })
    .then(() => {
      console.log("C");
    });
}

// TODO: new Promise を使わないように書き換えなさい
function g2() {
  return wait(1000)
    .then(() => console.log("A"))
    .then(() => wait(2000))
    .then(() => console.log("B"))
    .then(() => wait(3000))
    .then(() => console.log("C"));
}

// TODO: var, let, const による変数宣言を無くしなさい。async/awaitは使用しないこと。
function g3() {
  // 以下2つの関数が存在するとします (中身は適当)
  return fetchUser()
    .then((user) =>
      fetchUserFriends(user).then((friends) => ({ user, friends }))
    )
    .then(({ user, friends }) => {
      console.log(`${user.name} has ${friends.length} friends!`);
    });
}

// TODO: new Promise を使わないように書き換えなさい。async/awaitは使用しないこと。
function g4() {
  return Promise.resolve(someFunction());
}
