import Cell from './Cell'

interface PlayGame {
    play: boolean,
    cells: Cell[],
    imgSrc: string,
    imgAlt: string,
    timerMinutes: 0,
    timerSeconds: 0,
    startTimer(): void,
    timerInterval: number,
    gameOver: boolean,
    score: number,
    level: string,
}

export default PlayGame