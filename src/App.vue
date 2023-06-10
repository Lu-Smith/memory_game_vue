<template>
  <MainGame />
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainFooter from './components/Footer/MainFooter.vue';
import MainGame from './components/Game/MainGame.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainFooter,
    MainGame
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 40px;
}
</style>
