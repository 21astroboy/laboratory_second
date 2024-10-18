/**
 * Возвращает случаное число из отрезка
 * @param a - начало отрезка
 * @param b - конец отрезка
 * @returns случайное число
 */
const getRandom = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

export default getRandom;
