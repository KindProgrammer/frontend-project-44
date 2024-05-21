import playGame from '../index.js';
import randomInteger from '../utils.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const makeQuestionAnswer = () => {
  const question = randomInteger();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [rightAnswer, question];
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  playGame(makeQuestionAnswer, rule);
};
