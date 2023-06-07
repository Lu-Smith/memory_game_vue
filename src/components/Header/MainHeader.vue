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
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
}

li {
    padding: 10px 15px;
    border-radius: 5px;
    transition: all 200ms ease;
    font-weight: 800;
    transform: translateX(0);
    width: 100px;
    cursor: pointer;
}

li:hover {
  background: #57746d;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  transform: translateY(10px);
  color: white;
  font-weight: 600;
}

.menu-enter-active,
.menu-leave-active {
  transition: all 200ms ease;
}

.menu-enter,
.menu-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>