<template>
  <button class="hidden md:block rounded-full bg-primary text-white fixed right-0 mr-5 mb-5 bottom-0 px-5 py-2 text-4xl hover:animate-bounce" :class="button" @click="backTop">
    <i class="fa fa-long-arrow-up"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// import HelloWorld from '@/views/HomeView.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'BackHome',
  components: {
},
});
</script>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    const button = ref('md:hidden')
    function backTop() {
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'})
    }


    onMounted(() => {
        let aboutDebut: any = document.getElementById('about')?.offsetTop
        aboutDebut = aboutDebut/2

         window.addEventListener('scroll', () => {
             if(document.documentElement.scrollTop > aboutDebut) {
                 button.value = 'md:block'
            } else {
                button.value = 'md:hidden'
            }
        })

    })

</script>