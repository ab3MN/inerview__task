const getNum = (num, fn) => (!fn ? num : fn(num));

const zero = (fn) => getNum(0, fn);
const one = (fn) => getNum(1, fn);
const two = (fn) => getNum(2, fn);
const three = (fn) => getNum(3, fn);
const four = (fn) => getNum(4, fn);
const five = (fn) => getNum(5, fn);
const six = (fn) => getNum(6, fn);
const seven = (fn) => getNum(7, fn);
const eight = (fn) => getNum(8, fn);
const nine = (fn) => getNum(9, fn);

const plus = (next) => (prev) => prev + next;
const minus = (next) => (prev) => prev - next;
const times = (next) => (prev) => prev * next;
const dividedBy = (next) => (prev) => prev / next;

console.log(five(plus(seven(minus(three())))));
