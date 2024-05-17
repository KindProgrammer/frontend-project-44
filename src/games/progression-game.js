import playGame from '../index.js';
import randomInteger from '../utils.js';

const makeProgression = () => {
  const startProgression = randomInteger();
  const stepProgression = randomInteger(1, 5);

  const progression = [];
  let step = 0;
  for (let i = 0; i < 10; i += 1) {
    progression.push(startProgression + step);
    step += stepProgression;
  }

  return progression;
};

const hideElement = (listProgression) => {
  const hiddenElement = randomInteger(0, listProgression.length);

  const hidden = listProgression[hiddenElement];
  const withHidden = listProgression.slice();
  withHidden[hiddenElement] = '..';

  return [withHidden, hidden];
};

const makeQuestionAnswer = () => {
  const rowData = hideElement(makeProgression());
  const question = rowData[0].join(' ');
  const rightAnswer = rowData[1];

  return [rightAnswer, question];
};

const rule = 'What number is missing in the progression?';

export default () => {
  playGame(makeQuestionAnswer, rule);
};
