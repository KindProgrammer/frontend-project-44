import playGame from "../index.js"

const addNumbers = () => {
    const firstNumber = Math.floor(Math.random() * 100)
    const secondNumber = Math.floor(Math.random() * 100)
    const sum = firstNumber + secondNumber

    return [sum, `${firstNumber} + ${secondNumber}`]
}

const subtractNumbers = () => {
    const firstNumber = Math.floor(Math.random() * 100)
    const secondNumber = Math.floor(Math.random() * 100)
    const subtract = firstNumber - secondNumber

    return [subtract, `${firstNumber} - ${secondNumber}`]
}

const multiplyNumbers = () => {
    const firstNumber = Math.floor(Math.random() * 100)
    const secondNumber = Math.floor(Math.random() * 100)
    const multiply = firstNumber * secondNumber

    return [multiply, `${firstNumber} * ${secondNumber}`]
}

const makeExpression = () => {
    const num = Math.floor(Math.random() * 3)

    switch (num) {
        case 0: 
            const addExpression = addNumbers()
            return addExpression
        case 1:
            const subExpression = subtractNumbers()
            return subExpression
        case 2:
            const multExpression = multiplyNumbers()
            return multExpression
    }
}

const rule = 'What is the result of the expression?'

export default () => {
    playGame(makeExpression, rule)
}