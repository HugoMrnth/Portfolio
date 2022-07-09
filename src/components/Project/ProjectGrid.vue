<template>
    <div class="h-80 flex justify-start flex-wrap mt-4 w-9/12 m-auto">
        <div class="card w-2/5 h-2/6 md:h-1/2 md:w-30 bg-slate-900 flex items-end border-8 m-1 md:mx-2 border-white text-white hover:scale-105 hover:rotate-m12" v-for=" card in cards" :key="card.id" :style="{'background-image': `url(${localhost}${card.attributes.image.data.attributes.url})`}" >
            <ProjectCard :title="card.attributes.titre" :url="card.attributes.url" />
        </div>
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
    const localhost = "https://hmportfolio.fr"
    onMounted(() => {
        fetch(`https://hmportfolio.fr/api/projects?populate=image`, {
        headers: {
            "Authorization":'Bearer 9ae3f7b5a4da8e2b2c37adaf213a58598ac0912c14fd306aab9b505959b2f30e303b3c4bdc2d1f24377a30405c1e3c86cad4b7cf7d61e24dc3394ba8fe145e20b8f35c56fa62fbae2e5060843d1d37c08a08b56e067af216b31d41a1d21f139ba6e7d4782b49fec98c8b1ee008476a76f8f3e00d6a4361c0a21eedd41db60994',
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