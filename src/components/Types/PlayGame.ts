import Cell from './Cell'

interface PlayGame {
    play: boolean,
    cells: Cell[],
    imgSrc: string,
    imgAlt: string,
}

export default PlayGame