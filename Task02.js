'use strict';
console.log('Задание 2:');


const isPrime = (x) => {
console.log(`${x} - это простое число?`)
    for (let y = 2; y<x; y++) {
        let calc = x % y;
        // console.log('', calc);
        if (calc === 0) {
            return console.log('false');
        }
    }
    return console.log('true');
};

const run = isPrime(prompt('Введите целое число', [3]));