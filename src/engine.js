import readlineSync from 'readline-sync';

const start = (name, game) => {
    while(true) {
        const iteration = game.iteration();
        console.log('Question: ' + iteration.question);
        const answer = readlineSync.question('Answer: ');
        if (answer == 'exit' || answer == 'quit') break;
        if (answer == iteration.answer) {
            console.log('Correct!');
            console.log(`Congratulations, ${name}!`);
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${iteration.answer}'.`);
            console.log(`Let's try again, ${name}!`);
        }
    }
};

export default start;
