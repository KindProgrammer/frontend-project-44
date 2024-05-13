import playGame from "../index.js"

const makeNumber = () => {
    const number = Math.floor(Math.random() * 100)
    return number
}

const isEven = (number) => {
    if (number % 2 === 0) {
        return 'yes'
    } else {
        return 'no'
    }
}

const makeQuestionAnswer = () => {
    const question = makeNumber()
    const rightAnswer = isEven(question)

    return [rightAnswer, question]
}

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'

export default () => {
    playGame(makeQuestionAnswer, rule)
}