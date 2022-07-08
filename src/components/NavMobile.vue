<template>
  <nav class="flex w-full justify-center py-5 md:hidden text-2xl">
        <p class="text-white  px-2" @click="anchor('about')">About</p><span class="text-white">|</span>
        <p class="text-white px-2" @click="anchor('project')">Projects</p><span class="text-white">|</span>
        <p class="text-white px-2" @click="anchor('contact')">Contact</p>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavMobile',
});
</script>

<script setup lang="ts">
  function anchor(refName: string) {
    // alert(refName);
    let element = document.getElementById(refName);
    console.log(element)
    element?.scrollIntoView({behavior: "smooth"})
  }
</script>




