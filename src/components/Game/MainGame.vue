<template>
  <div class="players">
    <div v-if="play" class="score">{{ scorePlayer1 }}</div>
    <div class="player" v-if="play" > 
      <div class="player1 name" :class="{ active: active1 }">
        {{ player1 }}
      </div>
      <div v-if="createName1" class="player-name-submit">
        <input type="text" v-model="player1" placeholder="player name..."/>
        <button class="name-button"  @click="togglePlayer(1)">Confirm</button>
      </div>
    </div>
    <div class="player" v-if="play">
      <div class="player2 name" :class="{ active: active2 }" >
        {{ player2 }}
      </div>
      <div v-if="createName2" class="player-name-submit">
        <input type="text" v-model="player2" placeholder="player name..."/>
        <button  class="name-button"  @click="togglePlayer(2)">Confirm</button>
      </div>
    </div>
    <div v-if="play" class="score">{{ scorePlayer2 }}</div>
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
      createName1: true,
      createName2: true,
      cells: cards1.map((card: Cell) => ({ ...card, clicked: false })),
      play: false,
      choosePlayer: 'Enter a player name',
      scorePlayer1: 0,
      scorePlayer2: 0,
      player1: '',
      player2: ''
    }
  },
  methods: {
    togglePlayer(this: MainGameComponent, playerNumber:number): void  {
      if(playerNumber === 1) {
        this.active1 = true;
        this.active2 = false;
        this.createName1 = false;
      }
      if(playerNumber === 2) {
        this.active2 = true;
        this.active1 = false;
        this.createName2 = false;
      }
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

.player1 {
  color: red;
}

.player2 {
  color: #57746d;
}
</style>