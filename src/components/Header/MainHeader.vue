<template>
  <ul>
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
  </ul>
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
    justify-content: space-around;
    padding-top: 10px;
}

li {
    padding: 10px 15px;
    border-radius: 5px;
    transition: all 200ms ease;
    font-weight: 800;
}

li:hover {
    background: #9fd3c7;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

.contactLink {
    background: #9fd3c7;
}

.contactLink:hover {
    background: #57746d;
    color: white;
}

</style>