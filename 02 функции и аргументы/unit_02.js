// Task 1
// Напишите функцию t1, которая принимает два аргумента и выводит в .out-1 случайное целое число от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

const out1 = document.querySelector('.out-1');
function t1(min, max) {
  let num = Math.floor(Math.random() * (max - min) + min);
  out1.innerHTML = num;
}

document.querySelector('.b-1').addEventListener('click', function () {
  t1(120, 140);
});

// Task 2.

//Напишите функцию t2, которая принимает три аргумента (число от, число до и блок, в который нужно вывести данные) и выводит в указанный блок случайное целое число от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-2. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

function t2(min, max, block) {
  let out = document.querySelector(block);
  let num = Math.floor(Math.random() * (max - min) + min);
  out.innerHTML = num;
}

document.querySelector('.b-2').addEventListener('click', function () {
  t2(20, 50, '.out-2');
  // функция должна вывести случайное целое от 120 до 140 в блок out-2
});

// Task 3.
//Напишите функцию t3, которая принимает два аргумента (число от, число до ) и выводит в блок .out-3 случайное целое число от первого аргумента(включительно) до второго(включительно). Задайте значение по умолчанию для min число 0 для max число 100. Функция запускается по кнопке .b-3. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

function t3(min = 0, max = 100) {
  let num = Math.floor(Math.random() * (max - min) + min);
  let out = document.querySelector('.out-3');
  out.innerHTML = num;
}

document.querySelector('.b-3').addEventListener('click', function () {
  t3();
});

// Task 4
// Напишите функцию t4, которая делит число a на b и результат выводит в out-4. Если b равно нулю, то в out-4 выводится аргумент c.

function t4(a, b, c) {
  let out = document.querySelector('.out-4');
  out.innerHTML = b === 0 ? c : a / b;
  //   out.innerHTML = b === 0 ? a / b : c;
}

document.querySelector('.b-4').addEventListener('click', function () {
  t4(7, 12, false);
});

// Task 5
// Напишите функцию t5, которая делит число a на b и результат выводит в out-5. Если b равно нулю, то в out-5 выводится аргумент c, который по умолчанию равен нулю.

function t5(a, b, c = 0) {
  let out = document.querySelector('.out-5');
  if (b === 0) {
    out.innerHTML = c;
  } else {
    out.innerHTML = a / b;
  }
}

document.querySelector('.b-5').addEventListener('click', function () {
  t5(7, 0);
});

// Task 6
// Давайте напишем функцию t6, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел.

function t6(arr, block) {
  let out = document.querySelector('.' + block + '');
  let str = '';
  for (let item of arr) {
    str += item + ' ';
  }
  out.innerHTML = str;
}

document.querySelector('.b-6').addEventListener('click', function () {
  t6([99, 44, 55, 66], 'out-6');
});

// Task 7
// Давайте напишем функцию t7, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Задайте аргумент arr равный по умолчанию пустому массиву. Добавьте внутрь функции проверку на массив аргумента arr. Если arr не массив, то в block выводим false.

function t7(arr = [], block) {
  let out = document.querySelector(block);
  let str = '';
  if (Array.isArray(arr)) {
    for (let item of arr) {
      str += item + ' ';
    }
    out.innerHTML = str;
  } else {
    out.innerHTML = false;
  }
}

document.querySelector('.b-7').addEventListener('click', function () {
  t7([99, 144, 155, 166], '.out-7');
});

// Task 8
// Давайте напишем функцию t8, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр.

function t8(text, block) {
  let out = document.querySelector(block);
  out.innerHTML = text.trim().toLowerCase();
}

document.querySelector('.b-8').addEventListener('click', function () {
  t8(' HelLO wORLd       ', '.out-8');
});

// Task 9
// Давайте напишем функцию t9, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. Зададим значение по умолчанию для text - пустую строку, это позволит нам избежать ошибок, если данный аргумент упустили, и добавим в функцию проверку - если block не существует, то функция ничего не выводит.

function t9(text = '', block) {
  let out = document.querySelector(block);
  if (!block) {
    return false;
  } else {
    out.innerHTML = text.trim().toLowerCase();
  }
}

document.querySelector('.b-9').addEventListener('click', function () {
  t9(' HelLO wORLd       ', '.out-9');
});

// Task 10
// Напишите функцию, t10, которая выводит в out-10 количество переданных ей аргументов (число).

function t10() {
  let out = document.querySelector('.out-10');
  out.innerHTML = arguments.length;
}

document.querySelector('.b-10').addEventListener('click', function () {
  t10(33, 22, 44, 11, 55, 66, 11, 66);
});

// Task 11
// Напишите функцию, t11, которая выводит в out-11 cумму переданных ей аргументов (число). Используем arguments.

function t11() {
  const out = document.querySelector('.out-11');
  let summ = 0;
  for (let i = 0; i < arguments.length; i++) {
    summ += arguments[i];
  }
  out.innerHTML = summ;
}

document.querySelector('.b-11').addEventListener('click', function () {
  t11(33, 22, 44, 11, 55, 66, 11, 66);
});

// Task 12
// Напишите функцию, t12, которая выводит в out-12 cумму переданных ей аргументов (число). Используем rest.

function t12(...arguments) {
  let out = document.querySelector('.out-12');
  let summ = arguments.reduce((acum, item) => (acum += item));
  out.innerHTML = summ;
}

document.querySelector('.b-12').addEventListener('click', function () {
  t12(33, 22, 44, 11, 55, 66, 11, 66);
});

// Task 13
// Напишите функцию, t13, которая выводит в out-13 массив (переданный как аргумент arr) c помощью функции funcArg (переданной как аргумент).
const out13 = document.querySelector('.out-13');
function t13(arr, funcArg) {
  funcArg(arr);
}

// функции для вывода уже заготовлены
function showArrSpace(arr) {
  out13.innerHTML = arr.join(' ');
}

function showArrUnderscore(arr) {
  out13.innerHTML = arr.join('_');
}

document.querySelector('.b-13').addEventListener('click', function () {
  t13([3, 4, 5], showArrSpace);
  // попробуйте также вместо showArrSpace поставить showArrUnderscore
});

// Task 14
// Напишите функцию, t14, которая выводит в блок block (переданный как аргумент) массив (переданный как аргумент arr) c помощью функции funcArg (переданной как аргумент).

const out14 = document.querySelector('.out-14');

function t14(arr, funcArg, block) {
  funcArg(arr, block);
}

// функции для вывода уже заготовлены
function showArrSpace2(arr, block) {
  block.innerHTML = arr.join('');
  // вывод в блок пишите как в предыдущем примере
}

function showArrUnderscore2(arr, block) {
  block.innerHTML = arr.join('_');
  // вывод в блок пишите как в предыдущем примере
}

document.querySelector('.b-14').addEventListener('click', function () {
  t14([3, 4, 5], showArrUnderscore2, out14);
  // попробуйте также вместо showArrSpace2 поставить showArrUnderscore2
});

// Task 15
// Напишите функцию, t15, которая в зависимости от четности аргумента num запускает функцию even, или odd.
const out15 = document.querySelector('.out-15');
function t15(num, funcArg1, funcArg2) {
  if (num % 2 == 0) {
    funcArg2();
  } else {
    funcArg1();
  }
}

function showOne() {
  out15.innerHTML = 'even';
}

function showTwo() {
  out15.innerHTML = 'odd';
}
document.querySelector('.b-15').addEventListener('click', function () {
  t15(5, showOne, showTwo);
});
