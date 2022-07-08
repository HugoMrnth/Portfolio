<template>
    <div class="h-80 mt-2 grid-photo grid grid-rows-2 grid-cols-3">
      <InfoCardDesktop title="About" id="1"/>
      <InfoCardDesktop title="Contact" id="2" />
      <InfoCardDesktop title="Coding Skills" id="3" />
      <InfoCardDesktop title="Soft Skills" id="4"/>
      <InfoCardDesktop title="Languages" id="5"/>
      <InfoCardDesktop title="Interests" id="6"/>      
    </div>
</template>

<script lang="ts">
import { defineComponent, defineProps, onMounted } from 'vue';
import InfoCardDesktop from './InfoCardDesktop.vue';

export default defineComponent({
  name: 'InfosGridMobile',
  components: {
    InfoCardDesktop
  }
});
</script>

<script setup lang="ts">
</script>


<style scoped>
  .grid-photo {
    background-image: url("../../../../public/images/landscape-g04a6ec2ef_1920.jpg");
    background-size: cover;
    background-position:25% 75%;
  }

  .card {
    background: rgba(0, 0, 0, 0.3);
  }

</style>