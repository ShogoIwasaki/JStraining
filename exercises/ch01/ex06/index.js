// 1/√5[{(1+√5)/2}^n-{(1-√5)/2^n}]
// 1,1,2,3,5,8,13,21,34,55,89...
// a,b,c,d,e,
// a,b,a+b,a+b + b, 
//    , c , 

function fibonacci(n){
    let a = 1;
    let b = 1;
    for (let i = 2; i < n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}

//function fibonacci(n){
//     let root5 = Math.sqrt(5);
//     let x = 1 / root5;
//     let y = (1 + root5)/2;
//     let z = (1 - root5)/2;
//     while (n > 1) {
//         y *= n;
//         z *= n;
//         n--;
//     }
//     let formula = y - z;
//     let ans = x * formula;
//     console.log(ans);
// }