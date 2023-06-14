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
            imgSrc: require("../../assets/images/MemoCard2.svg"),
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

<style scoped>

.grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
    justify-items: center;
    align-items: center;
    margin: 50px auto 0;
    width: 690px;
    height: 482px;
    background: #222927;
    padding: 20px;
}

.instruction {
  color: #e43030;
  font-style: italic;
}

</style>