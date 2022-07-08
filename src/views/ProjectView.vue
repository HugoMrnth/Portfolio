<template>
  <div class="min-h-screen bg-black px-0 md:px-4 py-8 text-white section" id="project" data-section="text-white">
    <div class="md:hidden">
      <PageTitleMobile title="Projects" borderColor="border-white" />
    </div>
    <div class="hidden md:block py-10 px-4 text-white">
      <PageTitleDesktop title="Project"/>
    </div>
    <ProjectGrid />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitleMobile from '@/components/PageTitleMobile.vue';
import PageTitleDesktop from '@/components/PageTitleDesktop.vue';
import ProjectGrid from '@/components/Project/ProjectGrid.vue';


export default defineComponent({
  name: 'ProjectView',
  components: {
    PageTitleMobile,
    PageTitleDesktop,
    ProjectGrid
},
});
</script>