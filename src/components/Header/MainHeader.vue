<template>
  <transition-group name="menu" tag="ul">
    <li>
        Level 1
    </li>
    <li>
        Level 2
    </li>
    <li>
        Level 3
    </li>
    <li class="contactLink">
        Contact
    </li>
  </transition-group>
</template>

<script lang="ts">
export default {
    

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

.contactLink {
    background: #9fd3c7;
}

</style>