<template>
  <HeaderDesktop />
  <HomeView />
  <AboutView />
  <ProjectView />
  <BackHome />
  <ContactView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import HomeView from './HomeView.vue';
import AboutView from './AboutView.vue';
import ProjectView from './ProjectView.vue';
import HeaderDesktop from '@/components/HeaderDesktop.vue';
import BackHome from '@/components/BackHome.vue';
import ContactView from './ContactView.vue';


export default defineComponent({
  name: 'MainView',
  components: {
        HomeView,
        AboutView,
        ProjectView,
        HeaderDesktop,
        BackHome,
        ContactView
  },
});
</script>