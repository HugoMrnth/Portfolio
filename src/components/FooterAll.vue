<template>
  <nav class="flex bg-black w-full justify-center py-4 md:hidden text-2xl static bottom-0">
        <p class="text-white px-2" @click="anchor('about')">About</p><span class="text-white">|</span>
        <p class="text-white px-2" @click="anchor('project')">Projects</p><span class="text-white">|</span>
        <p class="text-white px-2" @click="anchor('contact')">Contact</p>
  </nav>
  <nav class="hidden md:flex bg-black text-white w-full p-5 mt-5">
    <p><i class="fa fa-copyright" aria-hidden="true"></i> 2022 - created by Hugo Marneth</p>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterAll',
});
</script>

<script setup lang="ts">
  function anchor(refName: string) {
    // alert(refName);
    let element = document.getElementById(refName);
    element?.scrollIntoView({behavior: "smooth"})
  }
</script>