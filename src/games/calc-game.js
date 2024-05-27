import { playGame } from '../index.js';
import randomInteger from '../utils.js';

const makeExpression = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '-': return firstNumber - secondNumber;
    case '+': return firstNumber + secondNumber;
    case '*': return firstNumber * secondNumber;
    default: throw new Error(`Illegal operator ${operator}`);
  }
};

const makeQuestionAnswer = () => {
  const operators = ['-', '+', '*'];
  const index = randomInteger(0, operators.length - 1);

  const firstNumber = randomInteger();
  const secondNumber = randomInteger();

  const rightAnswer = makeExpression(operators[index], firstNumber, secondNumber);
  const question = `${firstNumber} ${operators[index]} ${secondNumber}`;

  return [rightAnswer, question];
};

const rule = 'What is the result of the expression?';

export default () => {
  playGame(makeQuestionAnswer, rule);
};
