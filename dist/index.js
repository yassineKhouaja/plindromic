"use strict";
console.clear();
const firstDigit = (n, counter = 0) => n >= 10
    ? firstDigit(Math.floor(n / 10), counter + 1)
    : { num: Math.floor(n), counter: counter + 1 };
const lastDigit = (n) => Math.floor(n % 10);
const checkLastAndFirst = (num) => lastDigit(num) === firstDigit(num).num;
const revertNumber = (n, res = 0) => n >= 10
    ? revertNumber((n - lastDigit(n)) / 10, res * 10 + lastDigit(n))
    : res * 10 + lastDigit(n);
const palindromic = (num) => {
    return checkLastAndFirst(num)
        ? num < 100
            ? true
            : palindromic((num - Math.pow(10, firstDigit(num).counter - 1) - lastDigit(num)) /
                10)
        : false;
};
const palindromic2 = (n) => n < 0 ? false : n === revertNumber(n);
console.log(palindromic2(-50));
console.log(palindromic2(1221));
console.log(palindromic2(10101));
console.log(palindromic2(5897));
console.log(palindromic2(15315));
