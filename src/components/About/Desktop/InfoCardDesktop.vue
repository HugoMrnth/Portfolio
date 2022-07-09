<template>
    <div class="card h-full text-center bg-transparent border-4 border-white overflow-hidden" v-on:mouseover="toBackCard" v-on:mouseleave="toFrontCard">
        <Transition name="fade">
            <div class="front text-3xl justify-center items-center h-full w-full flex " v-if="showFront">
                <p class="text-white">{{title}}</p>
            </div>
        </Transition>

        <Transition name="slide-fade">
            <div class="back bg-slate-900 text-white w-full h-full justify-center items-center flex" v-if="showBack">
                <div class="w-8/12 main" v-html="main"></div>
            </div>
        </Transition>
      </div>
</template>


<script lang="ts">
import { defineComponent, defineProps, ref,onMounted } from 'vue';

export default defineComponent({
  name: 'InfoCardDesktop',
});
</script>

<script setup lang="ts">
import { marked } from "marked";
const props = defineProps({
  title: { type: String, required: true },
  id: {type: String, required: true}
})

const frontDisplay = ref('flex')
const showBack = ref(false)
const showFront = ref(true)
const backDisplay = ref('hidden')
const main:any = ref('')



onMounted(() => {
    fetch(`https://hmportfolio.fr/api/infos/${props.id}`, {
        headers: {
            "Authorization":'Bearer 9ae3f7b5a4da8e2b2c37adaf213a58598ac0912c14fd306aab9b505959b2f30e303b3c4bdc2d1f24377a30405c1e3c86cad4b7cf7d61e24dc3394ba8fe145e20b8f35c56fa62fbae2e5060843d1d37c08a08b56e067af216b31d41a1d21f139ba6e7d4782b49fec98c8b1ee008476a76f8f3e00d6a4361c0a21eedd41db60994',
        }
    }).then(reponse => {
        return reponse.json()
    }).then(json =>{
        // console.log(json.data.attributes.Main_Content)
        main.value = marked(json.data.attributes.Main_Content)
    })
})


 function toBackCard() {
     showFront.value = false
     showBack.value = true
    frontDisplay.value = 'hidden'
    backDisplay.value = 'flex'
 }
 function toFrontCard() {
     backDisplay.value = 'hidden'
     showBack.value = false
    showFront.value = true
    frontDisplay.value = 'flex'

 }
</script>


<style>

    .slide-fade-enter-active {
        transition: all 0.8s ease-out;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: rotateY(90deg);
        opacity: 0;
    }
    .fade-enter-active {
        transition: all 0.5s ease-out;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        transform: translateX(-20px);

    }
    .main li  {
        padding: 0.3rem;
    }
    .main hr{
        width: 40%;
        margin: auto;
    }
</style>