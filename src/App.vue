<template>
  <GameTimer />
  <h1>Hello World</h1>
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainFooter from './components/Footer/MainFooter.vue';
import GameTimer from './components/Header/GameTimer.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainFooter,
    GameTimer
}
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
