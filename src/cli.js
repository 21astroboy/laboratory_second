import readlineSync from 'readline-sync';
import nok from './games/nok.js';
import progression from './games/progression.js';
import start from './engine.js';

const launch = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log('Assalam Aleikum ' + userName + '!');

    const games = [ nok, progression ];
    while (true) {
        const index = readlineSync.keyInSelect(games.map(game => game.name), 'Choose a game:');
        if (index === -1) break;
        start(userName, games[index]);
    }
};

export default launch;