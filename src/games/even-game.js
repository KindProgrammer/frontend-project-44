import playGame from '../index.js';
import randomInteger from '../utils.js';

const makeNumber = () => {
  const number = randomInteger();
  return number;
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const makeQuestionAnswer = () => {
  const question = makeNumber();
  const rightAnswer = isEven(question);

  return [rightAnswer, question];
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  playGame(makeQuestionAnswer, rule);
};
