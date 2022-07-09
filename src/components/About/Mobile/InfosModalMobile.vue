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