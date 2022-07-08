<template>
        <div class="h-full text-center flex justify-center items-center bg-black border-2 border-white" @click="$emit('update:modelValue', true)"><p>{{title}}</p></div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'InfosSectionMobile',
});
</script>

<script setup lang="ts">
const props = defineProps({
  title : {type: String, required: true}
})
</script>