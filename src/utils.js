const randomInteger = (minValue = 0, maxValue = 100) => {
  Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};

export default randomInteger;
