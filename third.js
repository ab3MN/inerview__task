const myPromise = (result) =>
  new Promise((resolve, reject) =>
    result > 17 ? reject("Something wrong") : resolve(result)
  );

const createMyNumberPromise = (arr) => arr.map((el) => myPromise(el));

const race = (arr) => {
  const _arr = createMyNumberPromise(arr);

  return Promise.any(_arr)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

console.log(race([34, 18, 14, 61, 2, 24, 151, 1, 5, 125, 123]));
