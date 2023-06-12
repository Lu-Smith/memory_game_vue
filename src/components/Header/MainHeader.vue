<template>
  <transition-group name="menu" tag="ul">
    <li v-for="(item, index) in menuItems" :key="index" @click="handleLevels(item)" :class="item === level ? 'active-level' : ''">{{ item }}</li>
  </transition-group>
</template>

<script lang="ts">

interface MainHeaderInstance {
  $emit(event: 'handleLevels', item: string): void;
}

export default {
  props: ['level'],
  data() {
    return {
      menuItems: ['Level 1', 'Level 2', 'Level 3']
    }
  },
  methods: {
    handleLevels(this: MainHeaderInstance, item: string) {
      this.$emit('handleLevels', item);
    }
  }
}
</script>

<style>
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style: none;
  padding: 0;
  font-size: 20px;
}

li {
  position: relative;
  color: rgb(250, 100, 100);
  transition: color 0.3s;
  z-index: 1;
}

li:hover {
  color: #57746d;
}

li::before {
  content: "";
  position: absolute;
  top: 100%;
  right: 30%;
  width: 30px;
  height: 5px;
  background-color: #e43030;
  transform: translateX(100%);
  transition: transform 0.5s;
  opacity: 0;
  z-index: -1;
}

li:hover::before {
  opacity: 1;
  animation: moveBackground 1s infinite linear;
}

.active-level {
  color: #57746d;
  border-bottom: 4px solid #e43030;
}

@keyframes moveBackground {
  0% {
    transform: translateX(-50%);
  }
  25% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(100%);
  }
  75% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>