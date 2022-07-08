<template>
  <div class="h-screen px-4 py-8 text-black section " id="about" data-section="text-black">
    <div class="mobile md:hidden relative">
      <PageTitleMobile title="About" borderColor="border-black" />
      <ContactCardMobile />
      <ClickMeMobile />
      <div class="h-2/full grid grid-rows-2 grid-cols-2 text-3xl bg-white text-white">
        <InfosSectionMobile title="Coding Skills" v-model='coding' />
        <InfosSectionMobile title="Languages" v-model='language' />
        <a href="https://www.youtube.com/watch?v=Tish3KkNnLc" class="h-full text-center flex justify-center items-center bg-black border-2 border-white">Resume</a>
        <InfosSectionMobile title="Interests" v-model='interests' />
      </div>
      <InfosModalMobile title="Coding Skills" id="3" v-if="coding"  v-model='coding'/>
      <InfosModalMobile title="Languages" id="5" v-if="language"  v-model='language'/>
      <InfosModalMobile title="Interests" id="6" v-if="interests"  v-model='interests'/>
    </div>
    <div class="desktop hidden md:block py-10 px-4">
      <PageTitleDesktop title="About" borderColor="border-black" />
      <InfosGridDesktop />
    </div>
  </div>
</template>

<script lang="ts">

// import for mobiles

import { defineComponent } from 'vue';
import PageTitleMobile from '@/components/PageTitleMobile.vue';
import ContactCardMobile from '@/components/About/Mobile/ContactCardMobile.vue';
import ClickMeMobile from '../components/About/Mobile/ClickMeMobile.vue';
import InfosSectionMobile from '@/components/About/Mobile/InfosSectionMobile.vue';
import InfosModalMobile from '@/components/About/Mobile/InfosModalMobile.vue';

// import for desktops
import PageTitleDesktop from '@/components/PageTitleDesktop.vue';
import InfosGridDesktop from '@/components/About/Desktop/InfosGridDesktop.vue';

export default defineComponent({
  name: 'AboutView',
  components: {
    PageTitleMobile,
    ContactCardMobile,
    ClickMeMobile,
    InfosSectionMobile,
    InfosModalMobile,
    PageTitleDesktop,
    InfosGridDesktop
},
});
</script>


<script setup lang="ts">
  import { ref } from 'vue';
  
  const coding = ref(false);
  const language = ref(false);
  const resume = ref(false);
  const interests = ref(false);


</script>


<style>
  h2 {
    font-family: 'Oswald', sans-serif;
    letter-spacing: 0.2rem;
    text-align: center;
  }
</style>
