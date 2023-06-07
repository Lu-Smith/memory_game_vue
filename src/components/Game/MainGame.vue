<template>
  <div class="players">
    <h3 :class="{ active: active1 }" @click="togglePlayer(1)">player 1</h3>
    <h2>Level 1</h2>
    <h3 :class="{ active: active2 }" @click="togglePlayer(2)">player 2</h3>
  </div>
  <GameGrid />
</template>

<script lang="ts">

import GameGrid from './GameGrid.vue'

interface MainGameComponent {
  active1: boolean;
  active2: boolean;
  togglePlayer(playerNumber: number): void;
}

export default {
  components: {
    GameGrid
  },
  data()  {
    return {
      active1: false,
      active2: false
    }
  },
  methods: {
    togglePlayer(this: MainGameComponent, playerNumber:number): void  {
      this.active1 = playerNumber === 1 ? !this.active1 : false;
      this.active2 = playerNumber === 2 ? !this.active2 : false;
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
</style>