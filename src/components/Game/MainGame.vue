<template>
  <div class="players">
    <span v-if="play" class="score">{{ scorePlayer1 }}</span>
    <h3 v-if="play" :class="{ active: active1 }" @click="togglePlayer(1)">player 1</h3>
    <h2>Level 1</h2>
    <h3  v-if="play" :class="{ active: active2 }" @click="togglePlayer(2)">player 2</h3>
    <span v-if="play" class="score">{{ scorePlayer2 }}</span>
  </div>
  <p v-if="play && ((!active1) && (!active2))" class="instruction">{{ choosePlayer }}</p>
  <button @click='playGame'>Play</button>
  <GameGrid :cells="cells" @uncoverCard="uncoverCard"/>
</template>

<script lang="ts">
import GameGrid from './GameGrid.vue'
import cards1 from '../../assets/cards.js'

//types
import Cell from '../Types/Cell'
import PlayGame from '../Types/PlayGame'
import MainGameComponent from '../Types/MainGameComponent'

export default {
  components: {
    GameGrid
  },
  data()  {
    return {
      active1: false,
      active2: false,
      cells: cards1.map((card: Cell) => ({ ...card, clicked: false })),
      play: false,
      choosePlayer: 'Choose the player',
      scorePlayer1: 0,
      scorePlayer2: 0
    }
  },
  methods: {
    togglePlayer(this: MainGameComponent, playerNumber:number): void  {
      this.active1 = playerNumber === 1 ? !this.active1 : false;
      this.active2 = playerNumber === 2 ? !this.active2 : false;
    },
    playGame(this: PlayGame){
            this.play = true
            this.cells = cards1.map((card: Cell) => ({ ...card, clicked: false }))
    },
    uncoverCard(this: PlayGame, cell: Cell) {
            console.log(cell.id)
            this.cells = this.cells.map((c: Cell) => {
              if (c.id === cell.id) {
                return { ...c, clicked: true };
              } else {
                return c;
              }
            })
      }
  }
}
</script>

<style>
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

@keyframes activeEffect {
    0% {
      text-shadow: 0 0 3px #fff, 0 0 7px #f8f8f7, 0 0 15px #93e5eb, 0 0 20px #9fd3c7, 0 0 25px #4eb5d4, 0 0 30px #4eb5d4, 0 0 36px #4eb5d4, 0 0 45px #317a91;
    }
    100% {
      text-shadow: 0 0 3px #ffffff, 0 0 7px #f6f7f3, 0 0 15px #93ebd1, 0 0 20px #7394f0, 0 0 25px #4d7cff, 0 0 30px #4d7cff, 0 0 36px #4d7cff, 0 0 45px #395cbb;
    }
  }

.active {
  animation: activeEffect 1s ease-in-out infinite alternate;
}

.score {
  font-size: 30px;
  font-weight: bold;
  border: 4px solid #9fd3c7;
  padding: 20px;
}
</style>