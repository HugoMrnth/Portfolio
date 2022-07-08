<template>
    <div class="h-2/full grid grid-rows-2 grid-cols-2 text-3xl bg-white text-white">
        <div class="h-full text-center flex justify-center items-center bg-black border-2 border-white"><p>Coding<br>Skills</p></div>
        <div class="h-full flex justify-center items-center bg-primary text-black border-2 border-white"><p>Languages</p></div>
        <div class="h-full flex justify-center items-center bg-primary text-black border-2 border-white"><p>Resume</p></div>
        <div class="h-full flex justify-center items-center bg-black border-2 border-white"><p>Interests</p></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'InfosGridMobile',
});
</script>

<script setup lang="ts">
// const props = defineProps({
  
// })
</script>