import { playGame } from '../index.js';
import randomInteger from '../utils.js';

const isPrime = (checkedNumber) => {
  if (checkedNumber === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.floor(checkedNumber / 2);
  while (i <= limit) {
    if (checkedNumber % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const makeQuestionAnswer = () => {
  const question = randomInteger(2);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return [rightAnswer, question];
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => {
  playGame(makeQuestionAnswer, rule);
};
