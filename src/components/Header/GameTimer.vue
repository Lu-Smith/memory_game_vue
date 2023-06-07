<template>
    <div class="timer">
        <h3>{{ timerMinutes }} : {{ timerSeconds }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PropType } from 'vue';
export default defineComponent({
    props: {  
        timerMinutes: {  
            type: Number as PropType<number | string>,
            required: true}, 
        timerSeconds: {
            type: Number as PropType<number | string>,
            required: true,},
    }
})
</script>

<style>
.timer {
    background: black;
    color: #9fd3c7;
    position: fixed;
    top: 0;
    right: 0;
    width: 100dvw;
    padding: 20px 0;
}
</style>