<template>
    <div>
        <button class="my-2 mx-2 p-2 bg-primary rounded text-white uppercase" type="submit">{{message}}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'SubmitBtn',
});
</script>

<script setup lang="ts">
const props = defineProps({
  message: { type: String, required: true },
})
 
</script>

<style>
</style>