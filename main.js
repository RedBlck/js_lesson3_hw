// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrNumber = [1, 2, 3, 4, 5];
// console.log(arrNumber);
// let arrString = ['red', 'black', 'green', 'white', 'yellow'];
// console.log(arrString);
// let arrAll = ['red', 94, 5 < 5, 'green', true];
// console.log(arrAll);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
// array[0] = 54;
// array[1] = 'red';
// array[2] = 'black';
// array[3] = 89;
// array[4] = 'go!'
// console.log(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>');
//     document.write('redblack');
//     document.write('</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>');
//     document.write(`this is ${i}`);
//     document.write('</div>');
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write('<h1>')
//     document.write('Red');
//     document.write('</h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write('<h1>');
//     document.write(`number ${i}`);
//     document.write('<h1>');
//     i++;
// }



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['red', 'green', 'yellow', 'blue', 'black', 'white', 'cold', 'feel', 'good', 'world'];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrRandom = ['arer', 5, 8, 5 < 3, 'def', true, 'sdsd', 3.14, 'error', 5 > 1];
// for (let i = 0; i < arrRandom.length; i++) {
//     const arrRandomElement = arrRandom[i];
//     console.log(arrRandomElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrRandom = ['arer', 5, 8, 5 < 3, 'def', true, 'sdsd', 3.14, 'error', 5 > 1];
// for (let i = 0; i < arrRandom.length; i++) {
//     const arrRandomElement = arrRandom[i];
//     if (typeof arrRandomElement === "boolean") {
//         console.log(arrRandomElement);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrRandom = ['arer', 5, 8, 5 < 3, 'def', true, 'sdsd', 3.14, 'error', 5 > 1];
// for (let i = 0; i < arrRandom.length; i++) {
//     const arrRandomElement = arrRandom[i];
//     if (typeof arrRandomElement === "number") {
//         console.log(arrRandomElement);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrRandom = ['arer', 5, 8, 5 < 3, 'def', true, 'sdsd', 3.14, 'error', 5 > 1];
// for (let i = 0; i < arrRandom.length; i++) {
//     const arrRandomElement = arrRandom[i];
//     if (typeof arrRandomElement === "string") {
//         console.log(arrRandomElement);
//     }
// }



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 1;
// arr[1] = 'red';
// arr[2] = 5 > 2;
// arr[3] = 3.14;
// arr[4] = 'tetatet';
// arr[5] = false;
// arr[6] = 33;
// arr[7] = 'black';
// arr[8] = 2 > 2;
// arr[9] = 7;
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write('<div>');
//     document.write(i);
//     document.write('</div>');
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i=i+2) {
//     console.log(i);
//     document.write('<div>');
//     document.write(i);
//     document.write('</div>');
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0 && i != 0) {
//         console.log(i);
//         document.write('<div>');
//         document.write(i);
//         document.write('</div>');
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0 && i != 0) {
//         console.log(i);
//         document.write('<div>');
//         document.write(i);
//         document.write('</div>');
//     }
// }

