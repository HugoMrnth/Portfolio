<template>
    <div class="flex flex-col items-end mr-8 text-2xl">
          <p class="click" >Click me</p>
          <i class="fa fa-long-arrow-down text-6xl mt-2 mr-10" aria-hidden="true"></i>
      </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';
import { stringifyQuery } from 'vue-router';

export default defineComponent({
  name: 'ClickMeMobile',
});
</script>

<script setup lang="ts">
// const props = defineProps({
  
// })
</script>

<style>
.fa-long-arrow-down {
    transform: rotate(32deg)
  }
  .click {
    font-family: 'Oswald', sans-serif;
  }
</style>