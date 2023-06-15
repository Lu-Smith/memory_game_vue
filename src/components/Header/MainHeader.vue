<template>
  <div>
    <div v-if="mobileMenu" class="mobile-menu" @click="toggleMenu">
      <span class="material-symbols-outlined">
        menu
      </span>
    </div>
    <transition-group name="menu" tag="ul" @click="toggleMenu" :class="mobileMenu ? 'active-menu' : ''"  >
      <li v-for="(item, index) in menuItems" :key="index" @click="handleLevels(item)" :class="item === level ? 'active-level' : ''" >{{ item }}</li>
    </transition-group>
  </div>

</template>

<script lang="ts">

interface MenuProps {
  mobileMenu: boolean
}

interface MainHeaderInstance {
  $emit(event: 'handleLevels', item: string): void;
}

export default {
  props: ['level'],
  data() {
    return {
      menuItems: ['Level 1', 'Level 2', 'Level 3'],
      mobileMenu: true 
    }
  },
  methods: {
    handleLevels(this: MainHeaderInstance, item: string) {
      this.$emit('handleLevels', item);
    },
    toggleMenu(this: MenuProps) {
      this.mobileMenu = !this.mobileMenu
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

.mobile-menu{
  display: none;
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

@media screen and (max-width: 900px) {
  ul {
    gap: 25px;
    font-size: 15px;
  }
  .active-level {
    border-bottom: 3px solid #e43030;
  }
}

@media screen and (max-width: 600px) {
  .mobile-menu{
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .active-menu {
    display: none;
  }

  ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  padding: 20px;
  width: 100px;
  margin: 0 auto;
}
}
</style>