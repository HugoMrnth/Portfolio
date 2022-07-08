<template>
  <div class="h-full md:h-screen pt-8 text-black section overflow-hidden" id="contact" data-section="text-black">
    <div class="md:hidden px-4">
      <PageTitleMobile title="Contact" borderColor="border-black" />
    </div>
    <div class="hidden md:block pt-10 pb-6 px-4 text-black">
      <PageTitleDesktop title="Contact"/>
    </div>
    <div class="mt-8 px-4 md:text-2xl md:mt-0 mb-4">
      <h2>If you have a question or a proposition I'll be happy to get back at you!</h2>
    </div>
    <ContactForm />
    <FooterAll />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitleMobile from '@/components/PageTitleMobile.vue';
import PageTitleDesktop from '@/components/PageTitleDesktop.vue';
import ContactForm from '@/components/Contact/ContactForm.vue';
import FooterAll from '@/components/FooterAll.vue';

// import HelloWorld from '@/views/HomeView.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'ContactView',
  components: {
    PageTitleMobile,
    PageTitleDesktop,
    ContactForm,
    FooterAll
},
});
</script>