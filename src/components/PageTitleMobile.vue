<template>
    <div class="">
        <h2 class="w-6/12 p-3 m-auto border-y-2 text-center text-4xl" :class="borderColor">{{title}}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';
import { stringifyQuery } from 'vue-router';

export default defineComponent({
  name: 'PageTitleMobile',
});
</script>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  borderColor: { type: String, required: true}
})
</script>
