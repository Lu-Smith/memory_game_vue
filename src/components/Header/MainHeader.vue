<template>
  <transition-group name="menu" tag="ul">
    <li v-for="(item, index) in menuItems" :key="index">{{ item }}</li>
  </transition-group>
</template>

<script lang="ts">
export default {
  data() {
    return {
      menuItems: ['Level 1', 'Level 2', 'Level 3', 'Contact']
    }
  }
}
</script>

<style>
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0 0 0;
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
  color: #9fd3c7;
}

li::before {
  content: "";
  position: absolute;
  top: 100%;
  right: 30%;
  width: 30px;
  height: 5px;
  background-color: #FF4081;
  transform: translateX(100%);
  transition: transform 0.5s;
  opacity: 0;
  z-index: -1;
}

li:hover::before {
  opacity: 1;
  animation: moveBackground 1s infinite linear;
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