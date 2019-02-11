// Реализуйте абстракцию для работы с рациональными числами, используя пары:

// Конструктор make(numer, denom).
// Селекторы numer (числитель) и denom (знаменатель).

// Функцию toString, возвращающую строковое представление рационального числа.
// Например для дроби 3/4 созданной так make(3, 4), строковым представлением
// будет 3 / 4.

// Предикат isEqual, проверяющую равенство двух рациональных чисел. Например
// isEqual(make(1, 2), make(2, 4)).

// Функцию add, выполняющую сложение дробей.

// Функцию sub, выполняющую вычитание дробей.

// Функцию mul, выполняющую умножение дробей.

// Функцию div, выполняющую деление дробей.

// Экспортируйте созданные функции.

// Обратите внимание, что результатом любой арифметической операции над
// рациональным числом будет рациональное число.

// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const make = (number, denom) => cons(number, denom);
export const numer = (rat) => car(rat);
export const denom = (rat) => cdr(rat);

export const toString = (rat) => {
  const res = `${numer(rat)} / ${denom(rat)}`;
  return res;
};

export const isEqual = (rat1, rat2) => numer(rat1) * denom(rat2) === numer(rat2) * denom(rat1);

export const add = (rat1, rat2) => {
  const n = numer(rat1) * denom(rat2) + denom(rat1) * numer(rat2);
  const d = denom(rat1) * denom(rat2);
  return make(n, d);
};

export const sub = (rat1, rat2) => {
  const n = numer(rat1) * denom(rat2) - denom(rat1) * numer(rat2);
  const d = denom(rat1) * denom(rat2);
  return make(n, d);
};

export const mul = (rat1, rat2) => {
  const n = numer(rat1) * numer(rat2);
  const d = denom(rat1) * denom(rat2);
  return make(n, d);
};

export const div = (rat1, rat2) => {
  const n = numer(rat1) * denom(rat2);
  const d = denom(rat1) * numer(rat2);
  return make(n, d);
};
// END