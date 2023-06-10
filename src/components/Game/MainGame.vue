<template>
  <div class="players">
    <h2 v-if="play">{{ score }}</h2>
    <div class="player" > 
      <h3 class="player-name" v-if="!createName">
        {{ player }}
      </h3>
      <div v-if="createName" class="player-name-submit">
        <input type="text" v-model="player" placeholder="player name..."/>
        <button class="name-button"  @click="createPlayer">Confirm</button>
      </div>
    </div>
  </div>
  <button v-if="!createName && !play" @click='playGame'>Play</button>
  <button v-if="play && !gameOver" @click='playGame'>Restart</button>
  <button v-if="gameOver" @click='playGame'>Play Again</button>
  <GameGrid :cells="cells" @uncoverCard="uncoverCard"/>
  <div class="titleTimer">
    <MainTitle />
    <GameTimer :timerMinutes="timerMinutes" :timerSeconds="timerSeconds"/>
  </div>
</template>

<script lang="ts">
import GameGrid from './GameGrid.vue'
import cards1 from '../../assets/cards.js'

//types
import Cell from '../Types/Cell'
import PlayGame from '../Types/PlayGame'
import MainGameComponent from '../Types/MainGameComponent'
import GameTimer from '../Header/GameTimer.vue';
import MainTitle from '../Header/MainTitle.vue';

export default {
  components: {
    GameGrid, GameTimer, MainTitle
  },
  data()  {
    return {
      createName: true,
      cells: cards1.map((card: Cell) => ({ ...card, clicked: false })),
      play: false,
      score: 0,
      player: '',
      timerMinutes: 0,
      timerSeconds: 0,
      timerInterval: null,
      gameOver: false
    }
  },
  methods: {
    createPlayer(this: MainGameComponent): void  {
            this.createName = false;
    },
    playGame(this: PlayGame){
            this.play = true
            const shuffledCards = shuffleArray(cards1);
            this.cells = shuffledCards.map((card: Cell) => ({ ...card, clicked: false }));
            this.timerMinutes = 0;
            this.timerSeconds = 0;
            clearInterval(this.timerInterval);
            this.startTimer();
            this.gameOver = false;
            this.score = 0;
            function shuffleArray(array: any[]): any[] {
              const shuffledArray = [...array];
              for (let i = shuffledArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
              }
              return shuffledArray;
            }
    },
    startTimer(this: PlayGame) {
      this.timerInterval = setInterval(() => {
        this.timerSeconds++;
        if (this.timerSeconds === 60) {
          this.timerMinutes++;
          this.timerSeconds = 0;
        }
      }, 1000);
    },
    uncoverCard(this: PlayGame, cell: Cell) {
            if (!this.play) {
              return; // Game is not in play state, exit the method
            }
            const clickedCards = this.cells.filter((card: Cell) => card.clicked && card.alt !== "checked");
            const checkClickedCards = this.cells.filter((card: Cell) => card.alt === cell.alt && card.clicked);
            const coverClickedCards = this.cells.filter((card: Cell) => card.alt !== cell.alt && card.clicked && card.alt !== "checked");

            if (!cell.clicked) {
              this.cells = this.cells.map((c: Cell) => {
              if (c.id === cell.id  && (clickedCards.length === 0 || clickedCards.length === 1))  {
                return { ...c, clicked: true };
              } else {
                return c
              }
              });
              if (checkClickedCards.length === 1) {
                    this.score++
                    setTimeout(() => {
                      this.cells.forEach((c: Cell) => {
                      if (c.alt === cell.alt && clickedCards.length === 1) {
                        c.src = "MemoCard2.2.svg";
                        c.alt = "checked";
                      } 
                    });
                  }, 600);
              } else if (coverClickedCards.length === 1) {
                this.cells.forEach((card: Cell) => {
                  if (card.alt !== "checked") {
                    setTimeout(() => {
                      card.clicked = false;
                    }, 900);
                  }
                   
                })
              } 
          }
          const allClicked = this.cells.every((c: Cell) => c.clicked);
          if (allClicked) {
            this.gameOver = true
            clearInterval(this.timerInterval);
          }   
    }
  }
}
</script>

<style>
.player-name-submit {
  background: #57746d;
  padding: 30px 50px;
  border-radius: 50%;
}

.name-button {
  font-size: 16px;
} 

.players {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
}

.players h3 {
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
}

.players h3:hover {
  color: rgb(250, 100, 100);
}

.player-name {
  color: #e43030;
  margin-bottom: 20px;
}

.titleTimer {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 40%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  color: #57746d;
}
</style>