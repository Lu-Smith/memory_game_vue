<template>
  <h2>Level 1</h2>
  <div class="players">
    <h3 :class="{ active: active1 }" @click="togglePlayer(1)">player 1</h3>
    <h3 :class="{ active: active2 }" @click="togglePlayer(2)">player 2</h3>
  </div>
 
</template>

<script lang="ts">
export default {
  data() {
    return {
      active1: false,
      active2: false
    }
  },
  methods: {
    togglePlayer(playerNumber:number) {
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
  border: 4px solid rgb(250, 100, 100);
}

.active {
  color: red;
  border: 4px solid red;
}

</style>