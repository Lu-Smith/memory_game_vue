<template>
  <div class="players">
    <div v-if="play" class="score">{{ score }}</div>
    <div class="player" > 
      <div class="player-name" v-if="!createName">
        Hello {{ player }}
      </div>
      <div v-if="createName" class="player-name-submit">
        <input type="text" v-model="player" placeholder="player name..."/>
        <button class="name-button"  @click="createPlayer">Confirm</button>
      </div>
    </div>
  </div>
  <button v-if="!createName" @click='playGame'>Play</button>
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
      createName: true,
      cells: cards1.map((card: Cell) => ({ ...card, clicked: false })),
      play: false,
      score: 0,
      player: ''
    }
  },
  methods: {
    createPlayer(this: MainGameComponent): void  {
            this.createName = false;
    },
    playGame(this: PlayGame){
            this.play = true
            this.cells = cards1.map((card: Cell) => ({ ...card, clicked: false }))
    },
    uncoverCard(this: PlayGame, cell: Cell) {
            if (!this.play) {
              return; // Game is not in play state, exit the method
            }
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
.player-name-submit {
  background: #57746d;
  padding: 10px;
}

.name-button {
  font-size: 16px;
  border: none;
  border-radius: none;
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

.name {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.player-name {
  color: red;
}
</style>