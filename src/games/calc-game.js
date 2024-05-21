import playGame from '../index.js';
import randomInteger from '../utils.js';

const makeExpression = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '-': return firstNumber - secondNumber;
    case '+': return firstNumber + secondNumber;
    default: return firstNumber * secondNumber;
  }
};

const makeQuestionAnswer = () => {
  const index = randomInteger(0, 3);
  const operators = ['-', '+', '*'];

  const firstNumber = randomInteger();
  const secondNumber = randomInteger();

  let rightAnswer;
  let question;

  switch (operators[index]) {
    case '+':
      rightAnswer = makeExpression('+', firstNumber, secondNumber);
      question = `${firstNumber} + ${secondNumber}`;
      break;
    case '-':
      rightAnswer = makeExpression('-', firstNumber, secondNumber);
      question = `${firstNumber} - ${secondNumber}`;
      break;
    default:
      rightAnswer = makeExpression('*', firstNumber, secondNumber);
      question = `${firstNumber} * ${secondNumber}`;
      break;
  }

  return [rightAnswer, question];
};

const rule = 'What is the result of the expression?';

export default () => {
  playGame(makeQuestionAnswer, rule);
};
