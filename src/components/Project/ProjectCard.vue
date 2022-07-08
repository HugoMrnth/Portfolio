<template>
    <div class="band text-black w-full p-4 bg-white justify-center items-center flex" >
        <a :href="url" class="text-2xl underline">{{title}}</a>
    </div>
</template>


<script lang="ts">
import { defineComponent, defineProps, ref,onMounted } from 'vue';

export default defineComponent({
  name: 'ProjectCard',
});
</script>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  url: {type: String, required: true },
  image: {type: String, required:false}
})

const frontDisplay = ref('flex')
const showBack = ref(false)
const showFront = ref(true)
const backDisplay = ref('hidden')
const main:any = ref('')


</script>


<style>
    
    .band {
        background-color: rgba(255, 255, 255, 0.6);
    }
    .band a {
        font-family: 'Oswald', sans-serif;
    }
</style>

<!-- style="background-image: url(`${props.image}`)" -->