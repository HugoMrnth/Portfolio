<template>
    <input :type="type" :placeholder="props.placeholder" :name="name" class="p-2 border-2 border-black rounded min-w-48 my-2" @input="$emit('update:modelValue', $event?.target?.value)">
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'InputText',
});
</script>

<script setup lang="ts">
const props = defineProps({
  placeholder: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true},
})
 
</script>

<style>
</style>