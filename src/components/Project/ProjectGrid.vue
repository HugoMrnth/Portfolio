<template>
    <div class="h-80 flex justify-center flex-wrap mt-4">
        <div class="card w-2/5 h-2/6 md:h-1/2 md:w-1/5 bg-slate-900 flex items-end border-8 mx-1 md:mx-2 border-white text-white hover:scale-105 hover:rotate-m12" v-for=" card in cards" :key="card.id" :style="{'background-image': `url(${localhost}${card.attributes.image.data.attributes.url})`}" >
            <ProjectCard :title="card.attributes.titre" :url="card.attributes.url" />
        </div>
        {{localhost}}
    </div>
</template>

<script lang="ts">
import { defineComponent, defineProps, onMounted, ref } from 'vue';
import ProjectCard from './ProjectCard.vue';

export default defineComponent({
  name: 'ProjectGrid',
  components: {
        ProjectCard
  }
});
</script>

<script setup lang="ts">

    const cards = ref([])
    const localhost = "http://3.87.62.180/"
    onMounted(() => {
        fetch(`/api/projects?populate=image`, {
        headers: {
            "Authorization":'Bearer 401554c355310447b849f051bc86a6b29abc3287baff153cbd2816964c62c38c89c9b8e96baf52bddf41df2c496eeaa092dd29aade320c34c38ad5e7df9c5308e8c591e6435c54ffcc5c3ef15c899697ab99f7a6277f5d98b1ff75f109675fce091b04043d9c0afeab9e2ccd62f3dd24d4f9de2fe47a5109071fb0450795bb74',
        }
    }).then(reponse => {
        return reponse.json()
    }).then(json =>{
        console.log(json.data[0].attributes.image.data.attributes.url)
        cards.value= json.data
       
    })
    })
</script>


<style scoped>
    .card{
        background-position: center;
        background-size: cover;
    }
</style>