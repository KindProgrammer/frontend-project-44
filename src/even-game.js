import readlineSync from 'readline-sync';

const getName = () => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    return name
};

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


const playGame = () => {
    const name = getName()

    console.log(`Hello, ${name}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    let i = 0
    while (i < 3) {
        const number = makeNumber()
        const rightAnswer = isEven(number)

        console.log(`Question: ${number}`)
        const answer = readlineSync.question('Your answer: ').toLowerCase().trim()
        if (answer !== rightAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }
        console.log('Correct!')
        i ++
    }

    console.log(`Congratulations, ${name}!`)
}

export default playGame