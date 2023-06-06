<template>
  <button @click='playGame'>Go</button>
  <div v-for="cell in cells" :key="cell.id">
    <img :src="cell.src" :alt="cell.alt">
  </div>
  <p>results {{ hello }}</p>
</template>

<script lang="ts">
import cards1 from '../../assets/cards.js'

interface Cell {
  id: number;
  src: string;
  alt: string;
}

interface PlayGame {
  hello: string,
  cells: Cell[]
}

export default {
    data() {
        return {
            cells: [] as Cell[],
            hello: ''
        }
    },
    methods: {
        playGame(this: PlayGame){
            this.hello = ' hello'
            this.cells = [...cards1]
        }
    }

}
</script>

<style>

</style>