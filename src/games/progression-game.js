import playGame from "../index.js";

const makeProgression = () => {
    const startProgression = Math.floor(Math.random() * 100)
    const stepProgression = Math.floor(Math.random() * 5) + 1

    const progression = []
    let step = 0
    for (let i = 0; i < 10; i++) {
        progression.push(startProgression + step)
        step = step + stepProgression
    }

    return progression
}

const hideElement = (listProgression) => {
    const hiddenElement = Math.floor(Math.random() * listProgression.length)

    const hidden = listProgression[hiddenElement]
    const withHidden = listProgression.slice()
    withHidden[hiddenElement] = '..'

    return [withHidden, hidden]
}

const makeQuestionAnswer = () => {
    const rowData = hideElement(makeProgression())
    const question = rowData[0].join(' ')
    const rightAnswer = rowData[1]

    return [rightAnswer, question]
}

const rule = 'What number is missing in the progression?'

export default () => {
    playGame(makeQuestionAnswer, rule)
}