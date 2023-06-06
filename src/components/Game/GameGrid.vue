<template>
  <button @click='playGame'>Go</button>
  <div class="grid">
    <div v-for="cell in cells" :key="cell.id">
        <img :src="require(`../../assets/images/${cell.src}`)" :alt="cell.alt">
    </div>
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

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
    justify-items: center;
    align-items: center;
}

img {
    width: 100px;
    height: 100px;
}

</style>