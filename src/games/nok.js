import getRandom from './lib/getRandom.js';

const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {
        const temp = a; 
        a = b; 
        b = temp;
    }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
};

const lcm = (a, b) => Math.abs(a*b) / gcd(a, b);

/**
 * Игра наибольшее общее кратное
 * @returns {
 *  name - имя игры
 *  rules - правила
 *  iteration - функция генерации игры, возвращает 
 *      question - задание
 *      answer - правильный ответ
 * }
 */
const nok = {
    name: 'NOK',
    rules: 'Find the smallest common multiple of given numbers.',
    iteration: () => {
        const a = getRandom(1, 100);
        const b = getRandom(1, 100);
        const c = getRandom(1, 100);
        return {
            question: [a, b, c].join(' '),
            answer: lcm(a, lcm(b, c)),
        };
    },
};

export default nok;
