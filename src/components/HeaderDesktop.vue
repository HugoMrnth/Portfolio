<template>
  <nav class="hidden md:flex w-full justify-between p-4 fixed nav" :class="navColor">
    <div class="flex justify-between text-2xl pr-2 opacity-100">
      <a href="https://github.com/HugoMrnth"><i class="fa fa-github mx-3" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/hugo-marneth/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
    </div>
    <div class="flex items-end text-xl cursor-pointer">
        <p class="px-2" @click="anchor('about')">About</p>
        <p class="px-2" @click="anchor('project')">Projects</p>
        <p class="px-2" @click="anchor('contact')">Contact</p>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderDesktop',
});
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
  const navColor = ref('text-white')

  function anchor(refName: string) {
    let element = document.getElementById(refName);
    element?.scrollIntoView({behavior: "smooth"})
  }
    onMounted(() =>{
        const aboutTop: any = document.getElementById('about')?.offsetTop
        const aboutHeight: any = document.getElementById('about')?.offsetHeight
        const aboutBottom: any = aboutTop + aboutHeight - 20
        const contactTop: any = document.getElementById('contact')?.offsetTop
        const contactHeight: any = document.getElementById('contact')?.offsetHeight
        const contactBottom: any = contactTop + contactHeight - 20
    
      window.onscroll = function() {            
          if((document.documentElement.scrollTop > (aboutTop - 25) && document.documentElement.scrollTop < aboutBottom) || (document.documentElement.scrollTop > (contactTop - 25) && document.documentElement.scrollTop < contactBottom)) {
              navColor.value = "text-black";
          } else {
              navColor.value = "text-white";
          }

      }

      const observerOptions = {
          root: null,
          threshold: 0,
          rootMargin: '0px 0px -50px 0px'
      };
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
          if (entry.isIntersecting ) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
          }
      });
      }, observerOptions);
      window.addEventListener('DOMContentLoaded', (event) => { 
          const sections = document.querySelectorAll('.section');
          for (let section of sections) {
            if(section !== sections[0]){
              observer.observe(section);
            }
          }
      });

    })

</script>


<style>
    .nav {
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }

    .section {
      opacity: 0;
      transform: translateY(50px);
      transition-property: transform, opacity;
      transition-duration: 1s;
      transition-timing-function: linear;
    }

    .in-view, #home {
      transform: none;
      opacity: 1;
    }
</style>