interface MainGameComponent {
    active1: boolean;
    active2: boolean;
    createName1: boolean;
    createName2: boolean;
    togglePlayer(playerNumber: number): void;
}

export default MainGameComponent