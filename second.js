const getLasTime = (ms) => {
  const now = Date.now();
  let time = ms;

  return (() => {
    setInterval(() => {
      time += ms;
      console.log(new Date(now - time));
    }, ms);
  })();
};

console.log(getLasTime(1000));
