import playGame from '../index.js';

const getGcd = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return getGcd(m, k);
  }
  return n;
};

const makeGcdNumbers = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);

  const rightAnswer = getGcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;

  return [rightAnswer, question];
};

const rule = 'Find the greatest common divisor of given numbers.';

export default () => {
  playGame(makeGcdNumbers, rule);
};
