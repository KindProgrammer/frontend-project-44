import readlineSync from 'readline-sync';

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const playGame = (questionAnswerFunc, rule) => {
  const name = getName();

  console.log(`Hello, ${name}!`);
  console.log(rule);

  for (let i = 0; i < 3; i += 1) {
    let questionAnswer = questionAnswerFunc();

    const rightAnswer = String(questionAnswer[0]);
    const question = questionAnswer[1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase().trim();
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};