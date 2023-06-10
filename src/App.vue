<template>
  <MainGame />
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainFooter from './components/Footer/MainFooter.vue';
import MainHeader from './components/Header/MainHeader.vue';
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
