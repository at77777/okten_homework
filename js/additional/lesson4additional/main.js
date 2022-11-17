'use strict';

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumber(a, b, c) {
    let arr = [a, b, c]
    let min = arr[0];
    for (const minElement of arr) {
        if (minElement < min){
            min = minElement;
        }
    }
    console.log(min)
}

minNumber(1, -2, 5)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumber(a, b, c) {
    let arr = [a, b, c]
    let max = arr[0];
    for (const maxElement of arr) {
        if (maxElement > max){
            max = maxElement;
        }
    }
    console.log(max)
}

maxNumber(7, 11, -10)


// - створити функцію яка повертає найбільше число з масиву
let array = [1, 2, 10, 0, -20];

function maxNumber1(array) {
    let max = array[0];
    for (const maxElement of array) {
        if (maxElement > max){
            max = maxElement;
        }
    }
    return max;
}

console.log(maxNumber1(array));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function getAverage (array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
}

console.log(getAverage(array));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]