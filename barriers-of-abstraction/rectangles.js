// Реализуйте абстракцию (набор функций) для работы с прямоугольником, стороны
// которого всегда параллельны осям. Прямоугольник может располагаться в любом
// месте координатной плоскости.

// При такой постановке задачи достаточно знать только три параметра для
// однозначного задания прямоугольника на плоскости: координаты левой-верхней
// точки, ширину и высоту. Зная их, мы всегда можем построить прямоугольник
// одним единственным способом.

// Основной интерфейс:

// makeRectangle (конструктор) - создаёт прямоугольник. Принимает параметры:
// левую-верхнюю точку, ширину и высоту.
// Селекторы getStartPoint, getWidth и getHeight
// Вспомогательные функции для выполнения расчетов:

// square - возвращает площадь прямоугольника (a * b).
// perimeter - возвращает периметр прямоугольника (2 * (a + b)).
// containsTheOrigin - проверяет, принадлежит ли центр координат прямоугольнику
// (не лежит на границе прямоугольника, а находится внутри). Чтобы в этом
// убедиться, достаточно проверить, что все вершины прямоугольника лежат в
// разных квадрантах (их можно вычислить в момент проверки).
// Так как это интерфейсные функции, то они должны быть экспортированы. Если
// этого не сделать, система модулей js не даст ими воспользоваться.


// const p = makePoint(0, 1);
// const rectangle = makeRectangle(p, 5, 4);

// Вычисление площади прямоугольника
// square(rectangle); // 20;

// perimeter(rectangle); // 18
// containsTheOrigin(rectangle); // false

// const rectangle02 = makeRectangle(makePoint(-4, 3), 5, 4);
// containsTheOrigin(rectangle02); // true

// containsTheOrigin(makeRectangle(makePoint(-4, 4), 5, 2)); // false
// containsTheOrigin(makeRectangle(makePoint(-4, 3), 2, 8)); // false

// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeRectangle = (startPoint, width, heigth) => cons(startPoint, cons(width, heigth));

export const getStartPoint = (rectangle) => car(rectangle);
export const getWidth = (rectangle) => car(cdr(rectangle));
export const getHeight = (rectangle) => cdr(cdr(rectangle));

export const square = (rectangle) => getWidth(rectangle) * getHeight(rectangle);
export const perimeter = (rectangle) => 2 * (getWidth(rectangle) + getHeight(rectangle));

export const containsTheOrigin = (rectangle) => {
  const startPoint = getStartPoint(rectangle);
  const qStartPoint = quadrant(getStartPoint(rectangle));
  const qRightBottomPoint = quadrant(makePoint(getX(startPoint) + getWidth(rectangle), getY(startPoint) - getHeight(rectangle)));
  return qStartPoint === 2 && qRightBottomPoint === 4;
}
// END