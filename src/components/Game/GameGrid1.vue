<template>
  <div class="grid">
    <div v-for="cell in cells" :key="cell.id" @click="uncoverCard(cell)">
        <img v-if="!cell.clicked" :src="imgSrc" :alt="imgAlt" />
        <img v-else :src="require(`../../assets/images/${cell.src}`)" :alt="cell.alt" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PropType } from 'vue';
import Cell from '../Types/Cell'

export default defineComponent({
    props: {
      cells: {
        type: Array as PropType<Cell[]>,
        required: true,
        default: () => []
      }
    },
    data() {
        return {
            imgSrc: require("../../assets/images/MemoCard2.1.svg"),
            imgAlt: "top of the memo card",
        }
    },
    methods: {
    uncoverCard(cell: Cell) {
      this.$emit('uncoverCard', cell);
    },
  },
})
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
    width: 470px;
    height: 482px;
    background: #222927;
    padding: 20px;
}

.instruction {
  color: #e43030;
  font-style: italic;
}

@media screen and (max-width: 900px) {
    .grid {
      gap: 10px;
      width: 440px;
      height: 440px;
      padding: 18px;
    }
}

@media screen and (max-width: 680px) {
    .grid {
      gap: 8px;
      width: 380px;
      height: 380px;
      padding: 15px;
    }
}

@media screen and (max-width: 480px) {
    .grid {
      gap: 5px;
      width: 320px;
      height: 320px;
      padding: 10px;
    }
}

</style>