import readlineSync from 'readline-sync';
import nok from './games/nok.js';
import progression from './games/progression.js';
import start from './engine.js';

const launch = () => {
    const userName = readlineSync.question('Write down your name ');
    console.log('Assalam Aleikum, ' + userName + '!');
    console.log('Welcome to the Brain Games!');
    const games = [ nok, progression ];
    while (true) {
        const index = readlineSync.keyInSelect(games.map(game => game.name), 'Choose an option:');
        if (index === -1) break;
        start(userName, games[index]);
    }
};

export default launch;