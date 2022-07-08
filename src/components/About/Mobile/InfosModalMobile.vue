<template>
    <div class="absolute h-full top-0 left-0 bg-slate-900 text-white w-full md:hidden p-2">
        <div class="flex justify-end">
            <button class="rounded-full bg-primary border-2 border-primary py-1 px-2" @click="$emit('update:modelValue', false)">X</button>
        </div>
         <h3 class="text-4xl text-center">{{title}}</h3>
         <div class="w-8/12 m-auto text-center flex justify-center items-center mt-10">
             <div class="text-3xl mainMobile max-w-full" v-html="main"></div>
         </div>
      </div>
</template>


<script lang="ts">
import { defineComponent, defineProps, ref,onMounted } from 'vue';

export default defineComponent({
  name: 'InfoModalMobile',
});
</script>

<script setup lang="ts">
import { marked } from "marked";
const props = defineProps({
  title: { type: String, required: true },
  id: {type: String, required: true}
})


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

</script>


<style>
    .mainMobile li  {
        padding: 0.8rem;
        
    }
    .main hr{
        width: 40%;
        margin: auto;
    }
</style>