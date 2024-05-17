import playGame from '../index.js';
import randomInteger from '../utils.js';

const addNumbers = (firstNumber, secondNumber) => {
  const sum = firstNumber + secondNumber;

  return sum;
};

const subtractNumbers = (firstNumber, secondNumber) => {
  const subtract = firstNumber - secondNumber;

  return subtract;
};

const multiplyNumbers = (firstNumber, secondNumber) => {
  const multiply = firstNumber * secondNumber;

  return multiply;
};

const makeQuestionAnswer = () => {
  const num = randomInteger(0, 3);

  const firstNumber = randomInteger();
  const secondNumber = randomInteger();

  let rightAnswer;
  let question;

  switch (num) {
    case 0:
      rightAnswer = addNumbers(firstNumber, secondNumber);
      question = `${firstNumber} + ${secondNumber}`;
      break;
    case 1:
      rightAnswer = subtractNumbers(firstNumber, secondNumber);
      question = `${firstNumber} - ${secondNumber}`;
      break;
    default:
      rightAnswer = multiplyNumbers(firstNumber, secondNumber);
      question = `${firstNumber} * ${secondNumber}`;
      break;
  }

  return [rightAnswer, question];
};

const rule = 'What is the result of the expression?';

export default () => {
  playGame(makeQuestionAnswer, rule);
};
