<template>
  <div class="players">
      <h3 class="player-name" v-if="!createName">
        <div v-if="gameOver"> Congratulations {{ player }} <span>, you did it! </span></div>
        <div v-else>{{ player }}</div>
      </h3>
      <div v-if="createName" class="player-name-submit">
        <input type="text" v-model="player" placeholder="player name..."/>
        <button class="name-button"  @click="createPlayer">Confirm</button>
      </div>
  </div>
  <div class="score-button">
    <h2 v-if="play">{{ score }}</h2>
    <button v-if="!createName && !play" @click='playGame'>Play</button>
    <button v-if="play && !gameOver" @click='playGame'>Restart</button>
    <button v-if="gameOver" @click='playGame'>Play Again</button>
  </div>
  <GameGrid1 v-if="level === 'Level 1'" :cells="cells" @uncoverCard="uncoverCard"/>
  <GameGrid2 v-if="level === 'Level 2'" :cells="cells" @uncoverCard="uncoverCard"/>
  <GameGrid3 v-if="level === 'Level 3'" :cells="cells" @uncoverCard="uncoverCard"/>
  <div class="titleTimer">
    <MainTitle />
    <MainHeader @handleLevels="handleLevels" :level="level"/>
    <GameTimer :timerMinutes="timerMinutes" :timerSeconds="timerSeconds" :gameOver="gameOver"/>
  </div>
</template>

<script lang="ts">
import GameGrid1 from './GameGrid1.vue'
import GameGrid2 from './GameGrid2.vue'
import GameGrid3 from './GameGrid3.vue'
import cards1 from '../../assets/cards.js'
import cards2 from '../../assets/cards2.js'
import cards3 from '../../assets/cards3.js'

//types
import Cell from '../Types/Cell'
import PlayGame from '../Types/PlayGame'
import MainGameComponent from '../Types/MainGameComponent'
import GameTimer from '../Header/GameTimer.vue';
import MainTitle from '../Header/MainTitle.vue';
import MainHeader from '../Header/MainHeader.vue';

interface LevelComponent extends MainGameComponent {
  level: string;
  cells: Cell[];
}

export default {
  components: {
    GameGrid1, GameGrid2, GameGrid3, GameTimer, MainTitle, MainHeader
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
      gameOver: false,
      level: 'Level 1'
    }
  },
  methods: {
    createPlayer(this: MainGameComponent): void  {
            this.createName = false;
    },
    handleLevels(this: LevelComponent, item: string) {
      this.level = item;
      if (this.level === 'Level 1') {
        this.cells = cards1.map((card: Cell) => ({ ...card, clicked: false }));
      } else if (this.level === 'Level 2') {
        this.cells = cards2.map((card: Cell) => ({ ...card, clicked: false }));
      } else {
        this.cells = cards3.map((card: Cell) => ({ ...card, clicked: false }));
      }
    },
    playGame(this: PlayGame){
            this.play = true
            const shuffledCards = shuffleArray(this.cells);
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
                        if (this.level === 'Level 1') {
                          c.src = "MemoCard2.2.svg";
      } else if (this.level === 'Level 2') {
        c.src = "MemoCard8.svg";
      } else {
        c.src = "MemoCard2.12.svg";
      }
                        
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
  background: rgba(0, 0, 0, 0.5);
  padding: 30px 50px;
  border-radius: 50%;
  margin-top: 100px;
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

.player-name {
  margin: 80px 0 20px 0;
  color: rgb(250, 100, 100);
}

.score-button {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
}

.titleTimer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: baseline;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 900px) {
    .player-name-submit {
    padding: 25px 45px;
  }
}
</style>