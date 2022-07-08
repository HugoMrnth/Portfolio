<template>
        <textarea class="w-full rounded p-2" :rows="rows" placeholder="Your Message" @input="$emit('update:modelValue', $event?.target?.value)"></textarea>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'TextArea',
});
</script>

<script setup lang="ts">
const props = defineProps({
  rows: { type: String, required: true },
})
 
</script>

<style>
</style>