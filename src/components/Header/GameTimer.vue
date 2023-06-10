<template>
    <div class="time" :class="!gameOver ? '' : 'animated-heading'">
        <h3>{{ timerMinutes }} min : {{ timerSeconds }} sec</h3>
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
        gameOver: {
            type: Boolean as PropType<boolean>,
            required: true,
        }
    }
})
</script>

<style>

</style>