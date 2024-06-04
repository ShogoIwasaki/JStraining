let x = 0;

for (let i = 1; i <= 5; i++) {
  x = i;
  try {
    throw Error();
  } catch {
    break;
  } finally {
    continue;
  }
}

console.log(x);
// catchにbreak;の記述があるが、
// finallyはcatchに進んだとしても最後に必ず実行される。
// そのfinallyの中にcontinueがあることで、現在のループの反復処理中の文の実行を終了し、次の反復処理としてループの実行を続けるため。