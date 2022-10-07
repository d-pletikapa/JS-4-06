'use strict';
console.log('Задание 3:');

const reverseString = (string) => {

    let newString = '';

for (let i = string.length-1; i >=0; i--) {

    newString += string[i];

}
    return console.log('Вывод - ', newString);
    // const result = newString.split("").reverse().join("");

};

reverseString ('Привет мир');
