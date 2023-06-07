<template>
  <button @click='playGame'>Play</button>
  <div class="grid">
    <div v-for="cell in cells" :key="cell.id" @click="uncoverCard(cell)">
        <img v-if="!cell.clicked" :src="imgSrc" :alt="imgAlt" />
        <img v-else :src="require(`../../assets/images/${cell.src}`)" :alt="cell.alt" />
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
  clicked: boolean
}

interface PlayGame {
  hello: string,
  cells: Cell[],
  imgSrc: string,
  imgAlt: string,
}

export default {
    data() {
        return {
            cells: cards1.map((card: Cell) => ({ ...card, clicked: false })),
            hello: '',
            imgSrc: require("../../assets/images/MemoCard2.1.svg"),
            imgAlt: "top of the memo card",
        }
    },
    methods: {
        playGame(this: PlayGame){
            this.hello = ' hello'
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

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
    justify-items: center;
    align-items: center;
    margin: 50px auto 0;
    width: 430px;
    height: 430px;
}

img {
    width: 100px;
    height: 100px;
}

button {
  padding: 10px 20px;
  border-radius: 50%;
  border: 2px solid red;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  background: black;
  color: red;
  font-size: 30px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

button:hover {
  border-radius: 40%;
  border: 2px solid #57746d;
  box-shadow: none;
  background: black;
  color: #57746d;
}

</style>