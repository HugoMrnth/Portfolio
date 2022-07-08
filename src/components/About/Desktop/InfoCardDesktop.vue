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
    fetch(`/api/infos/${props.id}`, {
        headers: {
            "Authorization":'Bearer 401554c355310447b849f051bc86a6b29abc3287baff153cbd2816964c62c38c89c9b8e96baf52bddf41df2c496eeaa092dd29aade320c34c38ad5e7df9c5308e8c591e6435c54ffcc5c3ef15c899697ab99f7a6277f5d98b1ff75f109675fce091b04043d9c0afeab9e2ccd62f3dd24d4f9de2fe47a5109071fb0450795bb74',
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