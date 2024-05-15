import playGame from "../index.js"

const isPrime = (checkedNumber) => {
    if (checkedNumber === 2) {
        return 'yes'
      }
    
    let i = 2;
    const limit = Math.floor(checkedNumber / 2);
    while (i <= limit) {
    if (checkedNumber % i === 0) {
        return 'no'
    }
    i +=1;
    }

    return 'yes';
}

const makeQuestionAnswer = () => {
    const question = Math.floor(Math.random() * 100) + 2
    const rightAnswer = isPrime(question)

    return [rightAnswer, question]
}

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"'

export default () => {
    playGame(makeQuestionAnswer, rule)
}