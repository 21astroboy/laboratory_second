import getRandom from './lib/getRandom.js';

const progression = {
   name: 'Geometry progression',
   rules: 'What number is missing in the progression?',
   iteration: () => {
        const len = getRandom(5, 10);
        const b1 = getRandom(1, 6);
        const q = getRandom(2, 7);

        const progression = [b1];
        for (let i = 1; i < len; i++) {
            progression[i] = progression[i-1] * q;
        }

        const hidden = getRandom(0, len-1);
        const answer = progression[hidden];
        progression[hidden] = '…';

        return {
           question: progression.join(' '),
           answer,
        };
   },
};

export default progression;
