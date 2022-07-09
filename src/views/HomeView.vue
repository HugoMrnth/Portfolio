<template>
  <div class="bg-black h-screen text-white px-4 py-8 section" id="home" data-section="text-white">
    <div class="flex flex-col items-end text-2xl pr-2 md:hidden">
      <a href="https://github.com/HugoMrnth"><i class="fa fa-github" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/hugo-marneth/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
    </div>
    <div class="pr-2 w-5/12 md:w-4/12 md:mt-14">
      <h1 class="text-white flex flex-col text-5xl pb-3">Hugo <span class="text-primary">Marneth</span></h1>
      <hr class="w-8/12 m-auto md:w-3/12">
    </div>
    <div class="flex md:h-3/4 justify-between md:w-10/12">
      <div class="image w-full my-8 md:my-4 md:w-4/6 md:ml-8 md:bg-center"></div>
      <div class="hidden md:flex flex-col text-7xl">
          <h3 class="flex flex-col mb-6">Front-end <span>Developper</span></h3>
          <h3 class="flex flex-col text-primary text-end">Nantes, <span>France</span></h3>
      </div>
    </div>
      <p class="py-5 text-xl border-dashed border-y-2 md:hidden">Hello Dolly, the name is Hugo and I’m a 26 yo Front-end developper currently studying at the “Web@cadémie” by Epitec in Nantes, France.</p>
    <NavMobile />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/views/HomeView.vue'; // @ is an alias to /src
import NavMobile from '@/components/NavMobile.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NavMobile,

  },
});
</script>

<style>
  h1, h3 {
    font-family: 'Oswald', sans-serif;
    
  }
  h1{
    letter-spacing: 0.2rem;
    text-align: center;
  }
  p, li, a {
    font-family: 'Poiret One', sans-serif;
  }
  .image {
    background-image: url('../../public/images/pexels-luis-gomes-546819.jpg');
    background-size: cover;
    min-height: 300px;
    /* margin: auto; */
  }
</style>


