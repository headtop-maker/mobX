export function map<T>(arr: T[], cb: (item: T, index: number, arr: T[]) => T) {
  return arr.reduce((acc: T[], current, index) => {
    const res = cb(current, index, arr);
    acc.push(res);
    return acc;
  }, []);
}
[1, 2, 3].map(item => item > 1);

export function filter<T>(
  arr: T[],
  cb: (item: T, index: number, arr: T[]) => T,
) {
  return arr.reduce((acc: T[], current, index) => {
    if (cb(current, index, arr)) {
      acc.push(current);
    }
    return acc;
  }, []);
}

[1, 2, 3].filter(item => item > 1);

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res('done');
  }, 1000);
  setTimeout(() => {
    rej('done');
  }, 1000);
});

promise.then(res => console.log(res)).catch(err => console.log(err));

// function promiseAll<T>(promises: Promise<T>[]) {
//   const result: T[] = [];
//   let count = 0;
//   return new Promise((res, rej) => {
//     for (let i = 0; i < promises.length; i++) {
//       promises[i]
//         .then(currentRes => {
//           count++;
//           result[i] = currentRes;

//           if (promises.length === count) {
//             res(result);
//           }
//         })
//         .catch(err => {
//           rej(err);
//         });
//     }
//   });
// }
